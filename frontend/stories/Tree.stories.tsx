import React from "react";
import { TreeView } from "../components/UI/TreeView";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "App/TreeView",
  component: TreeView,
};

const structure = [
  {
    type: "folder",
    name: "Личное",
    children: [
      {
        type: "folder",
        name: "Отдых",
        children: [
          { type: "file", name: "React" },
          { type: "file", name: "CSS" },
        ],
      },
      { type: "file", name: "C++" },
      { type: "file", name: "JavaScript" },
    ],
  },
  { type: "folder", name: "Книги" },
  {
    type: "folder",
    name: "Работа",
    children: [
      {
        type: "folder",
        name: "Задачи",
        children: [
          { type: "file", name: "Задача 1" },
          { type: "file", name: "Задача 2" },
        ],
      },
    ],
  },
];

const Template: Story = () => <TreeView data={structure} />;

export const Tree = Template.bind({});
