import React from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { IStateTask } from "../../../redux/task/types";

interface Props {
  tasks: IStateTask[];
  handleRemoveTask: (id: number | string) => void;
  handleUpdateTask: (id: number | string) => void;
}

export const TaskList = ({ tasks, handleRemoveTask, handleUpdateTask }: Props) => {
  return (
    <ul>
      {tasks.map((task: IStateTask) => (
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
