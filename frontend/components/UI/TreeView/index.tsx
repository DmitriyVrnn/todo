import React from "react";
import styled from "styled-components";

import { TreeParent } from "./TreeParent";
import { TreeChild } from "./TreeChild";

import { TreeItem, TreeViewProps } from "./types";

export const TreeView: React.FC<TreeViewProps> = ({ data, updateTree }) => {
  const renderTree = () => {
    return data.map((node: TreeItem) => {
      if (node.childrens && node.childrens.length > 0) {
        return (
          <TreeParent key={node.id} name={node.name} node={node} onUpdateTree={updateTree}>
            <TreeView data={node.childrens} updateTree={updateTree} />
          </TreeParent>
        );
      }

      return <TreeChild node={node} key={node.id} name={node.name} />;
    });
  };

  return <StyledTree>{renderTree()}</StyledTree>;
};

const StyledTree = styled.div`
  line-height: 1.5;
`;
