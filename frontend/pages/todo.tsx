import React from "react";
import styled from "styled-components";

import Head from "next/head";
import { Header } from "../containers/Header";
import { SideMenu } from "../containers/SideMenu";
import { Workspace } from "../containers/Workspace";
import BasicLayout from "../components/shared/BasicLayout";

const Todo: React.FC = () => (
  <BasicLayout>
    <Head>
      <title>Todo | Workspace</title>
    </Head>
    <section>
      <Header />
      <Layout>
        <SideMenu />
        <Workspace />
      </Layout>
    </section>
  </BasicLayout>
);

export default Todo;

export const Layout = styled.main`
  min-height: 800px;
  display: flex;
  flex-flow: row;
  height: calc(100vh - 50px);
`;
