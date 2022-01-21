import {IBoardState} from "../../../models/IBoardState";
import {BoardAction, BoardActionEnum} from "./types";

const initialState: IBoardState = {
  words: [],
  solution: '',
  currentWord: [],
  missingLetters: [],
  status: 0
}

export const boardReducer = (state = initialState, action: BoardAction): IBoardState => {
  switch (action.type) {
    case BoardActionEnum.RESET_STATE:
      return initialState

    case BoardActionEnum.SET_SOLUTION:
      return {...state, solution: action.payload};

    case BoardActionEnum.SET_LETTER:
      if (state.currentWord.length < 5) {
        return {...state, currentWord: [...state.currentWord, action.payload]};
      } else {
        console.log('Максимум 5 букв')
        return state;
      }

    case BoardActionEnum.CLEAR_LETTER:
      if (state.currentWord.length !== 0) {
        return {...state, currentWord: state.currentWord.slice(0, -1)};
      } else {
        console.log('Нечего удалять')
        return state;
      }

    case BoardActionEnum.SET_WORD:
      return action.payload.letters.length===5? {...state, words: [...state.words, action.payload], currentWord:[]} : state;

    case BoardActionEnum.SET_MISSING_LETTERS:
      return {...state, missingLetters: [...state.missingLetters, ...action.payload]};

    case BoardActionEnum.SET_STATUS:
      return action.payload<3? {...state, status: action.payload} : state;

    default:
      return state;
  }
}


