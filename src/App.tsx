import React, {useEffect} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Field from "./components/Field";
import Keyboard from "./components/Keyboard";
import {useActions} from "./hooks/useAction";
import {store} from "./store";
import {debounce} from "debounce";
import {saveState} from "./store/browser-storage";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Result from "./components/Result";
import Stats from "./components/Stats";
import {Slide, toast, ToastContainer} from 'react-toastify';

export const wordsList = require('./json/ruWords.json')

export const notify = (text: string) => toast.warn(text, {
  theme: "dark",
  transition: Slide
});

function App() {
  const {setSolution, resetState} = useActions()

  let status = useTypedSelector(store => store.board.status)
  let date = new Date()
  let number = parseFloat('0.' + ((date.getFullYear() + (date.getMonth() + 12)) + (date.getDate() / 4 + 31) ** (date.getHours() / 4 + 1.5)).toString().slice(5, 9))

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  useEffect(() => {
    let newSolution = wordsList[Math.floor(number * wordsList.length)].word
    if (newSolution !== store.getState().board.solution) {
      resetState()
      setSolution(newSolution)
    }
  }, [])

  return (
    <div className="App">
      <ToastContainer
        newestOnTop
        position="top-center"
        autoClose={2000}
      />
      {status !== 0 ? <Stats/> : null}
      <Field/>
      {status < 1 ? <Keyboard/> : <Result status={status}/>}
    </div>
  );
}

export default App;
