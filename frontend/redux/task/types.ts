export enum TaskEnum {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface IAddTaskAction {
  type: typeof TaskEnum.ADD_TASK;
  payload: ITask;
}

export interface IRemoveTaskAction {
  type: typeof TaskEnum.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface ICompleteTaskAction {
  type: typeof TaskEnum.COMPLETE_TASK;
  payload: {
    id: number;
  };
}

export type TypesTasks = typeof TaskEnum.ADD_TASK;
