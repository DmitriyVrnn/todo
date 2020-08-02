import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import epicMiddleware, { rootEpic } from "./epics";

import { appReducer } from "./reducers";

// export const configureStore = (preloadedState = {}) => {
// //   return createStore(appReducer, preloadedState, composeWithDevTools());
// // };

const initialState = {};

const store = createStore(appReducer, initialState, composeWithDevTools());

export default store;
