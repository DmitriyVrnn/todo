import { ITask, TypesTasks, TaskEnum } from "./types";
import { ActionTasks } from "./actions";
import { createReducer } from "../../utils/createReducer";

const initialState: ITask[] = [
  {
    id: 1,
    description: "Initial task",
    isCompleted: false,
  },
];

const addTask = (state: ITask[], action: ActionTasks): ITask[] => {
  return [
    ...state,
    {
      id: action.payload.id,
      description: action.payload.description,
      isCompleted: action.payload.isCompleted,
    },
  ];
};

export default createReducer<ITask[], TypesTasks, ActionTasks>(initialState, {
  [TaskEnum.ADD_TASK]: addTask,
});
