import React, {useEffect} from 'react';
import './App.css';
import Field from "./components/Field";
import Keyboard from "./components/Keyboard";
import {useActions} from "./hooks/useAction";
import {store} from "./store";
import { debounce } from "debounce";
import {saveState} from "./store/browser-storage";

export const wordsList = require('./json/ruWords.json')

function App() {
  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );
  console.log('App render')
  const {setSolution, resetState} = useActions()

  let date = new Date()
  let number = parseFloat('0.'+((date.getFullYear() + (date.getMonth())) + date.getDate() ** (date.getHours())).toString().slice(5,9))

  useEffect(() => {
    let newSolution = wordsList[Math.floor(number*wordsList.length)].word
    if (newSolution !== store.getState().board.solution) {
      resetState()
      setSolution(newSolution)
    }
    // setSolution(newSolution) // setSolution(data[Math.floor(Math.random()*data.length)].word)
  }, [])

  return (
    <div className="App">
      <Field/>
      <Keyboard/>
    </div>
  );
}

export default App;
