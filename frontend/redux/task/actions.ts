import { IAddTaskAction, ITask, TaskEnum } from "./types";

export const addTask = (task: ITask): IAddTaskAction => ({
  type: TaskEnum.ADD_TASK,
  payload: { ...task },
});

export type ActionTasks = ReturnType<typeof addTask>;
