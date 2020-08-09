import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { RootState } from "../../redux/rootReducer";
import { ITask } from "../../redux/task/types";

import { addTask } from "../../redux/task/actions";
import { TaskList } from "./TaskList/TaskList";
import { ModalWindow } from "../UI/ModalWindow";
import { AddTask } from "./Forms/AddTask/AddTask";

import { useModalWindowStyles } from "./styles";

export const Task: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const classes = useModalWindowStyles();

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const openModal = () => setIsOpenModal(true);

  const submitAddTask = ({ description, isCompleted }: ITask) => {
    dispatch(addTask({ description, isCompleted }));
    setIsOpenModal(false);
  };

  return (
    <section>
      {isOpenModal && (
        <ModalWindow className={classes.modal} open={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <div className={classes.paper}>
            <AddTask onSubmit={submitAddTask} />
          </div>
        </ModalWindow>
      )}
      <Button variant="contained" color="primary" onClick={openModal}>
        Добавить задачу
      </Button>
      <TaskList tasks={tasks} />
    </section>
  );
};
