import {AddLossAction, AddWinAction, StatsActionEnum, ToggleStatsAction} from "./types";

export const StatsActionCreator = {
  addWin: (payload: number): AddWinAction => ({type: StatsActionEnum.ADD_WIN, payload}),
  addLose: (): AddLossAction => ({type: StatsActionEnum.ADD_LOSS}),
  toggleStats: (): ToggleStatsAction => ({type: StatsActionEnum.TOGGLE_STATS}),
}