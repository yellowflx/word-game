import {combineReducers, createStore} from "redux";
import {boardReducer} from "./redusers/board";
import {wordReducer} from "./redusers/word";

export const rootReducer = combineReducers({
  board: boardReducer,
  word: wordReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch;
