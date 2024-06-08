import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { store } from "./store";
import { useActions } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { debounce } from "debounce";
import { saveState } from "./store/localStorageSave";
import { Slide, toast, ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Stats } from "./components/Stats";
import { Field } from "./components/Field";
import { Keyboard } from "./components/Keyboard";
import { Result } from "./components/Result";

export const wordsList = require("./json/ruWords.json");

export const notify = (text: string) =>
  toast.warn(text, {
    theme: "dark",
    toastId: text,
    transition: Slide,
  });

export function App() {
  const { setSolution, resetState, toggleStats } = useActions();

  let status = useTypedSelector((store) => store.board.status);
  let stats = useTypedSelector((store) => store.stats.hidden);
  let date = new Date();
  let number = parseFloat(
    "0." +
      (
        date.getFullYear() +
        (date.getMonth() + 12) +
        (date.getDate() / 4 + 31) ** (date.getHours() / 4 + 1.5)
      )
        .toString()
        .slice(5, 9)
  );

  store.subscribe(
    debounce(() => {
      saveState(store.getState());
    }, 800)
  );

  useEffect(() => {
    let newSolution = wordsList[Math.floor(number * wordsList.length)].word;
    if (store.getState().board.status !== 0) toggleStats();
    if (newSolution !== store.getState().board.solution) {
      resetState();
      setSolution(newSolution);
    }
  }, [number, toggleStats, resetState, setSolution]);

  return (
    <div className="App">
      <Header />
      <ToastContainer newestOnTop position="top-center" autoClose={2000} />
      {!stats ? <Stats /> : null}
      <Field />
      {status < 1 ? <Keyboard /> : <Result status={status} />}
    </div>
  );
}
