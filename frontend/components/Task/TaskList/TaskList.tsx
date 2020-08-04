import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { ITask } from "../../../redux/task/types";

interface TasksState {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: TasksState) => {
  return (
    <ul>
      {tasks.map((task: ITask) => (
        <li key={task.id}>
          <TaskItem description={task.description} isCompleted={task.isCompleted} />
        </li>
      ))}
    </ul>
  );
};
