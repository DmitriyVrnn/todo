import React from "react";
import { Formik, Field, Form } from "formik";
import { IAddTask } from "../../../../redux/task/types";

const initialAddTask: IAddTask = {
  description: "",
  isCompleted: false,
};

interface Props {
  onSubmit: (values: IAddTask) => void;
}

export const AddTask: React.FC<Props> = ({ onSubmit }: Props) => {
  return (
    <div>
      <h1>Добавление задачи</h1>
      <Formik initialValues={initialAddTask} onSubmit={(values: IAddTask) => onSubmit(values)}>
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
