import { combineReducers } from "redux";

import searchReducer from "./Reducer/searchReducer";
import scoreReducer from "./Reducer/scoreReducer";

export default combineReducers({
  searchReducer,
  scoreReducer
});
