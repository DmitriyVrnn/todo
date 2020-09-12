import React, { useState } from "react";

import styled from "styled-components";

interface IFileProps {
  name: string;
}

interface IFolderProps {
  name: string;
  children?: React.ReactNode;
}

interface ITreeProps {
  children?: React.ReactNode;
  data: any;
}

interface ITreeItem {
  type: string;
  name: string;
  children: ITreeItem[] | undefined;
}

type TCollapsible = {
  isOpen: boolean;
};

const File = ({ name }: IFileProps) => {
  return (
    <StyledFile>
      <span>{name}</span>
    </StyledFile>
  );
};

const Folder = ({ name, children }: IFolderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

const TreeRecursive = ({ data }: any) => {
  return data.map((item: ITreeItem) => {
    if (item.type === "file") {
      return <File name={item.name} />;
    }
    if (item.type === "folder") {
      if (item.children && item.children.length > 0) {
        return (
          <Folder name={item.name}>
            <TreeRecursive data={item.children} />
          </Folder>
        );
      } else return <Folder name={item.name} />;
    }
  });
};

export const TreeView = ({ data, children }: ITreeProps) => {
  const isImperative: boolean = data && !children;

  return <StyledTree>{isImperative ? <TreeRecursive data={data} /> : children}</StyledTree>;
};

const StyledTree = styled.div`
  line-height: 1.5;
`;

const StyledFile = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

const StyledFolder = styled.div`
  padding-left: 20px;
  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

const Collapsible = styled.div<TCollapsible>`
  height: ${(props) => (props.isOpen ? "auto" : "0")};
  overflow: hidden;
`;
