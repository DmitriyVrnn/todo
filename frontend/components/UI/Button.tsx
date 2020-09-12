import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../assets/styles/colors";

export interface IButtonProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  icon?: Pick<any, string>;
  iconColor?: string;
  size?: "small" | "medium" | "large";
}

type IconProps = {
  isIconButton?: boolean;
  iconColor?: string;
};

export const AppButton = ({ children, backgroundColor, color, icon, iconColor, size }: IButtonProps) => {
  const isIconButton = icon && !children;
  return (
    <StyledButton size={size} isIconButton={isIconButton} color={color} backgroundColor={backgroundColor}>
      {icon && (
        <Icon isIconButton={isIconButton} iconColor={iconColor}>
          {icon}
        </Icon>
      )}
      {children}
    </StyledButton>
  );
};

const getSizeButton = (size: string) => {
  const sizes: any = {
    small: "4px 16px",
    medium: "4px 20px",
    large: "4px 60px",
  };
  return sizes[size];
};

const baseButtonStyles = css<IButtonProps>`
  border: none;
  max-height: 35px;
  cursor: pointer;
  padding: ${(props) => getSizeButton(props.size || "small")};
  font-size: 0.875rem;
  box-sizing: border-box;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.75;
  border-radius: 7px;
  letter-spacing: 0.02857em;
  color: ${(props) => props.color || colors.white};
  margin: 0 5px;
`;

const buttonCustomize = css<IconProps & IButtonProps>`\n ${(props) => {
  if (props.isIconButton) {
    return css`
      background: ${props.backgroundColor || "none"};
      box-shadow: none;
      outline: none;
      &:hover {
        background: ${colors.graylighten1};
      }
      &:active {
        background: ${colors.grayLightten2};
      }
    `;
  } else
    return css`
      background: ${props.backgroundColor || colors.orange};
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    `;
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

const StyledButton = styled.button`
  ${baseButtonStyles}
  ${buttonCustomize}
`;
