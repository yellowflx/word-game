import {WordAction, WordActionEnum} from "./types";
import {IWord} from "../../../models/IWord";

const initialState: IWord = {
  letters: [],
}

export const wordReducer = (state = initialState, action: WordAction): IWord => {
  switch (action.type) {
    case WordActionEnum.SET_LETTER:
      return {...state, letters: [...state.letters, action.payload]};
    case WordActionEnum.CLEAR_WORD:
      return {...state, letters: []};
    default:
      return state;
  }
}