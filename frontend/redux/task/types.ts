export enum TaskEnum {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  SELECT_TASK = "SELECT_TASk",
  OPEN_ADD_TASk_MODAL = "OPEN_ADD_TASk_MODAL",
  OPEN_UPDATE_TASK_MODAL = "OPEN_UPDATE_TASK_MODAL",
  CLOSE_CURRENT_MODAL_MODAL = "CLOSE_CURRENT_MODAL_MODAL",
}

export interface IStateTask {
  tasks: ITask[];
  selectedTask: ITask | null;
  currentModalWindow: string;
}

export interface ITask {
  id: number | string;
  description: string;
  isCompleted: boolean;
}

export interface IAddTask {
  description: string;
  isCompleted: boolean;
}

export interface IAddTaskAction {
  type: typeof TaskEnum.ADD_TASK;
  payload: ITask;
}

export interface IRemoveTaskAction {
  type: typeof TaskEnum.REMOVE_TASK;
  payload: {
    id: number | string;
  };
}

export interface IUpdateTaskAction {
  type: typeof TaskEnum.UPDATE_TASK;
  payload: ITask;
}

export interface ISelectTask {
  type: typeof TaskEnum.SELECT_TASK;
  payload: {
    id: number | string;
  };
}

export interface ICompleteTaskAction {
  type: typeof TaskEnum.COMPLETE_TASK;
  payload: {
    id: number | string;
  };
}

export type ActionTasks = IAddTaskAction | IRemoveTaskAction | IUpdateTaskAction | ISelectTask;
