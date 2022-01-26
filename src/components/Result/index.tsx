import React from 'react';
import Countdown, {CountdownRendererFn, zeroPad} from "react-countdown";
import {Letter, ResultWrapper, Row, Spacer} from './style';

interface ResultProps {
  status: number;
}

const lose = ['п', 'о', 'р', 'а', 'ж', 'е', 'н', 'и', 'е']
const win = ['п', 'о', 'б', 'е', 'д', 'а']

let date = new Date()
date.setHours(date.getHours() + 1)
date.setMinutes(0)
date.setSeconds(0)

export const Result = (props: ResultProps) => {
  const renderer: CountdownRendererFn = ({minutes, seconds, completed}) => {
    if (completed) {
      return (
        <div className="Countdown">
          Новое слово уже открылось, <a href={'/'}>обновите страницу</a>
        </div>
      )
    } else {
      return (
        <div className="Countdown">
          Новое слово через {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
      );
    }
  };

  switch (props.status) {
    case 1:
      return (
        <ResultWrapper>
          <Row>
            <Spacer/>
            {win.map((key: string, index) => (
              <Letter key={index} $win>
                {key}
              </Letter>
            ))}
            <Spacer/>
          </Row>
          <Countdown date={date} renderer={renderer}/>
        </ResultWrapper>
      )
    case 2:
      return (
        <ResultWrapper>
          <Row>
            {lose.map((key: string, index) => (
              <Letter key={index}>
                {key}
              </Letter>
            ))}
          </Row>
          <Countdown date={date} renderer={renderer}/>
        </ResultWrapper>
      )
    default:
      return <div>Ошибка</div>
  }
}
