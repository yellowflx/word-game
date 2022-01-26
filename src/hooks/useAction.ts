import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AllActionCreators} from "../store/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(AllActionCreators, dispatch)
}
