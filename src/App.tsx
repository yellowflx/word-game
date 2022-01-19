import React from 'react';
import './App.css';
import Field from "./components/Field";
import Keyboard from "./components/Keyboard";
import {store} from "./store";
import {useActions} from "./hooks/useAction";
import {verifyWord} from "./store/redusers/board";

function App() {
  console.log('App render')
  const {setWord, setSolution} = useActions()

  if (store.getState().board.solution === '') {
    setSolution('арбуз')
  }
  setWord(verifyWord('рубка'))

  return (
    <div className="App">
      <Field/>
      <Keyboard/>
    </div>
  );
}

export default App;
