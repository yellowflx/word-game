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

function verifyWord(input: string) {
  let arr = input.split('')
  let s = store.getState().board.solution;
  let ml = new Set()
  let word: IWord
  word = {letters: []}
  for (let i = 0; i < arr.length; i++) {
    let l = arr[i];
    if (!s.split('').includes(l)) {
      ml.add(l)
      word.letters.push({value: l, status: 'missing'})
    } else {
      if (s.split('')[i] === l) {
        word.letters.push({value: l, status: 'correct'})
      } else {
        word.letters.push({value: l, status: 'present'})
      }
    }
  }
  return {word: word, ml: ml}
}

const Keyboard = () => {
  const missingLetters = new Set(useTypedSelector(store => store.board.missingLetters))
  const {setWord, setLetter, clearLetter, setMissingLetters} = useActions()

  function enter() {
    let currentWord = store.getState().board.currentWord.join('')
    if (wordsList.some((item: { word: string; }) => item.word === (currentWord))) {
      if (store.getState().board.words.length < 6) {
        tempArr = Array.from(verifyWord(currentWord).ml)
        setMissingLetters(tempArr)
        setWord(verifyWord(currentWord).word)
      } else {
        setWord(verifyWord(store.getState().board.solution).word)
      }
    } else console.log('Такого слова нет в списке')
  }

  return (
    <div className="keyboard">
      <div className="row">
        <div className="spacer half"/>
        {keys1.map((key: string, index) =>
          missingLetters.has(key)
            ? (<button data-key={key} key={index} data-state='missing' onClick={() => setLetter(key)}>
                {key}
              </button>
            )
            : (<button data-key={key} key={index} onClick={() => setLetter(key)}>
                {key}
              </button>
            )
        )}
        <div className="spacer half"/>
      </div>
      <div className="row">
        <div className="spacer one"/>
        {keys2.map((key: string, index) =>
          missingLetters.has(key)
            ? (<button data-key={key} key={index} data-state='missing' onClick={() => setLetter(key)}>
                {key}
              </button>
            )
            : (<button data-key={key} key={index} onClick={() => setLetter(key)}>
                {key}
              </button>
            )
        )}
        <div className="spacer one"/>
      </div>
      <div className="row">
        <button data-key='↵' className='one-and-a-half' onClick={() => enter()}>
          enter
        </button>
        {keys3.map((key: string, index) =>
          missingLetters.has(key)
            ? (<button data-key={key} key={index} data-state='missing' onClick={() => setLetter(key)}>
                {key}
              </button>
            )
            : (<button data-key={key} key={index} onClick={() => setLetter(key)}>
                {key}
              </button>
            )
        )}
        <button data-key='🠔' className='one-and-a-half' onClick={() => clearLetter()}>
          <svg width="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               style={{backgroundColor: '#818384'}}
          >
            <path
              d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
