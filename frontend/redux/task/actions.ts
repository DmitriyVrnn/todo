import { v4 as uuidv4 } from "uuid";

import { ITask, IAddTaskAction, IRemoveTaskAction, TaskEnum, IUpdateTaskAction, IAddTask } from "./types";

export const addTask = (task: IAddTask): IAddTaskAction => ({
  type: TaskEnum.ADD_TASK,
  payload: {
    description: task.description,
    id: uuidv4(),
    isCompleted: task.isCompleted,
  },
});

export const removeTask = (id: number | string): IRemoveTaskAction => {
  console.log(id);
  return ({
    type: TaskEnum.REMOVE_TASK,
    payload: { id },
  });
}

export const updateTask = (task: ITask): IUpdateTaskAction => ({
  type: TaskEnum.UPDATE_TASK,
  payload: task,
});
