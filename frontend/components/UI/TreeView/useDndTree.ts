import { DragElementWrapper, DragSourceOptions, useDrag, useDrop } from "react-dnd";
import { TreeDndTypes, TreeItem } from "./types";
import { SourceType } from "dnd-core";

type DndType = {
  isDragging: boolean;
  isOver: boolean;
  drag: DragElementWrapper<DragSourceOptions>;
  drop: any;
};

export interface DragObjectWithType {
  type: SourceType;
  data: TreeItem;
}

export const useDndTree = (
  node: TreeItem,
  onUpdateTree?: (dropTarget: TreeItem, dragTarget: TreeItem) => void,
): DndType => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: TreeDndTypes.TREE_ITEM,
      data: node,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: TreeDndTypes.TREE_ITEM,
    drop: (dragObject: DragObjectWithType) => {
      return onUpdateTree && onUpdateTree(node, dragObject.data);
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
      };
    },
  });

  return {
    isDragging,
    drag,
    isOver,
    drop,
  };
};
