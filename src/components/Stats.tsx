import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useAction";

const Stats = () => {
  const {toggleStats} = useActions()
  const {stats} = useTypedSelector(store => store)
  let oftenAttempt = Math.max(...stats.attempts, 1)

  return (
    <div className="modal-wrapper" onClick={(e) => {
      if ((e.target as HTMLInputElement).className === "modal-wrapper") {
        toggleStats()
      }
    }}>
      <div className="Stats" style={{display: "flex"}}>
        <h1>Статистика</h1>
        <div onClick={toggleStats} style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          height: 0,
          cursor: "pointer",
          top: "-4vh",
          position: "relative"
        }}>✖
        </div>
        <div className="numbers">
          <div className="stat">
            <div className="value">{stats.gamesPlayed}</div>
            <div className="label">Сыграно игр</div>
          </div>
          <div className="stat">
            <div className="value">{Math.floor(stats.gamesWon / stats.gamesPlayed * 100)}</div>
            <div className="label">Выиграно игр %</div>
          </div>
          <div className="stat">
            <div className="value">{stats.currentStreak}</div>
            <div className="label">Текущая серия</div>
          </div>
          <div className="stat">
            <div className="value">{stats.bestStreak}</div>
            <div className="label">Лучшая серия</div>
          </div>
        </div>
        <h1 style={{fontSize: "2.5vh"}}>Распределение попыток</h1>
        <div className="attempts">
          {stats.attempts.map((value: number, index) =>
            <div className="attempt" key={index}>
              <div className="num">{index + 1}</div>
              <div className="graph">
                <div className="graph-bar" style={{width: value ? (value / oftenAttempt * 100 + "%") : "5%"}}>
                  {value}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;