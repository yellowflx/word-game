import React from 'react';

interface LProp {
  letter: string;
  status: string
}

const LetterCell = (prop: LProp) => {
  return (
    <div className="LetterCell" data-state={prop.status}>
      {prop.letter}
    </div>
  );
};

export default LetterCell;
