import {BoardActionCreator} from "./reducers/board/actronCreators";
import {StatsActionCreator} from "./reducers/stats/actronCreators";

export const AllActionCreators = {
  ...BoardActionCreator,
  ...StatsActionCreator
}
