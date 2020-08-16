import styled from "styled-components";
import { colors, darkThemeColors } from "../../assets/styles/colors";

export const HeaderWrap = styled.header`
  min-height: 50px;
  background: ${darkThemeColors.primaryThemeColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const IconMargin = styled.span`
  margin-right: 5px;
  display: flex;
  color: ${colors.white};
`;

export const Right = styled.div`
  display: flex;
`;
