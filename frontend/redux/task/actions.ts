import { v4 as uuidv4 } from "uuid";

import { ITask, IAddTaskAction, IRemoveTaskAction, TaskEnum, IStateTask, IUpdateTaskAction } from "./types";

export const addTask = (task: ITask): IAddTaskAction => ({
  type: TaskEnum.ADD_TASK,
  payload: {
    description: task.description,
    id: uuidv4(),
    isCompleted: task.isCompleted,
  },
});

export const removeTask = (id: number | string): IRemoveTaskAction => ({
  type: TaskEnum.REMOVE_TASK,
  payload: { id },
});

export const updateTask = (task: IStateTask): IUpdateTaskAction => ({
  type: TaskEnum.UPDATE_TASK,
  payload: task,
});
