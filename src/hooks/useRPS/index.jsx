import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContract } from '../../contexts/ContractContext'
import RPS_abi from '../../contexts/ContractContext/abi/games/GameRPS.sol/GameRPS.json'
import { setBetResult } from '../../contexts/ReduxContext/reducers/rps'
import { setWinLose } from '../../contexts/ReduxContext/reducers/game'
import BigNumber from 'bignumber.js'
import { useGlobal } from '../../contexts/GlobalContext'
import { toast } from "react-toastify"

const useRPS = (betNum, betAmount) => {
  const { getMaxPayout, getBetHistory, approveToken, refreshPages, playRPS, decodeTxLogs, A2D } = useContract()
  const { contracts } = useSelector((state) => state.chain)
  const { balance, vaultCap} = useSelector(state => state.vault)
  const { cutDecimal } = useGlobal()

  const [maxPayout, setMaxPayout] = useState(0)
  const [betHistory, setBetHistory] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    let ac = new AbortController()

    if (contracts && contracts.rps) {
      getMaxPayout(
        contracts.rps,
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

        getBetHistory(contracts.rps)
        .then((r) => {
          if (ac.signal.aborted === false) {
            setBetHistory(r)
          }
        })
    }

    return () => ac.abort()
  }, [betNum, getMaxPayout, contracts.rps])

  const approveUSDTForHouse = useCallback(() => {
    const id = toast.loading(`Approving USDT...`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    approveToken(contracts.usdt, contracts.house)
      .then((tx) => {
        toast.done(id)
        toast.success("Approval: " + tx.hash)
        refreshPages()
      })
      .catch((err) => {
        console.log(`${err.message}`)
        toast.done(id)
        toast.error("Approval: Transaction failed")
      })
  }, [
    approveToken,
    contracts.usdt,
    contracts.house,
    refreshPages,
  ])

  const play = useCallback(() => {
    if (BigNumber(betAmount).eq(0)) {
      toast.warning('Please input bet amount')
      return
    }
    const maxBet = BigNumber(vaultCap).times(0.025).div(BigNumber(maxPayout))
    if (BigNumber(betAmount).gt(maxBet)) {
      toast.warning('You bet over maximum bet amount ' + cutDecimal(maxBet.toString(), 6) + ' USDT')
      return
    }

    if (BigNumber(betAmount).gt(BigNumber(balance))) {
      toast.warning('You bet over your USDT balance ' + balance)
      return
    }

    const id = toast.loading(`Making a pick - ${betNum === 0 ? "ROCK" : betNum === 1 ? "SCISSORS" : "PAPER" } ...`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    playRPS(betNum, betAmount)
      .then((tx) => {
        toast.done(id)
        refreshPages()

        const logs = decodeTxLogs(RPS_abi.abi, tx.logs)
        const gameInfo = logs.find((r) => r.name === 'GameEnd')
        console.log('RPS play result:', tx.logs, gameInfo)
        if (gameInfo) {
          console.log("payout", gameInfo[7]);
          A2D(contracts.usdt, gameInfo[7]).then((r) => {
            
            if (parseFloat(r.toString()) > betAmount) {
              toast.success("YOU WIN")
              dispatch(setWinLose(1))
            } else if (parseFloat(r.toString()) < betAmount) {
              toast.error("YOU LOSE")
              dispatch(setWinLose(0))
            } else {
              toast.info("TIE!")
              dispatch(setWinLose(2))
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
    playRPS,
    refreshPages,
    betNum,
    betAmount,
    cutDecimal,
    maxPayout,
    betHistory,
    balance,
    vaultCap,
    decodeTxLogs,
    A2D,
    contracts.usdt,
    dispatch,
  ])

  return { maxPayout, betHistory, approveUSDTForHouse, play }
}

export default useRPS
