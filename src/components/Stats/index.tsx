import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";
import {
  Attempt,
  CloseButton,
  CustomWidth,
  Graph,
  GraphBar,
  Label,
  ModalWrapper,
  Numbers,
  StatsContent,
  Value
} from "./style";

export const Stats = () => {
  const {toggleStats} = useActions()
  const {stats} = useTypedSelector(store => store)
  let oftenAttempt = Math.max(...stats.attempts, 1)

  return (
    <ModalWrapper id="0" onClick={(e) => {
      if ((e.target as HTMLInputElement).id === "0") {
        toggleStats()
      }
    }}>
      <StatsContent>
        <h3>СТАТИСТИКА</h3>
        <CloseButton onClick={toggleStats}> ✖ </CloseButton>
        <Numbers>
          <CustomWidth $width="20%">
            <Value>{stats.gamesPlayed}</Value>
            <Label $fontSize="1.5vh">Сыграно игр</Label>
          </CustomWidth>
          <CustomWidth $width="20%">
            <Value>{Math.floor(stats.gamesWon / stats.gamesPlayed * 100)}</Value>
            <Label $fontSize="1.5vh">Выиграно игр %</Label>
          </CustomWidth>
          <CustomWidth $width="20%">
            <Value>{stats.currentStreak}</Value>
            <Label $fontSize="1.5vh">Текущая серия</Label>
          </CustomWidth>
          <CustomWidth $width="20%">
            <Value>{stats.bestStreak}</Value>
            <Label $fontSize="1.5vh">Лучшая серия</Label>
          </CustomWidth>
        </Numbers>
        <h4>РАСПРЕДЕЛЕНИЕ ПОПЫТОК</h4>
        <CustomWidth $width="80%">
          {stats.attempts.map((value: number, index) =>
            <Attempt key={index}>
              <div>{index + 1}</div>
              <Graph>
                <GraphBar width={value ? (value / oftenAttempt * 100 + "%") : "5%"}>
                  {value}
                </GraphBar>
              </Graph>
            </Attempt>
          )}
        </CustomWidth>
      </StatsContent>
    </ModalWrapper>
  );
};
