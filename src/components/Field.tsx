import React from 'react';
import WordRow from "./WordRow";
import {store} from "../store";

function Field() {
  const words = store.getState().board.words.slice(0, 5)
  let empty = []
  for (let i = 0; i < 6 - words.length; i++) {
    empty.push(undefined)
  }
  return (
    <div className="Field-container">
      <div className="Field">
        {words.map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
        {empty.map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
      </div>

    </div>
  );
}

export default Field;
