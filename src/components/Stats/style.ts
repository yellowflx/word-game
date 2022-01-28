import styled, {keyframes} from "styled-components";


const popOut = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(0);
  }
`

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
`

export const ModalWrapper = styled.div`
  animation: ${opacity} 1s;
  background-color: rgba(18, 18, 18, 0.7);
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export const StatsContent = styled.div`
  animation: ${popOut} 1s;
  color: white;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
  padding: 1vh 1vh 1.5vh 1vh;
  border-radius: 8px;
  background-color: rgba(91, 91, 91, 0.8);
`

export const CloseButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 0;
  cursor: pointer;
  top: -4vh;
  position: relative;
`

export const CustomWidth = styled.div<{ $width: string }>`
  width: ${props => props.$width};
`

export const Numbers = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 1vh;
`

export const Value = styled.div`
  font-size: 4vh;
  font-weight: 400;
  letter-spacing: 0.05em;
  font-variant-numeric: proportional-nums;
`

export const Label = styled.div<{ $fontSize: string }>`
  font-size: ${props => props.$fontSize};
`

export const Attempt = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  font-size: 1.5vh;
  line-height: 2vh;
`

export const Graph = styled.div`
  width: 100%;
  padding-left: 4px;
`

export const GraphBar = styled.div<{ width: string }>`
  padding-right: 1%;
  height: 100%;
  width: ${props => props.width};
  position: relative;
  background-color: #282828;
  display: flex;
  justify-content: flex-end;
`
