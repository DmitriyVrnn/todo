import { useImmer } from "use-immer";
import { useCallback } from "react";
import cloneDeep from "lodash.clonedeep";

import Tree from "./tree";

import { TreeItem } from "./types";

type UpdateTreeTypes = {
  updateTree: (dropTarget: TreeItem, dragTarget: TreeItem) => void;
  treeData: { sourceTree: Tree<TreeItem> };
};

export const useUpdateTree = (root: TreeItem[]): UpdateTreeTypes => {
  const [treeData, setTreeData] = useImmer({
    sourceTree: new Tree<TreeItem>(root),
  });

  const updateTree = useCallback((dropTarget: TreeItem, dragTarget: TreeItem) => {
    setTreeData((draft) => {
      const dragCurrentParent = draft.sourceTree.findParent({
        key: "id",
        target: dragTarget.id,
        childKey: "childrens",
      });

      if (dragCurrentParent && dragCurrentParent.id === dropTarget.id) return;

      if (dragCurrentParent) {
        dragCurrentParent.childrens.splice(
          dragCurrentParent.childrens.findIndex((item: TreeItem) => item.id === dragTarget.id),
          1,
        );

        const dragNewParent = draft.sourceTree.findNode({
          key: "id",
          target: dropTarget.id,
          childKey: "childrens",
        });

        dragNewParent?.childrens.push(dragTarget);

        draft.sourceTree = cloneDeep(draft.sourceTree);
      }
    });
  }, []);

  return {
    updateTree,
    treeData,
  };
};
