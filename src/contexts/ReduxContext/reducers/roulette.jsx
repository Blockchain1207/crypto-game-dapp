import { createSlice } from '@reduxjs/toolkit'
import { pad as _pad } from './pad'
import BigNumber from 'bignumber.js'

const initialState = {
  prizeNumber: 0,
  chipValue: 1,
  chipCount: 1,
  pad: _pad,
  clickedPoints: [],
  boardData: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  totalChips: 0,
  houseAllowance: '',
  usdtPerChip: 1,
  bet: {
    cast: 0,
    payout: 0,
    deposit: 0,
    tx: "",
  },
  spinShow: false
}

const roulette = createSlice({
  name: 'roulette',
  initialState,
  reducers: {
    setPrizeNumber: (state, action) => {
      state.prizeNumber = action.payload
    },
    setChipValue: (state, action) => {
      state.chipValue = action.payload
      state.chipCount = state.chipValue
      // state.chipCount = Math.pow(10, state.chipValue)
    },
    setPad: (state, action) => {
      state.pad = action.payload
    },
    setClickedPoints: (state, action) => {
      state.clickedPoints = action.payload
      state.boardData = Array.from({ length: 50 }).map((t) => 0)

      for (const point of action.payload) {
        const totalChips = point.chips.reduce((c, v) => c + v, 0)
        const totalPos = point.value.length
        for (const v of point.value) {
          state.boardData[v] = BigNumber(state.boardData[v])
            .plus(BigNumber(totalChips).div(totalPos))
            .toNumber()
        }
      }

      state.totalChips = state.boardData
        .reduce((c, v) => {
          return c + v
        }, 0)
    },
    setHouseAllowance: (state, action) => {
      state.houseAllowance = action.payload
    },
    setBetResult: (state, action) => {
      state.bet.cast = action.payload.cast
      state.bet.deposit = BigNumber(action.payload.chipCount).times(BigNumber(state.usdtPerChip)).toNumber()
      state.bet.payout = action.payload.payout
      state.bet.tx = action.payload.tx
      state.prizeNumber = state.bet.cast
    },
    setSpinShow : (state, action) => {
      state.spinShow = action.payload
    }
  },
})

export const { setPrizeNumber, setChipValue, setClickedPoints, setPad, setHouseAllowance, setBetResult, setSpinShow } =
  roulette.actions

export default roulette.reducer
