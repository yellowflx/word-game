import {IWord} from "./IWord";

export interface IBoardState {
  words: IWord[];
  solution: string;
  currentWord: string[];
  missingLetters: any[];
}
