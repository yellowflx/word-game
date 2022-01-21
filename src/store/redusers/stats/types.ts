export enum StatsActionEnum {
  ADD_WIN = 'ADD_WIN',
  ADD_LOSS = 'ADD_LOSS',
}

export interface AddWinAction {
  type: StatsActionEnum.ADD_WIN;
  payload: number;
}

export interface AddLossAction {
  type: StatsActionEnum.ADD_LOSS;
}

export type StatsAction =
  AddWinAction |
  AddLossAction
