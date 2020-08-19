import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { RootState } from "../../redux/rootReducer";
import {IAddTask, ITask} from "../../redux/task/types";

import { addTask, removeTask, updateTask } from "../../redux/task/actions";
import { TaskList } from "./TaskList/TaskList";
import { ModalWindow } from "../UI/ModalWindow";
import { AddTask } from "./Forms/AddTask/AddTask";

import { useModalWindowStyles } from "./styles";
import { UpdateTask } from "./Forms/UpdateTask/UpdateTask";

const MODAL_WINDOW_ADD = "MODAL_WINDOW_ADD";
const MODAL_WINDOW_UPDATE = "MODAL_WINDOW_UPDATE";

export const Task: React.FC = () => {
  const [currentModal, setCurrentModal] = useState<string>("");
  //TODO: Вынести currentTask в redux
  const [currentTask, setCurrentTask] = useState<any>(null);
  const classes = useModalWindowStyles();

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const openAddModal = () => setCurrentModal(MODAL_WINDOW_ADD);
  const openUpdateModal = () => setCurrentModal(MODAL_WINDOW_UPDATE);
  const onCloseModal = () => setCurrentModal("");

  const handleUpdateTask = (id: number | string) => {
    const selectedTask = tasks.find((task: ITask) => id === task.id);
    setCurrentTask(selectedTask);
    if (selectedTask) openUpdateModal();
  };

  const submitAddTask = (task: IAddTask) => {
    dispatch(addTask(task));
    setCurrentModal("");
  };

  const submitUpdateTask = (task: ITask) => {
    console.log(task);
    dispatch(updateTask(task));
    setCurrentModal("");
  };

  const handleRemoveTask = (id: number | string) => {
    console.log(id);
    return dispatch(removeTask(id));
  }

  const renderModalWindow = () => {
    switch (currentModal) {
      case MODAL_WINDOW_ADD:
        return (
          <ModalWindow className={classes.modal} open={currentModal === MODAL_WINDOW_ADD} onClose={onCloseModal}>
            <div className={classes.paper}>
              <AddTask onSubmit={submitAddTask} />
            </div>
          </ModalWindow>
        );
      case MODAL_WINDOW_UPDATE:
        return (
          <ModalWindow className={classes.modal} open={currentModal === MODAL_WINDOW_UPDATE} onClose={onCloseModal}>
            <div className={classes.paper}>
              <UpdateTask onSubmit={submitUpdateTask} task={currentTask} />
            </div>
          </ModalWindow>
        );
    }
  };

  return (
    <section>
      {renderModalWindow()}
      <Button variant="contained" color="primary" onClick={openAddModal}>
        Добавить задачу
      </Button>
      <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} handleUpdateTask={handleUpdateTask} />
    </section>
  );
};
