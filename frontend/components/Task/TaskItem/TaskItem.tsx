import React from "react";

interface Props {
  description: string;
  isCompleted: boolean;
  id: number | string;
  onDelete: (id: number | string) => void;
}

export const TaskItem: React.FC<Props> = ({ description, isCompleted, id, onDelete }: Props) => {
  return (
    <article>
      <h3>{description}</h3>
      <span>{isCompleted.toString()}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};
