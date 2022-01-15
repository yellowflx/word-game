import {IBoardState} from "../../../models/IBoardState";
import {BoardAction, BoardActionEnum} from "./types";
import {store} from "../../index";
import {IWord} from "../../../models/IWord";

const initialState: IBoardState = {
  words: [],
  solution: '',
}

export const boardReducer = (state = initialState, action: BoardAction): IBoardState => {
  switch (action.type) {
    case BoardActionEnum.SET_SOLUTION:
      return {...state, solution: action.payload};
    case BoardActionEnum.SET_WORD:
      return {...state, words: [...state.words, action.payload]};
    default:
      return state;
  }
}

export function verifyWord(input: string) {
  let arr = input.split('')
  let s = store.getState().board.solution;
  let word: IWord
  word = {letters: []}
  for (let i = 0; i < arr.length; i++) {
    let l = arr[i];
    if (!s.split('').includes(l)) {
      word.letters.push({value: l, status: 'missing'})
    } else {
      if (s.split('')[i] === l) {
        word.letters.push({value: l, status: 'correct'})
      } else {
        word.letters.push({value: l, status: 'present'})
      }
    }
  }
  return word
}
