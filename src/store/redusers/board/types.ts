import {IWord} from "../../../models/IWord";

export enum BoardActionEnum {
  RESET_STATE = 'RESET_STATE',
  SET_SOLUTION = 'SET_SOLUTION',
  SET_LETTER = 'SET_LETTER',
  CLEAR_LETTER = 'CLEAR_LETTER',
  SET_WORD = 'SET_WORD',
  SET_MISSING_LETTERS = 'SET_MISSING_LETTERS',
  SET_STATUS = 'SET_STATUS',
}

export interface ResetStateAction {
  type: BoardActionEnum.RESET_STATE;
}

export interface SetSolutionAction {
  type: BoardActionEnum.SET_SOLUTION;
  payload: string
}

export interface SetLetterAction {
  type: BoardActionEnum.SET_LETTER;
  payload: string
}

export interface ClearLetterAction {
  type: BoardActionEnum.CLEAR_LETTER;
}

export interface SetWordAction {
  type: BoardActionEnum.SET_WORD;
  payload: IWord
}

export interface SetMissingAction{
  type: BoardActionEnum.SET_MISSING_LETTERS;
  payload: any[]
}

export interface SetStatusAction{
  type: BoardActionEnum.SET_STATUS;
  payload: number
}

export type BoardAction =
  ResetStateAction |
  SetSolutionAction |
  SetLetterAction |
  ClearLetterAction |
  SetWordAction |
  SetMissingAction |
  SetStatusAction
