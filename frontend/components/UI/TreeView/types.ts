import React from "react";

export interface TreeChildProps {
  name: TreeItem["name"];
  node: TreeItem;
}

export interface TreeParentProps {
  children?: React.ReactNode;
  name: TreeItem["name"];
  node: TreeItem;
  onUpdateTree: TreeViewProps["updateTree"];
}

export type TreeItem = {
  name: string;
  childrens: Array<TreeItem>;
  id: string;
  parentId?: string;
};

export type TreeViewProps = {
  data: TreeItem[];
  icons?: {
    [iconId: string]: React.ReactElement;
  };
  updateTree: (dropTarget: TreeItem, dragTarget: TreeItem) => void;
};

export enum TreeDndTypes {
  TREE_ITEM = "TREE_ITEM",
}
