import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";

interface IButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  icon?: any;
  iconColor?: string;
}

type IconProps = {
  isIconButton?: boolean;
  iconColor?: string;
};

export const AppButton = ({ children, backgroundColor, color, icon, iconColor }: IButtonProps) => {
  const isIconButton = icon && !children;
  return (
    <Button isIconButton={isIconButton} color={color} backgroundColor={backgroundColor}>
      {icon && (
        <Icon isIconButton={isIconButton} iconColor={iconColor}>
          {icon}
        </Icon>
      )}
      {children}
    </Button>
  );
};

const baseButtonStyles = css<IButtonProps>`
  border: none;
  max-height: 35px;
  cursor: pointer;
  padding: 6px 16px;
  font-size: 0.875rem;
  box-sizing: border-box;
  transition: backgrond-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 7px;
  letter-spacing: 0.02857em;
  color: ${(props) => props.color || colors.white};
  margin: 0 5px;
`;

const buttonCustomize = css<IconProps & IButtonProps>`
  ${(props) => {
    if (props.isIconButton) {
      return {
        background: "none",
        boxShadow: "none",
      };
    } else
      return {
        background: props.backgroundColor || colors.orange,
        boxShadow:
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
      };
  }}
`;

export const Icon = styled.span<IconProps>`
  align-items: center;
  display: inline-flex;
  height: 17px;
  justify-content: center;
  transform: translateY(4px);
  width: 17px;
  margin-right: ${(props: IconProps) => (!props.isIconButton ? "5px" : "")};
  color: ${(props) => props.iconColor || colors.dark};
  font-size: 20px;
`;

const Button = styled.button`
  ${baseButtonStyles}
  ${buttonCustomize}
`;
