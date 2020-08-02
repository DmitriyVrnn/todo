import { combineReducers } from "redux";
import { reducer } from "./task/reducers";

export const appReducer = combineReducers({
  task: reducer,
});
