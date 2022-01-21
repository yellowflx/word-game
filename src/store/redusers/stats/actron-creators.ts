import {AddLossAction, AddWinAction, StatsActionEnum} from "./types";

export const StatsActionCreator = {
  addWin: (payload: number): AddWinAction => ({type: StatsActionEnum.ADD_WIN, payload}),
  addLose: (): AddLossAction => ({type: StatsActionEnum.ADD_LOSS}),
}