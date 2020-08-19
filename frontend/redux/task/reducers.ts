import {
  ActionTasks,
  IAddTaskAction,
  IRemoveTaskAction,
  ISelectTask,
  IStateTask,
  ITask,
  IUpdateTaskAction,
  TaskEnum,
} from "./types";
import { createReducer } from "../../utils/createReducer";

const initialState: IStateTask = {
  tasks: [],
  selectedTask: null,
  currentModalWindow: "",
};

const addTask = (state: IStateTask, action: IAddTaskAction) => {
  const { description, isCompleted, id } = action.payload;
  return {
    ...state,
    tasks: [
      ...state.tasks,
      {
        id,
        description,
        isCompleted,
      },
    ],
  };
};

const removeTask = (state: IStateTask, action: IRemoveTaskAction) => {
  return { ...state, tasks: state.tasks.filter((task: ITask) => task.id !== action.payload.id) };
};

const updateTask = (state: IStateTask, action: IUpdateTaskAction) => {
  const { description, isCompleted } = action.payload;
  return {
    ...state,
    tasks: state.tasks.map((task: ITask) =>
      task.id === action.payload.id
        ? {
            ...task,
            description,
            isCompleted,
          }
        : task,
    ),
  };
};

const selectTask = (state: IStateTask, action: ISelectTask) => {
  const selectedTask = state.tasks.find((task: ITask) => action.payload.id === task.id);
  return { ...state, selectedTask, currentModalWindow: TaskEnum.OPEN_UPDATE_TASK_MODAL };
};

const openAddTaskModalWindow = (state: IStateTask) => {
  return { ...state, currentModalWindow: TaskEnum.OPEN_ADD_TASk_MODAL };
};

const openUpdateTaskModalWindow = (state: IStateTask) => {
  return { ...state, currentModalWindow: TaskEnum.OPEN_UPDATE_TASK_MODAL };
};

const closeModalWindow = (state: IStateTask) => {
  return { ...state, currentModalWindow: TaskEnum.CLOSE_CURRENT_MODAL_MODAL };
};

export default createReducer<IStateTask, string, ActionTasks>(initialState, {
  [TaskEnum.ADD_TASK]: addTask,
  [TaskEnum.REMOVE_TASK]: removeTask,
  [TaskEnum.UPDATE_TASK]: updateTask,
  [TaskEnum.SELECT_TASK]: selectTask,
  [TaskEnum.OPEN_ADD_TASk_MODAL]: openAddTaskModalWindow,
  [TaskEnum.OPEN_UPDATE_TASK_MODAL]: openUpdateTaskModalWindow,
  [TaskEnum.CLOSE_CURRENT_MODAL_MODAL]: closeModalWindow,
});
