import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContract } from '../../contexts/ContractContext'
import Coinflip_abi from '../../contexts/ContractContext/abi/games/GameCoinflip.sol/GameCoinflip.json'
import { setBetResult } from '../../contexts/ReduxContext/reducers/coinflip'
import { setWinLose } from '../../contexts/ReduxContext/reducers/game'
import BigNumber from 'bignumber.js'
import { useGlobal } from '../../contexts/GlobalContext'
import { toast } from "react-toastify"

const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const useCoinflip = (betNum, betAmount) => {
  const { getMaxPayout, approveToken, refreshPages, playCoinflip, decodeTxLogs, A2D } = useContract()
  const { contracts } = useSelector((state) => state.chain)
  const { balance, vaultCap} = useSelector(state => state.vault)
  const { cutDecimal } = useGlobal()

  const [maxPayout, setMaxPayout] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    let ac = new AbortController()

    if (contracts && contracts.coinflip) {
      getMaxPayout(
        contracts.coinflip,
        betNum,
        Array.from({ length: 50 }).map(() => 0),
      )
        .then((r) => {
          if (ac.signal.aborted === false) {
            setMaxPayout(r)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return () => ac.abort()
  }, [betNum, getMaxPayout, contracts.coinflip])

  const approveUSDTForHouse = useCallback(() => {
    const id = toast.loading(`Approving USDT...`, toastOptions);

    approveToken(contracts.usdt, contracts.house)
      .then((tx) => {
        toast.update(id, {
          render: "Approval: " + tx.transactionHash,
          type: "success",
          isLoading: false,
        });
        refreshPages()
      })
      .catch((err) => {
        console.log(`${err.message}`)
        toast.update(id, {
          render: "Approval: " + err.message,
          type: "error",
          isLoading: false,
        });
      })
  }, [
    approveToken,
    contracts.usdt,
    contracts.house,
    refreshPages,
  ])

  const play = useCallback(() => {
    if (BigNumber(betAmount).eq(0)) {
      toast.warning('Please input bet amount', toastOptions)
      return
    }
    const maxBet = BigNumber(vaultCap).times(0.025).div(BigNumber(maxPayout))
    if (BigNumber(betAmount).gt(maxBet)) {
      toast.warning('You bet over maximum bet amount ' + cutDecimal(maxBet.toString(), 6) + ' USDT', toastOptions)
      return
    }

    if (BigNumber(betAmount).gt(BigNumber(balance))) {
      toast.warning('You bet over your USDT balance ' + balance, toastOptions)
      return
    }

    const id = toast.loading(`Casting a Coinflip for ${betNum === 1 ? "tails" : "heads"}...`, toastOptions)

    playCoinflip(betNum, betAmount)
      .then((tx) => {
        // console.log('--->', tx)
        refreshPages()
        toast.done(id)

        const logs = decodeTxLogs(Coinflip_abi.abi, tx.logs)
        const gameInfo = logs.find((r) => r.name === 'GameEnd')
        console.log('Coinflip play result:', tx.logs, gameInfo)
        if (gameInfo) {
          A2D(contracts.usdt, gameInfo[7]).then((r) => {
            if (parseFloat(r.toString()) > betAmount) {
              toast.success("YOU WIN")
              dispatch(setWinLose(1))
            } else {
              toast.error("YOU LOSE")
              dispatch(setWinLose(0))
            }

            dispatch(
              setBetResult({
                cast: parseInt(gameInfo[2][0]),
                deposit: betAmount,
                payout: parseFloat(r.toString()),
                tx: tx.hash,
              }),
            )
          })
        }
      })
      .catch((err) => {
        console.log(`${err.message}`)
        toast.done(id);
        toast.error("Transaction failed")
      })
  }, [
    playCoinflip,
    refreshPages,
    betNum,
    betAmount,
    cutDecimal,
    maxPayout,
    balance,
    vaultCap,
    decodeTxLogs,
    A2D,
    contracts.usdt,
    dispatch,
  ])

  return { maxPayout, approveUSDTForHouse, play }
}

export default useCoinflip
