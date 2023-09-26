import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useContract } from '../../contexts/ContractContext'
import Dice_abi from '../../contexts/ContractContext/abi/games/GameDice.sol/GameDice.json'
import { setBetResult } from '../../contexts/ReduxContext/reducers/dice'
import { setWinLose } from '../../contexts/ReduxContext/reducers/game'
import BigNumber from 'bignumber.js'
import { useGlobal } from '../../contexts/GlobalContext'
import { toast } from 'react-toastify'
import { ethers } from "ethers";

const useDice = (betDices, betAmount) => {
  const { getMaxPayout, getBetHistory, approveToken, refreshPages, playDice, decodeTxLogs, A2D } = useContract()
  const { contracts } = useSelector((state) => state.chain)
  const { balance, vaultCap} = useSelector(state => state.vault)
  const { cutDecimal } = useGlobal()

  const [maxPayout, setMaxPayout] = useState(0)
  const [betHistory, setBetHistory] = useState([])
  const dispatch = useDispatch()

  let checkNum = 0;
  let data = Array.from({ length: 50 }).map(() => 0)
  for (let index = 0; index < 6; index++) {
    if (betDices[index]) checkNum++
    data[index] = Number(betDices[index]);
  }

  console.log("checknum", checkNum)

  useEffect(() => {
    let ac = new AbortController()
    
    if (!ethers.isAddress(contracts.dice)) {
      return () => ac.abort()
    }

    getMaxPayout(
      contracts.dice,
      0,
      data,
    )
      .then((r) => {
        if (ac.signal.aborted === false) {
          console.log("maxpayout", r)
          setMaxPayout(r)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    getBetHistory(contracts.dice)
    .then((r) => {
      if (ac.signal.aborted === false) {
        setBetHistory(r)
      }
    })

    return () => ac.abort()
  }, [betDices, getMaxPayout, contracts.dice])

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
    if (BigNumber(betAmount).gt(maxBet)) {
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

    if (BigNumber(betAmount).gt(BigNumber(balance))) {
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

    if (checkNum === 0) {
      toast.warning('You should select dice', {
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

    if (checkNum === 6) {
      toast.warning('You shouldn\'t select all dice ', {
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

    const id = toast.loading(`Casting a Dice...`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })

    playDice(data, betAmount)
      .then((tx) => {
        // console.log('--->', tx)
        refreshPages()
        toast.done(id);

        const logs = decodeTxLogs(Dice_abi.abi, tx.logs)
        const gameInfo = logs.find((r) => r.name === 'GameEnd')
        console.log('dice play result:', tx.logs, gameInfo)
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
        toast.done(id)
        toast.error("Transaction failed")
      })
  }, [
    playDice,
    refreshPages,
    betDices,
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

export default useDice
