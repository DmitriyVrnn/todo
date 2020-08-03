import { combineReducers } from "redux";
import taskReducer from "./task/reducers";

export const rootReducer = combineReducers({
  tasks: taskReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
