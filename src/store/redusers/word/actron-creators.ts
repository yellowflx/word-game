import {ClearWordAction, SetLetterAction, WordActionEnum} from "./types";
import {ILetter} from "../../../models/ILetter";

export const WordActionCreator = {
  setLetter: (payload: ILetter): SetLetterAction => ({type: WordActionEnum.SET_LETTER, payload}),
  clearWord: (): ClearWordAction => ({type: WordActionEnum.CLEAR_WORD}),
}