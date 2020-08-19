import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { ITask } from "../../../redux/task/types";

interface ITaskList {
  tasks: ITask[];
  handleRemoveTask: (id: number | string) => void;
  handleUpdateTask: (id: number | string) => void;
}

export const TaskList = ({ tasks, handleRemoveTask, handleUpdateTask }: ITaskList) => {
  return (
    <ul>
      {tasks.map((task: ITask) => (
        <li key={task.id}>
          <TaskItem
            description={task.description}
            isCompleted={task.isCompleted}
            id={task.id}
            onDelete={handleRemoveTask}
            onUpdateTask={handleUpdateTask}
          />
        </li>
      ))}
    </ul>
  );
};
