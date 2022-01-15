import {ILetter} from "../../../models/ILetter";

export enum WordActionEnum {
  SET_LETTER = 'SET_LETTER',
  CLEAR_WORD = 'CLEAR_WORD',
}

export interface SetLetterAction {
  type: WordActionEnum.SET_LETTER;
  payload: ILetter
}

export interface ClearWordAction {
  type: WordActionEnum.CLEAR_WORD;
}

export type WordAction =
  SetLetterAction |
  ClearWordAction
