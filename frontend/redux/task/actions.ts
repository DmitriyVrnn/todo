import { IAddTaskAction, IRemoveTaskAction, ITask, TaskEnum } from "./types";

export const addTask = (task: ITask): IAddTaskAction => ({
  type: TaskEnum.ADD_TASK,
  payload: { ...task },
});

export const removeTask = (id: number): IRemoveTaskAction => ({
  type: TaskEnum.REMOVE_TASK,
  payload: { id },
});
