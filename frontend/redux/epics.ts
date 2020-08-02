import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchUsersEpic } from "./task/epics";

export const rootEpic: any = combineEpics(fetchUsersEpic);

export default createEpicMiddleware();
