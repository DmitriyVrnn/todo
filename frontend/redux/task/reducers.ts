import { TaskEnum } from "./types";

const initialState = {
  message: "No announcement...",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TaskEnum.ADD_TASK:
      return [];
    default:
      return state;
  }
};
