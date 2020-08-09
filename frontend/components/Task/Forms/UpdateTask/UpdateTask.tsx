import React from "react";
import { Formik, Field, Form } from "formik";
import { IStateTask, ITask } from "../../../../redux/task/types";

interface Props {
  onSubmit: (values: ITask) => void;
  task: IStateTask;
}

export const UpdateTask: React.FC<Props> = ({ onSubmit, task }: Props) => {
  return (
    <div>
      <h1>Редактирование задачи</h1>
      <Formik
        initialValues={{
          id: task.id,
          description: task.description,
          isCompleted: task.isCompleted,
        }}
        onSubmit={(values: ITask) => onSubmit(values)}
      >
        {(formik) => {
          return (
            <Form>
              <label htmlFor="description">Description</label>
              <Field id="description" name="description" placeholder="Сегодня мне нужно сделать 2 задачи" />
              <button disabled={formik.values.description.length === 0} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
