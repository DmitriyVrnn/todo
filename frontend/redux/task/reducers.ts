import {
  ActionTasks,
  IAddTaskAction,
  IRemoveTaskAction,
  IStateTask,
  ITask,
  IUpdateTaskAction,
  TaskEnum,
  TypesTasks,
} from "./types";
import { createReducer } from "../../utils/createReducer";

const initialState: IStateTask = {
  tasks: [],
  selectedTask: null,
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

export default createReducer<IStateTask, TypesTasks, ActionTasks>(initialState, {
  [TaskEnum.ADD_TASK]: addTask,
  [TaskEnum.REMOVE_TASK]: removeTask,
  [TaskEnum.UPDATE_TASK]: updateTask,
});
