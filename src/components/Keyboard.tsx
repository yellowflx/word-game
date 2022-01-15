import React from 'react';

let keys1 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
let keys2 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
let keys3 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'з']
const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="row">
        <div className="spacer half"/>
        {keys1.map((key: string, index) =>
          <button data-key={key} key={index}>
            {key}
          </button>
        )}
        <div className="spacer half"/>
      </div>
      <div className="row">
        <div className="spacer one"/>
        {keys2.map((key: string, index) =>
          <button data-key={key} key={index}>
            {key}
          </button>
        )}
        <div className="spacer one"/>
      </div>
      <div className="row">
        <button data-key='↵' className='one-and-a-half'>
          enter
        </button>
        {keys3.map((key: string, index) =>
          <button data-key={key} key={index}>
            {key}
          </button>
        )}
        <button data-key='🠔' className='one-and-a-half' style={{fontSize: '35px'}}>
          🠔
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
