import React from "react";
import Head from "next/head";
import BasicLayout from "../components/UI/BasicLayout";

const Index: React.FC = () => {
  return (
    <BasicLayout>
      <Head>
        <title>Todo | Login</title>
      </Head>
      <h1>Authorize Page</h1>
    </BasicLayout>
  );
};

export default Index;
