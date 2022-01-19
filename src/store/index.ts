import {combineReducers, createStore} from "redux";
import {boardReducer} from "./redusers/board";

export const rootReducer = combineReducers({
  board: boardReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
