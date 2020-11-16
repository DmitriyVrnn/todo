import React from "react";
import App from "next/app";
import Head from "next/head";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../redux/store";
import { Store } from "redux";

type Props = { store: Store };

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Hello</title>
        </Head>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Component {...pageProps} />
          </DndProvider>
        </Provider>
      </>
    );
  }
}

const makeStore = () => store;

export default createWrapper(makeStore).withRedux(MyApp);
