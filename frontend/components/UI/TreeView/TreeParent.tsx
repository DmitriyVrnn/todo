import React, { useState } from "react";
import styled from "styled-components";
import { TreeParentProps } from "./types";
import { useDndTree } from "./useDndTree";

export const TreeParent: React.FC<TreeParentProps> = ({ name, children, onUpdateTree, node }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { isDragging, drag } = useDndTree(node);
  const { isOver, drop } = useDndTree(node, onUpdateTree);

  const handleToggle = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledParent>
      <div ref={drag} style={isDragging ? { opacity: "0.5" } : { opacity: "1" }}>
        <div
          ref={drop}
          style={isOver ? { borderBottom: "2px solid yellow" } : { borderBottom: "2px solid red" }}
          className="folder--label"
          onClick={handleToggle}
        >
          <span>{">"}</span>
          <span>{name}</span>
        </div>
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      </div>
    </StyledParent>
  );
};

const StyledParent = styled.ul`
  padding-left: 20px;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled("div")<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
`;
