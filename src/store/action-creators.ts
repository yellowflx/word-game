import {BoardActionCreator} from "./redusers/board/actron-creators";
import {StatsActionCreator} from "./redusers/stats/actron-creators";

export const AllActionCreators = {
  ...BoardActionCreator,
  ...StatsActionCreator
}
