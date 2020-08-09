import { v4 as uuidv4 } from "uuid";

import { IAddTask, IAddTaskAction, IRemoveTaskAction, TaskEnum } from "./types";

export const addTask = (task: IAddTask): IAddTaskAction => ({
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
