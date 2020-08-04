import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { TaskList } from "./TaskList/TaskList";

export const Task: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return <TaskList tasks={tasks} />;
};
