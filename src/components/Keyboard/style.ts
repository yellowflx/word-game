import styled from "styled-components";

export const KeyboardWrapper = styled.div`
  margin: 0 8px;
  user-select: none;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
  height: auto;
`

export const Key = styled.button<{ $color?: string, $flex?: string }>`
  font-size: 1.8vh;
  font-weight: bold;
  border: 0;
  padding: 0;
  margin: 0 6px 0 0;
  height: 5.5vh;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.color || "#818384"};
  color: #d7dadc;
  flex: ${props => props.$flex || 1};
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
`

export const Spacer = styled.div<{ $width?: string }>`
  flex: ${props => props.$width || 1}
`