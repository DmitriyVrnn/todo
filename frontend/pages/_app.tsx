import React from "react";
import App from "next/app";
import Head from "next/head";

import { createWrapper } from "next-redux-wrapper";
// import { configureStore } from "../redux/store";
import { Provider } from "react-redux";
import store from "../redux/store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Hello</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
