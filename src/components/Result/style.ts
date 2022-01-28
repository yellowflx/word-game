import styled from "styled-components";

export const ResultWrapper = styled.div`
  margin: 0 8px;
  user-select: none;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
  height: auto;
`

export const Letter = styled.button<{ $win?: boolean }>`
  font-size: 4vh;
  font-weight: bold;
  height: 7.4vh;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  border-radius: 4px;
  cursor: default;
  user-select: none;
  background-color: ${props => props.$win ? "#538d4e" : "#c33333"};
  flex: 1;
  text-transform: uppercase;
`

export const Spacer = styled.div<{ $width?: string }>`
  flex: ${props => props.$width || 1.5}
`