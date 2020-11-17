import React from "react";

import { Story } from "@storybook/react/types-6-0";
import { TreeView } from "../components/UI/TreeView";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useUpdateTree } from "../components/UI/TreeView/useUpdateTree";

export default {
  title: "App/Tree",
  component: TreeView,
};

const rootProps: any = [
  {
    name: "Корень",
    id: "1",
    childrens: [
      {
        name: "Уроки",
        id: "2",
        childrens: [
          {
            name: "JS",
            id: "10",
            childrens: [
              {
                name: "React",
                id: "21",
                childrens: [
                  {
                    name: "Redux",
                    id: "12",
                    childrens: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Vue",
            id: "30",
            childrens: [
              {
                name: "Angular",
                id: "17",
                childrens: [],
              },
            ],
          },
          {
            name: "GraphQL",
            id: "11",
            childrens: [],
          },
          {
            name: "Apollo",
            id: "20",
            childrens: [],
          },
          {
            name: "Reselect",
            id: "9",
            childrens: [],
          },
        ],
      },
      {
        name: "MOBX",
        id: "3",
        childrens: [
          {
            name: "Effector",
            id: "7",
          },
          {
            name: "TS",
            id: "77",
            childrens: [],
          },
          {
            name: "Ruby",
            id: "24",
            childrens: [],
          },
          {
            name: "Еще чета",
            id: "25",
            childrens: [],
          },
        ],
      },
    ],
  },
];

const Template: Story = () => {
  const { updateTree, treeData } = useUpdateTree(rootProps);

  return (
    <DndProvider backend={HTML5Backend}>
      <TreeView data={treeData.sourceTree.tree} updateTree={updateTree} />
    </DndProvider>
  );
};

export const Tree = Template.bind({});
