import {combineReducers} from "redux";
import {boardReducer} from "./reducers/board";
import {configureStore} from "@reduxjs/toolkit";
import {loadState} from "./localStorageSave";
import {statsReducer} from "./reducers/stats";

export const rootReducer = combineReducers({
  board: boardReducer,
  stats: statsReducer,
})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
  // here we restore the previously persisted state
  preloadedState: loadState(),
})

export type RootState = ReturnType<typeof rootReducer>
