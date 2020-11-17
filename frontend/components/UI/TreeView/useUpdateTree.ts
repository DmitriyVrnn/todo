import { useImmer } from "use-immer";
import TreeStructure from "./tree";
import { TreeItem } from "./types";
import cloneDeep from "lodash.clonedeep";

export const useUpdateTree = (root: TreeItem[]) => {
  const [treeData, setTreeData] = useImmer({
    sourceTree: new TreeStructure<TreeItem>(root),
  });

  const updateTree = (dropTarget: TreeItem, dragTarget: TreeItem) => {
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
  };

  return {
    updateTree,
    treeData,
  };
};
