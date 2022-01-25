export enum StatsActionEnum {
  ADD_WIN = 'ADD_WIN',
  ADD_LOSS = 'ADD_LOSS',
  TOGGLE_STATS = 'TOGGLE_STATS'
}

export interface AddWinAction {
  type: StatsActionEnum.ADD_WIN;
  payload: number;
}

export interface AddLossAction {
  type: StatsActionEnum.ADD_LOSS;
}

export interface ToggleStatsAction {
  type: StatsActionEnum.TOGGLE_STATS;
}

export type StatsAction =
  AddWinAction |
  AddLossAction |
  ToggleStatsAction
