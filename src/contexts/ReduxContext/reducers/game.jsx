import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  win: 0,
}

const game = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    setWinLose: (state, action) => {
        state.count = 1
        state.win = action.payload
    },
    reset: (state) => {
      state.count = 0
    },
  },
})

export const { setWinLose, reset } = game.actions

export default game.reducer
