import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/rootReducer";

import { TaskList } from "./TaskList/TaskList";
import { ModalWindow } from "../UI/ModalWindow";
import { useModalWindowStyles } from "./styles";

export const Task: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const classes = useModalWindowStyles();

  const tasks = useSelector((state: RootState) => state.tasks);

  const openModal = () => setIsOpenModal(true);

  return (
    <section>
      {isOpenModal && (
        <ModalWindow className={classes.modal} open={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </ModalWindow>
      )}
      <button onClick={openModal}>Добавить задачу</button>
      <TaskList tasks={tasks} />
    </section>
  );
};
