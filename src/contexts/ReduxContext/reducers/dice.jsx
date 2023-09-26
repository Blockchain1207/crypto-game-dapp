import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  houseAllowance: 0,
  bet: {
    cast: 10,
    payout: 0,
    deposit: 0,
    tx: "",
  }
}

const dice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    setHouseAllowance: (state, action) => {
      state.houseAllowance = action.payload
    },
    setBetResult: (state, action) => {
      state.bet.cast = action.payload.cast
      state.bet.deposit = action.payload.deposit
      state.bet.payout = action.payload.payout
      state.bet.tx = action.payload.tx
    },
  },
})

export const { setHouseAllowance, setBetResult } = dice.actions

export default dice.reducer
