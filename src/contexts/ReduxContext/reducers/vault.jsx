import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: "",
  balance: "",
  depositedUSDT: "",
  pendingUSDT: "",
  claimedUSDT: "",
  vaultAllowance: "",
  vaultCap: '',
  untilNextWithdraw: 0,
  withdrawSteps: 0,
  totalWager: 0,
}

const vault = createSlice({
  name: 'vault',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    setDepositedUSDT: (state, action) => {
      state.depositedUSDT = action.payload
    },
    setVaultAllowance: (state, action) => {
      state.vaultAllowance = action.payload
    },
    setVaultCap: (state, action) => {
      state.vaultCap = action.payload
    },
    setTotalWager: (state, action) => {
      state.totalWager = action.payload
    }
  },
})

export const { setAddress, setBalance, setDepositedUSDT, setVaultAllowance, setVaultCap, setTotalWager } = vault.actions

export default vault.reducer
