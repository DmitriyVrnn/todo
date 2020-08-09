import { ActionTasks, IAddTaskAction, IRemoveTaskAction, ITask, TaskEnum, TypesTasks } from "./types";
import { createReducer } from "../../utils/createReducer";

const initialState: ITask[] = [
  {
    id: 1,
    description: "Initial task",
    isCompleted: false,
  },
];

const addTask = (state: Readonly<ITask[]>, action: IAddTaskAction) => {
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

const removeTask = (state: Readonly<ITask[]>, action: IRemoveTaskAction) => {
  return [...state].filter((task) => task.id !== action.payload.id);
};

export default createReducer<ITask[], TypesTasks, ActionTasks>(initialState, {
  [TaskEnum.ADD_TASK]: addTask,
  [TaskEnum.REMOVE_TASK]: removeTask,
});
