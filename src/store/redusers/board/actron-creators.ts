import {BoardActionEnum, ClearLetterAction, SetLetterAction, SetSolutionAction, SetWordAction} from "./types";
import {IWord} from "../../../models/IWord";

export const BoardActionCreator = {
  setWord: (payload: IWord): SetWordAction => ({type: BoardActionEnum.SET_WORD, payload}),
  setSolution: (payload: string): SetSolutionAction => ({type: BoardActionEnum.SET_SOLUTION, payload}),
  setLetter: (payload: string): SetLetterAction => ({type: BoardActionEnum.SET_LETTER, payload}),
  clearLetter: (): ClearLetterAction => ({type: BoardActionEnum.CLEAR_LETTER})
}