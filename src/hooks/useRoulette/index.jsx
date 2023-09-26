import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContract } from '../../contexts/ContractContext'
import Roulette_abi from '../../contexts/ContractContext/abi/games/GameRoulette.sol/GameRoulette.json'
import { setBetResult } from '../../contexts/ReduxContext/reducers/roulette'
import BigNumber from 'bignumber.js'
import { setWinLose } from '../../contexts/ReduxContext/reducers/game'
import { useGlobal } from '../../contexts/GlobalContext'
import { toast } from 'react-toastify'

const useRoulette = (chipData) => {
  const { getMaxPayout, getBetHistory, approveToken, refreshPages, playRoulette, decodeTxLogs, A2D } = useContract()
  const { contracts } = useSelector((state) => state.chain)
  const usdtPerChip = useSelector((state) => state.roulette.usdtPerChip)
  const { balance, vaultCap } = useSelector(state => state.vault)
  const { cutDecimal } = useGlobal()

  const [maxPayout, setMaxPayout] = useState(0)
  const [betHistory, setBetHistory] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    let ac = new AbortController()
    
    console.log("useRoulette", contracts.roulette, chipData)
    
    if  (contracts && contracts.roulette) {
      getMaxPayout(contracts.roulette, '0', chipData)
      .then((r) => {
        if (ac.signal.aborted === false) {
          setMaxPayout(r)
        }
      })
      .catch((err) => {
        console.log(err)
      })

      getBetHistory(contracts.roulette)
      .then((r) => {
        if (ac.signal.aborted === false) {
          setBetHistory(r)
        }
      })
    }

    return () => ac.abort()
  }, [getMaxPayout, contracts.roulette, chipData])

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
    const chipSum = chipData.reduce((c, v) => BigNumber(c).plus(BigNumber(v)).toString(), '0')
    const totalUSDTdeposit = BigNumber(chipSum).times(usdtPerChip).toNumber()

    if (BigNumber(totalUSDTdeposit).eq(0)) {
      toast.warning('Please input bet amount', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }

    const maxBet = BigNumber(vaultCap).times(0.025).div(BigNumber(maxPayout))
    if (BigNumber(totalUSDTdeposit).gt(maxBet)) {
      toast.warning('You bet over maximum bet amount ' + cutDecimal(maxBet.toString(), 6) + ' USDT', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }

    if (BigNumber(totalUSDTdeposit).gt(BigNumber(balance))) {
      toast.warning('You bet over your USDT balance ' + balance, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }

    const id = toast.loading(`Rolling a Roulette...`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })

    playRoulette(chipData)
      .then((tx) => {
        refreshPages()
        toast.done(id)

        const logs = decodeTxLogs(Roulette_abi.abi, tx.logs)
        const gameInfo = logs.find((r) => r.name === 'GameEnd')
        console.log('roulette play result:', tx.logs, gameInfo)
        if (gameInfo) {
          A2D(contracts.usdt, gameInfo[7]).then((r) => {
            if (parseFloat(r.toString()) > totalUSDTdeposit) {
              toast.success("YOU WIN")
              dispatch(setWinLose(1))
            } else {
              toast.error("YOU LOSE")
              dispatch(setWinLose(0))
            }
            dispatch(
              setBetResult({
                cast: parseInt(gameInfo[2][0]),
                chipCount: chipSum,
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
    decodeTxLogs,
    A2D,
    dispatch,
    contracts.usdt,
    playRoulette,
    refreshPages,
    chipData,
    usdtPerChip,
    cutDecimal,
    maxPayout,
    betHistory,
    balance,
    vaultCap,
  ])

  return { maxPayout, betHistory, approveUSDTForHouse, play }
}

export default useRoulette
