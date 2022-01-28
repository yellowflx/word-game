import React from 'react';
import {ILetter} from "../../models/ILetter";
import {LetterCell} from "../LetterCell";
import {WordRowWrapper} from "./style";

interface WordRowProps {
  word: any;
}

export const WordRow = (props: WordRowProps) => {
  const emptyWord = '     '.split('')

  return (
    props.word !== undefined
      ? <WordRowWrapper>
        {props.word.letters.map((l: ILetter, index: number) =>
          <LetterCell letter={l.value} status={l.status} key={index}/>
        )}
      </WordRowWrapper>
      : <WordRowWrapper>
        {emptyWord.map((l: string, index: number) =>
          <LetterCell letter=" " status="empty" key={index}/>
        )}
      </WordRowWrapper>
  );
};

export const CurrentWordRow = (prop: WordRowProps) => {
  return (
    <WordRowWrapper>
      {prop.word.map((l: string, index: number) =>
        l === ' '
          ? <LetterCell letter=" " status="empty" key={index}/>
          : <LetterCell letter={l} status="tbd" key={index}/>
      )}
    </WordRowWrapper>
  );
};
