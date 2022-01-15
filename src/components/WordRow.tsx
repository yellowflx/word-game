import React from 'react';
import LetterCell from "./LetterCell";
import {ILetter} from "../models/ILetter";

interface WProp {
  word: any;
}

const WordRow = (prop: WProp) => {
  return (
    prop.word !== undefined
      ? <div className="WordRow">
        {prop.word.letters.map((l: ILetter, index: number) =>
          <LetterCell letter={l.value} status={l.status} key={index}/>
        )}
      </div>
      : <div className="WordRow">
        <LetterCell letter=" " status="empty"/>
        <LetterCell letter=" " status="empty"/>
        <LetterCell letter=" " status="empty"/>
        <LetterCell letter=" " status="empty"/>
        <LetterCell letter=" " status="empty"/>
      </div>
  );
};

export default WordRow;
