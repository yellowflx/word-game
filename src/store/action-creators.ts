import {WordActionCreator} from "./redusers/word/actron-creators";
import {BoardActionCreator} from "./redusers/board/actron-creators";

export const AllActionCreators = {
  ...WordActionCreator,
  ...BoardActionCreator
}
