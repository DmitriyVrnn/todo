import styled from "styled-components";
import { darkThemeColors } from "../../assets/styles/colors";

export const Article = styled.article`
  padding: 5px;
  background: ${darkThemeColors.secondaryThemeColor};
  flex: 3 1 60%;
  order: 2;
  border-top-left-radius: 35px;
`;
