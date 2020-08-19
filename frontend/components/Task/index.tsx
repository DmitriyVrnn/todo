import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { RootState } from "../../redux/rootReducer";
import { IAddTask, ITask, TaskEnum } from "../../redux/task/types";

import {
  addTask,
  closeCurrentModalWindow,
  openAddModalWindow,
  removeTask,
  selectTask,
  updateTask,
} from "../../redux/task/actions";
import { TaskList } from "./TaskList/TaskList";
import { ModalWindow } from "../UI/ModalWindow";
import { AddTask } from "./Forms/AddTask/AddTask";

import { useModalWindowStyles } from "./styles";
import { UpdateTask } from "./Forms/UpdateTask/UpdateTask";

export const Task: React.FC = () => {
  const classes = useModalWindowStyles();

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const selectedTask = useSelector((state: RootState) => state.tasks.selectedTask);
  const currentModal = useSelector((state: RootState) => state.tasks.currentModalWindow);

  const openAddModal = () => dispatch(openAddModalWindow());
  const onCloseModal = () => dispatch(closeCurrentModalWindow());

  const handleUpdateTask = (id: number | string) => dispatch(selectTask(id));

  const submitAddTask = (task: IAddTask) => {
    dispatch(addTask(task));
    dispatch(closeCurrentModalWindow());
  };

  const submitUpdateTask = (task: ITask) => {
    dispatch(updateTask(task));
    dispatch(closeCurrentModalWindow());
  };

  const handleRemoveTask = (id: number | string) => dispatch(removeTask(id));

  const renderModalWindow = () => {
    switch (currentModal) {
      case TaskEnum.OPEN_ADD_TASk_MODAL:
        return (
          <ModalWindow
            className={classes.modal}
            open={currentModal === TaskEnum.OPEN_ADD_TASk_MODAL}
            onClose={onCloseModal}
          >
            <div className={classes.paper}>
              <AddTask onSubmit={submitAddTask} />
            </div>
          </ModalWindow>
        );
      case TaskEnum.OPEN_UPDATE_TASK_MODAL:
        return (
          <ModalWindow
            className={classes.modal}
            open={currentModal === TaskEnum.OPEN_UPDATE_TASK_MODAL}
            onClose={onCloseModal}
          >
            <div className={classes.paper}>
              <UpdateTask onSubmit={submitUpdateTask} task={selectedTask} />
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
