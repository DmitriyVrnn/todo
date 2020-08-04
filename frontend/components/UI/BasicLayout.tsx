import React, { ReactElement, ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
 }

h1 {
    color: #fff;
}`;

const BasicLayout = ({ children }: { children?: ReactNode }): ReactElement => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default BasicLayout;
