import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './gameSlice'
import userReducer from './userSlice'
import buttonReducer from './buttonSlice'
import gameInfoReducer from './gameInfoSlice'

export default configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
    button: buttonReducer,
    gameInfo: gameInfoReducer
  }
})
