import { createSlice } from '@reduxjs/toolkit'

const gameInfoSlice = createSlice({
  name: 'gameInfo',
  initialState: {
    round: 1,
    winCount: 0,
    drawCount: 0,
    lossCount: 0,
    score: 0,
    win: 0,
    draw: 0,
    lose: 0
  },
  reducers: {
    updateRound (state) {
      state.round += 1
    },
    updateWinCount (state) {
      state.winCount += 1
    },
    updateDrawCount (state) {
      state.drawCount += 1
    },
    updateLossCount (state) {
      state.lossCount += 1
    },
    incrementRound: (state) => {
      state.round += 1
    },
    incrementWin: (state) => {
      state.win += 1
    },
    incrementLose: (state) => {
      state.lose += 1
    },
    incrementDraw: (state) => {
      state.draw += 1
    },
    updateScore (state, action) {
      state.score += action.payload
    },
    resetGameInfo (state) {
      state.round = 1
      state.winCount = 0
      state.drawCount = 0
      state.lossCount = 0
      state.score = 0
    }
  }
})

export const {
  updateRound,
  updateWinCount,
  updateDrawCount,
  updateLossCount,
  incrementRound,
  incrementWin,
  incrementLose,
  incrementDraw,
  updateScore,
  resetGameInfo
} = gameInfoSlice.actions

export default gameInfoSlice.reducer
