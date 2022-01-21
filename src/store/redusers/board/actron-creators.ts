import {
  BoardActionEnum,
  ClearLetterAction, ResetStateAction,
  SetLetterAction,
  SetMissingAction,
  SetSolutionAction, SetStatusAction,
  SetWordAction
} from "./types";
import {IWord} from "../../../models/IWord";

export const BoardActionCreator = {
  resetState: (): ResetStateAction => ({type: BoardActionEnum.RESET_STATE}),
  setSolution: (payload: string): SetSolutionAction => ({type: BoardActionEnum.SET_SOLUTION, payload}),
  setLetter: (payload: string): SetLetterAction => ({type: BoardActionEnum.SET_LETTER, payload}),
  clearLetter: (): ClearLetterAction => ({type: BoardActionEnum.CLEAR_LETTER}),
  setWord: (payload: IWord): SetWordAction => ({type: BoardActionEnum.SET_WORD, payload}),
  setMissingLetters: (payload:any[]): SetMissingAction => ({type: BoardActionEnum.SET_MISSING_LETTERS, payload}),
  setStatus: (payload: number): SetStatusAction => ({type: BoardActionEnum.SET_STATUS, payload}),
}