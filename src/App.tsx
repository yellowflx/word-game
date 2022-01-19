import React, {useEffect} from 'react';
import './App.css';
import Field from "./components/Field";
import Keyboard from "./components/Keyboard";
import {useActions} from "./hooks/useAction";

export const wordsList = require('./json/ruWords.json')

function App() {
  console.log('App render')
  const {setSolution} = useActions()

  let date = new Date()
  let number = parseFloat('0.'+((date.getFullYear() + (date.getMonth())) + date.getDate() ** (date.getHours())).toString().slice(5,9))

  useEffect(() => {
    setSolution(wordsList[Math.floor(number*wordsList.length)].word) // setSolution(data[Math.floor(Math.random()*data.length)].word)
  }, [])


  return (
    <div className="App">
      <Field/>
      <Keyboard/>
    </div>
  );
}

export default App;
