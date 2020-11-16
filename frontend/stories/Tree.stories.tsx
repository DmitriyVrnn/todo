import React from "react";

import { Story } from "@storybook/react/types-6-0";
import { TreeView } from "../components/UI/TreeView";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TreeStructure from "../components/UI/TreeView/tree";
import { TreeItem } from "../components/UI/TreeView/types";

import { useImmer } from "use-immer";
import cloneDeep from "lodash.clonedeep";

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
  const [treeData, setTreeData] = useImmer({
    objectTree: new TreeStructure(rootProps),
    dragCurrentParent: "",
  });

  const updateTree = (dropTarget: TreeItem | undefined, dragTarget: TreeItem) => {
    setTreeData((draft) => {
      const dragCurrentParent = draft.objectTree.findParent({
        key: "id",
        target: dragTarget.id,
      });

      if (dragCurrentParent && dragCurrentParent.id === dropTarget?.id) return;
      else if (dragCurrentParent) {
        dragCurrentParent.childrens.splice(
          dragCurrentParent.childrens.findIndex((x: TreeItem) => x.id === dragTarget.id),
          1,
        );

        const dragNewParent = draft.objectTree.find({
          key: "id",
          target: dropTarget?.id,
        });

        console.log(dragCurrentParent);
        console.log(dragNewParent);

        dragNewParent.childrens.push(dragTarget);

        draft.objectTree = cloneDeep(draft.objectTree);
      }
    });
  };

  console.log("treeData.tree", treeData.objectTree.tree);
  return (
    <DndProvider backend={HTML5Backend}>
      <TreeView data={treeData.objectTree.tree} updateTree={updateTree} />
    </DndProvider>
  );
};

export const Tree = Template.bind({});
