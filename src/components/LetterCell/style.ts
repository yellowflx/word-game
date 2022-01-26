import styled, {keyframes} from "styled-components";

const popUp = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
`

const shake = keyframes`
  25%, 75% {
    transform: translate3d(4px, 0, 0);
  }

  50% {
    transform: translate3d(-4px, 0, 0);
  }
`

const flipIn = keyframes`
  0% {
    transform: rotateX(-120deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`

export const StyledLetterCell = styled.div<{ $status?: string }>`
  background-color: ${props => (props.$status === "missing" ? "#3a3a3c" :
                                props.$status === "present" ? "#b59f3b" :
                                props.$status === "correct" ? "#538d4e" :
                                props.$status === "tbd" ? "#121213" : "#121213")};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 4vh;
  font-weight: bold;
  box-sizing: border-box;
  color: #d7dadc;
  text-transform: uppercase;
  user-select: none;
  border: 2px solid ${props => (props.$status === "present" ? "#b59f3b" :
                                props.$status === "correct" ? "#538d4e" :
                                props.$status === "tbd" ? "#565758" : "#3a3a3c")};
  animation: ${props => ( props.$status === "missing" ? shake :
                          props.$status === "present" ? flipIn :
                          props.$status === "correct" ? flipIn :
                          props.$status === "tbd" ? popUp : "#121213")} 0.3s;
  animation-timing-function: ease-in;
  backface-visibility: hidden;
`
