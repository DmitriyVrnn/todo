import React from "react";
import { ITask } from "../../../redux/task/types";

export const TaskItem = ({ description, isCompleted }: ITask) => {
  return (
    <article>
      <h3>{description}</h3>
      <span>{isCompleted.toString()}</span>
    </article>
  );
};
