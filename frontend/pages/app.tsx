import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import { Header } from '../src/containers/Header';
import { SideMenu } from '../src/containers/SideMenu';
import { Workspace } from '../src/containers/Workspace';
import BasicLayout from '../src/components/shared/BasicLayout';

const App: React.FC = () => (
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

export default App;

export const Layout = styled.main`
  min-height: 800px;
  display: flex;
  flex-flow: row;
  height: calc(100vh - 50px);
`;
