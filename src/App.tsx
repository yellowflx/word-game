import React from 'react';
import './App.css';
import Field from "./components/Field";
import Keyboard from "./components/Keyboard";
import {store} from "./store";
import {useActions} from "./hooks/useAction";
import {verifyWord} from "./store/redusers/board";


function App() {
  const {setWord, setSolution} = useActions()

  if (store.getState().board.solution === '') {
    setSolution('арбуз')
  }
  setWord(verifyWord('вагон'))
  setWord(verifyWord('спирт'))
  setWord(verifyWord('хмель'))
  setWord(verifyWord('рубка'))
  setWord(verifyWord('арбуз'))

  return (
    <div className="App">
      <Field/>
      <Keyboard/>
    </div>
  );
}

export default App;
