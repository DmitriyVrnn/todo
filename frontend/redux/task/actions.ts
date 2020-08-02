import { TaskActionTypes, ITask, TaskEnum } from "./types";

export const addTask = (task: ITask): TaskActionTypes => ({
  type: TaskEnum.ADD_TASK,
  payload: { ...task },
});
