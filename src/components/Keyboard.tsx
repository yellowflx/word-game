import React from 'react';
import {useActions} from "../hooks/useAction";
import {verifyWord} from "../store/redusers/board";
import {store} from "../store";

const keys1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
const keys2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
const keys3 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']

const Keyboard = () => {
  const {setWord, setLetter, clearLetter} = useActions()
  function enter(){
    if (store.getState().board.words.length<5){
      setWord(verifyWord(store.getState().board.currentWord.join('')))
    }
    else {
      setWord(verifyWord('арбуз'))
    }
  }

  return (
    <div className="keyboard">
      <div className="row">
        <div className="spacer half"/>
        {keys1.map((key: string, index) =>
          <button data-key={key} key={index} onClick={() => setLetter(key)}>
            {key}
          </button>
        )}
        <div className="spacer half"/>
      </div>
      <div className="row">
        <div className="spacer one"/>
        {keys2.map((key: string, index) =>
          <button data-key={key} key={index} onClick={() => setLetter(key)}>
            {key}
          </button>
        )}
        <div className="spacer one"/>
      </div>
      <div className="row">
        <button data-key='↵' className='one-and-a-half' onClick={() => enter()}>
          enter
        </button>
        {keys3.map((key: string, index) =>
          <button data-key={key} key={index} onClick={() => setLetter(key)}>
            {key}
          </button>
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
