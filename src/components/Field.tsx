import React from 'react';
import WordRow from "./WordRow";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {store} from "../store";
import CurrentWordRow from "./CurrentWordRow";

function Field() {
  const {words} = useTypedSelector(state => state.board);
  let currentWord = store.getState().board.currentWord.concat('     '.split('')).slice(0,5)

  let empty = []
  for (let i = 0; i < 5 - words.length; i++) {
    empty.push(undefined)
  }

  return (
    <div className="Field-container">
      <div className="Field">
        {words.slice(0,6).map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
        {!(words[5]) ? <CurrentWordRow word={currentWord}/>: console.log('Попытки закончились')}
        {empty.map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
      </div>

    </div>
  );
}

export default Field;
