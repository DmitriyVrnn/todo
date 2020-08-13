import {
  ActionTasks,
  IAddTaskAction,
  IRemoveTaskAction,
  IStateTask,
  IUpdateTaskAction,
  TaskEnum,
  TypesTasks,
} from "./types";
import { createReducer } from "../../utils/createReducer";

const initialState: IStateTask[] = [
  {
    id: 1,
    description: "Initial task",
    isCompleted: false,
  },
];

const addTask = (state: Readonly<IStateTask[]>, action: IAddTaskAction) => {
  const { description, isCompleted, id } = action.payload;
  return [
    ...state,
    {
      id,
      description,
      isCompleted,
    },
  ];
};

const removeTask = (state: Readonly<IStateTask[]>, action: IRemoveTaskAction) => {
  return [...state].filter((task: IStateTask) => task.id !== action.payload.id);
};

const updateTask = (state: IStateTask[], action: IUpdateTaskAction) => {
  const { description, isCompleted } = action.payload;
  return [...state].map((task: IStateTask) =>
    task.id === action.payload.id
      ? {
          ...task,
          description,
          isCompleted,
        }
      : task,
  );
};

export default createReducer<IStateTask[], TypesTasks, ActionTasks>(initialState, {
  [TaskEnum.ADD_TASK]: addTask,
  [TaskEnum.REMOVE_TASK]: removeTask,
  [TaskEnum.UPDATE_TASK]: updateTask,
});
