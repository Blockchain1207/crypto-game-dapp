import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createTransform, persistStore } from "redux-persist"
import persistReducer from "redux-persist/es/persistReducer"
import vaultSlice from "./reducers/vault"
import chainSlice from './reducers/chain'
import diceSlice from './reducers/dice'
import rouletteSlice from "./reducers/roulette"
import coinflipSlice from "./reducers/coinflip"
import rpsSlice from "./reducers/rps"
import gameSlice from './reducers/game'
import storage from "redux-persist/lib/storage"
import { stringify, parse } from "flatted"

const allReducers = {
  vault: vaultSlice,
  chain: chainSlice,
  dice: diceSlice,
  roulette: rouletteSlice,
  coinflip: coinflipSlice,
  rps: rpsSlice,
  game: gameSlice
}

const reducers = combineReducers(allReducers)

const rootReducer = (state, action) => {
  return reducers(state, action)
}

export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState)
)

const persistConfig = {
  key: "ceosar-redux",
  version: 1,
  storage,
  tranforms: [],
  // whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: allReducers, // persistedReducer to store at local storage, allReducers to store at session storage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [],
    }),
  devTools: process.env.NODE_ENV !== "production",
})

const persistor = persistStore(store);

export { store, persistor };
