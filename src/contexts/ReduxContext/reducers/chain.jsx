import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chainId: 0,
  label: '',
  name: '',
  network: '',
  brand: '',
  icon: '',
  logo: '',
  balance: '',
  nativeCurrency: {
    name: '',
    symbol: '',
    decimals: 18,
  },
  rpcUrl: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
  blockUrl: '',

  contracts: {
    WETH: '',
    factory: '',
    router: '',
    usdt: '',
    token: '',
    sArbet: '',
    console: '',
    vault: '',
    rng: '',
    house: '',
    dice: '',
    roulette: '',
  },

  ex: {
    dex: '',
    telegram: '',
    twitter: '',
    landing: '',
    docs: ''
  }
}

const chain = createSlice({
  name: 'chain',
  initialState,
  reducers: {
    setChainId: (state, action) => {
      state.chainId = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    setLabel: (state, action) => {
      state.label = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setNetwork: (state, action) => {
      state.network = action.payload
    },
    setBrand: (state, action) => {
      state.brand = action.payload
    },
    setIcon: (state, action) => {
      state.icon = action.payload
    },
    setLogo: (state, action) => {
      state.logo = action.payload
    },
    setNativeCurrency: (state, action) => {
      state.nativeCurrency = action.payload
    },
    setRPCUrl: (state, action) => {
      state.rpcUrl = action.payload
    },
    setBlockUrl: (state, action) => {
      state.blockUrl = action.payload
    },
    setUSDT: (state, action) => {
      state.contracts.usdt = action.payload
    },
    setConsole: (state, action) => {
      state.contracts.console = action.payload
    },
    setVault: (state, action) => {
      state.contracts.vault = action.payload
    },
    setRNG: (state, action) => {
      state.contracts.rng = action.payload
    },
    setHouse: (state, action) => {
      state.contracts.house = action.payload
    },
    setDice: (state, action) => {
      state.contracts.dice = action.payload
    },
    setRoulette: (state, action) => {
      state.contracts.roulette = action.payload
    },
    setCoinflip: (state, action) => {
      state.contracts.coinflip = action.payload
    },
    setRPS: (state, action) => {
      state.contracts.rps = action.payload
    },
    setDexURL: (state, action) => {
      state.ex.dex = action.payload
    },
    setTelegramURL: (state, action) => {
      state.ex.telegram = action.payload
    },
    setTwitterURL: (state, action) => {
      state.ex.twitter = action.payload
    },
    setLandingURL: (state, action) => {
      state.ex.landing = action.payload
    },
    setDocURL: (state, action) => {
      state.ex.docs = action.payload
    },
  },
})

export const {
  setChainId,
  setBalance,
  setLabel,
  setName,
  setNetwork,
  setBrand,
  setIcon,
  setLogo,
  setNativeCurrency,
  setRPCUrl,
  setBlockUrl,
  setUSDT,
  setConsole,
  setVault,
  setRNG,
  setHouse,
  setDice,
  setRoulette,
  setCoinflip,
  setRPS,
  setDexURL,
  setTelegramURL,
  setTwitterURL,
  setLandingURL,
  setDocURL,
} = chain.actions

export default chain.reducer
