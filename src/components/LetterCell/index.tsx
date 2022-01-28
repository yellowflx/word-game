import React from 'react';
import {StyledLetterCell} from "./style";

interface LetterCellProps {
  letter: string;
  status: string
}

export const LetterCell = (props: LetterCellProps) => {
  return (
    <StyledLetterCell $status={props.status}>
      {props.letter}
    </StyledLetterCell>
  );
};

