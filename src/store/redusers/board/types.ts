import {IWord} from "../../../models/IWord";

export enum BoardActionEnum {
  SET_WORD = 'SET_WORD',
  SET_SOLUTION = 'SET_SOLUTION',
  SET_LETTER = 'SET_LETTER',
  CLEAR_LETTER = 'CLEAR_LETTER',
  SET_MISSING_LETTERS = 'SET_MISSING_LETTERS',
  RESET_STATE = 'RESET_STATE'
}

export interface SetWordAction {
  type: BoardActionEnum.SET_WORD;
  payload: IWord
}

export interface SetLetterAction {
  type: BoardActionEnum.SET_LETTER;
  payload: string
}

export interface ClearLetterAction {
  type: BoardActionEnum.CLEAR_LETTER;
}

export interface SetSolutionAction {
  type: BoardActionEnum.SET_SOLUTION;
  payload: string
}

export interface SetMissingAction{
  type: BoardActionEnum.SET_MISSING_LETTERS;
  payload: any[]
}
export interface ResetStateAction {
  type: BoardActionEnum.RESET_STATE;
}

export type BoardAction =
  SetWordAction |
  SetLetterAction |
  ClearLetterAction |
  SetSolutionAction |
  SetMissingAction |
  ResetStateAction
