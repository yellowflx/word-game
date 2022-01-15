import {IWord} from "../../../models/IWord";

export enum BoardActionEnum {
  SET_WORD = 'SET_WORD',
  SET_SOLUTION = 'SET_SOLUTION',
}

export interface SetWordAction {
  type: BoardActionEnum.SET_WORD;
  payload: IWord
}

export interface SetSolutionAction {
  type: BoardActionEnum.SET_SOLUTION;
  payload: string
}

export type BoardAction =
  SetWordAction |
  SetSolutionAction
