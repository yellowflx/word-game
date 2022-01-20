import React from 'react';
import LetterCell from "./LetterCell";

interface WProp {
  word: string[];
}

const CurrentWordRow = (prop: WProp) => {
  return (
    <div className="WordRow">
      {prop.word.map((l: string, index: number) =>
        l===' '
          ?<LetterCell letter=" " status="empty" key={index}/>
          :<LetterCell letter={l} status="tbd"   key={index}/>
      )}
    </div>
  );
};

export default CurrentWordRow;
