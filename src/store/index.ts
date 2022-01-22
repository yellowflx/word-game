import {combineReducers} from "redux";
import {boardReducer} from "./redusers/board";
import {configureStore} from "@reduxjs/toolkit";
import {loadState} from "./browser-storage";
import {statsReducer} from "./redusers/stats";

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
