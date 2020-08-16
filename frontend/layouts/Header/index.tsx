import React from "react";
import { Avatar } from "@material-ui/core";
import { MdSettings, MdAdd } from "react-icons/md";

import { HeaderWrap, Right } from "./styled";
import { AppButton } from "../../components/UI/Button";
import { colors } from "../../assets/styles/colors";

export const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <LeftMenu />
      <RightMenu />
    </HeaderWrap>
  );
};

const RightMenu = () => {
  return (
    <Right>
      <AppButton icon={<MdSettings />} color="black" />
      <AppButton iconColor={colors.white} icon={<MdAdd />}>
        Новый проект
      </AppButton>
    </Right>
  );
};

const LeftMenu = () => {
  return <Avatar />;
};
