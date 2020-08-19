import React from "react";
import { ITask } from "../../../redux/task/types";

interface ITaskItemProps {
  onDelete: (id: number | string) => void;
  onUpdateTask: (id: number | string) => void;
}

export const TaskItem: React.FC<ITaskItemProps & ITask> = ({
  description,
  isCompleted,
  id,
  onDelete,
  onUpdateTask,
}: ITaskItemProps & ITask) => {
  return (
    <article>
      <h3>{description}</h3>
      <span>{isCompleted.toString()}</span>
      <button onClick={() => onUpdateTask(id)}>Update</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
