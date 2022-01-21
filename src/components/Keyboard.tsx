import React from 'react';
import {useActions} from "../hooks/useAction";
import {store} from "../store";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IWord} from "../models/IWord";
import {wordsList} from "../App";

const keys1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
const keys2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
const keys3 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']
let tempArr: any[]

const Keyboard = () => {
  const missingLetters = new Set(useTypedSelector(store => store.board.missingLetters))
  const {setWord, setLetter, clearLetter, setMissingLetters, setStatus} = useActions()

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
        if (solution===currentWord) setStatus(1)
        tempArr = Array.from(verifyWord(currentWord).ml)
        setMissingLetters(tempArr)
        setWord(verifyWord(currentWord).word)
      } else {
        solution===currentWord?setStatus(1):setStatus(2)
        setWord(verifyWord(store.getState().board.solution).word)
      }
    } else console.log('Такого слова нет в списке')
  }

  document.onkeydown=(e)=> {
    let key = e.key.toLowerCase()
    let keys = keys1.concat(...keys2, ...keys3)
    if (keys.includes(key)) setLetter(key)
    else if (key==='enter') enter()
    else if (key==='backspace') clearLetter()
  }

  return (
    <div className="keyboard">
      <div className="row">
        {keys1.map((key: string, index) =>
          <button accessKey={key} data-key={key} key={index}  data-state={missingLetters.has(key)? "missing":""} onClick={() => setLetter(key)}>
            {key}
          </button>
        )}
      </div>

      <div className="row">
        <div className="spacer one"/>
        {keys2.map((key: string, index) =>
          <button accessKey={key}  data-key={key} key={index}  data-state={missingLetters.has(key)? "missing":""} onClick={() => setLetter(key)}>
            {key}
          </button>
        )}
        <div className="spacer one"/>
      </div>

      <div className="row">
        <button data-key="↵" className="one-and-a-half" onClick={() => enter()}>
          enter
        </button>
        {keys3.map((key: string, index) =>
          <button accessKey={key}  data-key={key} key={index}  data-state={missingLetters.has(key)? "missing":""} onClick={() => setLetter(key)}>
            {key}
          </button>
        )}
        <button data-key="🠔" className="one-and-a-half" onClick={() => clearLetter()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="4vh" height="4vh" fill="currentColor" viewBox="0 0 16 16" style={{backgroundColor: "#818384"}}>
            <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Keyboard
