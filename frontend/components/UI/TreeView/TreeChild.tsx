import React from "react";
import styled from "styled-components";

import { TreeChildProps } from "./types";
import { useDndTree } from "./use-dnd-tree";

export const TreeChild: React.FC<TreeChildProps> = ({ name, node }) => {
  const { drag, isDragging } = useDndTree(node);

  return (
    <StyledChild ref={drag}>
      <div style={isDragging ? { opacity: "0.5" } : { opacity: "1" }}>
        <span>{name}</span>
      </div>
    </StyledChild>
  );
};

const StyledChild = styled.li`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;
