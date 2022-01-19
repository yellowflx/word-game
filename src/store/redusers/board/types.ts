import {IWord} from "../../../models/IWord";

export enum BoardActionEnum {
  SET_WORD = 'SET_WORD',
  SET_SOLUTION = 'SET_SOLUTION',
  SET_LETTER = 'SET_LETTER',
  CLEAR_LETTER = 'CLEAR_LETTER',
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

export type BoardAction =
  SetWordAction |
  SetLetterAction |
  ClearLetterAction |
  SetSolutionAction
