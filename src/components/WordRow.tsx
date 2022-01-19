import React from 'react';
import LetterCell from "./LetterCell";
import {ILetter} from "../models/ILetter";

interface WProp {
  word: any;
}

const WordRow = (prop: WProp) => {
  const emptyWord = '     '.split('')

  return (
    prop.word !== undefined
      ? <div className="WordRow">
        {prop.word.letters.map((l: ILetter, index: number) =>
          <LetterCell letter={l.value} status={l.status} key={index}/>
        )}
      </div>
      : <div className="WordRow">
        {emptyWord.map((l: string, index: number) =>
            <LetterCell letter=" " status="empty" key={index}/>
        )}
      </div>
  );
};

export default WordRow;
