import React from 'react';
import Countdown, {CountdownRendererFn, zeroPad} from "react-countdown";

interface WProp {
  status: number;
}

const lose = ['п', 'о', 'р', 'а', 'ж', 'е', 'н', 'и', 'е']
const win = ['п', 'о', 'б', 'е', 'д', 'а']

let date = new Date()
date.setHours(date.getHours() + 1)
date.setMinutes(0)
date.setSeconds(0)

const Result = (prop: WProp) => {
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

  switch (prop.status) {
    case 1:
      return (
        <div className="keyboard" style={{justifyContent: 'center'}}>
          <div className="row">
            <div className="spacer one-and-a-half"/>
            {win.map((key: string, index) => (
              <button data-key={key} key={index} style={{height: '7.4vh', fontSize: '4vh', backgroundColor: '#538d4e'}}>
                {key}
              </button>
            ))}
            <div className="spacer one-and-a-half"/>
          </div>
          <Countdown date={date} renderer={renderer}/>
        </div>
      )
    case 2:
      return (
        <div className="keyboard" style={{justifyContent: 'center'}}>
          <div className="row" style={{marginBottom: '3vh'}}>
            {lose.map((key: string, index) => (
              <button data-key={key} key={index} style={{height: '7.4vh', fontSize: '4vh', backgroundColor: '#c33333'}}>
                {key}
              </button>
            ))}
          </div>
          <Countdown date={date} renderer={renderer}/>
        </div>
      )
    default:
      return <div>Ошибка</div>
  }
}

export default Result
