import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {store} from "../../store";
import {CurrentWordRow, WordRow} from "../WordRow";
import {FieldGrid, FieldWrapper} from "./style";

export function Field() {
  const {words} = useTypedSelector(state => state.board);
  let currentWord = store.getState().board.currentWord.concat('     '.split('')).slice(0, 5)

  let empty = []
  for (let i = 0; i < 6 - words.length; i++) {
    empty.push(undefined)
  }

  return (
    <FieldWrapper>
      <FieldGrid>
        {words.slice(0, 7).map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
        {!(words[6]) ? <CurrentWordRow word={currentWord}/> : null}
        {empty.map((value, index) =>
          <WordRow word={value} key={index}/>
        )}
      </FieldGrid>

    </FieldWrapper>
  );
}
