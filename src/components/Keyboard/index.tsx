import React from 'react';
import {useActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {store} from "../../store";
import {IWord} from "../../models/IWord";
import {notify, wordsList} from "../../App";
import {Key, KeyboardWrapper, Row, Spacer} from "./style";

const keys1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
const keys2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
const keys3 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
let tempArr: any[]

export const Keyboard = () => {
  const missingLetters = new Set(useTypedSelector(store => store.board.missingLetters))
  const {setWord, setLetter, clearLetter, setMissingLetters, setStatus, addWin, addLose, toggleStats} = useActions()

  function verifyWord(input: string) {
    let arr = input.split('')
    let solution = store.getState().board.solution.split('')
    let ml = new Set()
    let word: IWord
    word = {letters: []}
    for (let i = 0; i < arr.length; i++) {
      let l = arr[i];
      if (!solution.includes(l)) {
        ml.add(l)
        word.letters.push({value: l, status: 'missing'})
      } else if (solution[i] === l) {
        word.letters.push({value: l, status: 'correct'})
      } else {
        word.letters.push({value: l, status: 'present'})
      }
    }
    return {word: word, ml: ml}
  }

  function enter() {
    let currentWord = store.getState().board.currentWord.join('')
    let wordsCount = store.getState().board.words.length
    let solution = store.getState().board.solution

    if (wordsList.some((item: { word: string }) => item.word === (currentWord))) {
      if (wordsCount < 6) {
        if (solution === currentWord) {
          addWin(wordsCount)
          setStatus(1)
          toggleStats()
        }
        tempArr = Array.from(verifyWord(currentWord).ml)
        setMissingLetters(tempArr)
        setWord(verifyWord(currentWord).word)
      } else {
        if (solution === currentWord) {
          addWin(wordsCount)
          setStatus(1)
          toggleStats()
        } else {
          addLose()
          setStatus(2)
          toggleStats()
        }
        setWord(verifyWord(store.getState().board.solution).word)
      }
    } else currentWord.length === 5 ? notify('Такого слова нет в списке') : notify('Введите слово из 5 букв')
  }

  document.onkeydown = (e) => {
    if (store.getState().board.status === 0) {
      let key = e.key.toLowerCase()
      let keys = keys1.concat(...keys2, ...keys3)
      if (keys.includes(key)) setLetter(key)
      else if (key === 'enter') enter()
      else if (key === 'backspace') clearLetter()
    }
  }

  return (
    <KeyboardWrapper>
      <Row>
        {keys1.map((key: string, index) =>
          <Key data-key={key} key={index} color={missingLetters.has(key) ? "#3a3a3c" : ""}
               onClick={() => setLetter(key)}>
            {key}
          </Key>
        )}
      </Row>

      <Row>
        <Spacer $width="0.586"/>
        {keys2.map((key: string, index) =>
          <Key data-key={key} key={index} color={missingLetters.has(key) ? "#3a3a3c" : ""}
               onClick={() => setLetter(key)}>
            {key}
          </Key>
        )}
        <Spacer $width="0.586"/>
      </Row>

      <Row>
        <Key data-key="enter" $flex="1.5" onClick={() => enter()}>
          enter
        </Key>
        {keys3.map((key: string, index) =>
          <Key data-key={key} key={index} $color={missingLetters.has(key) ? "#3a3a3c" : ""}
               onClick={() => setLetter(key)}>
            {key}
          </Key>
        )}
        <Key data-key="backspace" $flex="1.5" onClick={() => clearLetter()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor" viewBox="0 0 16 16"
               style={{backgroundColor: "#818384"}}>
            <path
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </Key>
      </Row>
    </KeyboardWrapper>
  );
};
