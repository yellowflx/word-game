import React from 'react';

interface WProp {
  status: number;
}

const lose = ['п', 'о', 'р', 'а', 'ж', 'е', 'н', 'и', 'е']
const win = ['п', 'о', 'б', 'е', 'д', 'а']

const Result = (prop: WProp) => {
  switch (prop.status) {
    case 1:
      return (
        <div className="keyboard" style={{justifyContent: 'center'}}>
          <div className="row">
            <div className="spacer one-and-a-half"/>
            {win.map((key: string, index) =>(
              <button data-key={key} key={index} style={{height: '7.4vh', fontSize: '4vh', backgroundColor: '#538d4e'}}>
                {key}
              </button>
            ))}
            <div className="spacer one-and-a-half"/>
          </div>
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
        </div>
      )
    default:return <div>Ошибка</div>
  }
}

export default Result
