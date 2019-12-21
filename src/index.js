import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import thunk from "redux-thunk"; // added thunk

import { createStore, applyMiddleware, combineReducers } from "redux"; // applyMiddleware for async operation
import { composeWithDevTools } from "redux-devtools-extension"; // we will wrap middleware with this to use debugging tool

import nameReducers from "./reducers/nameReducer";
import wishReducers from "./reducers/wishReducer";

// combining reducers
const masterReducer = combineReducers({
  name: nameReducers,
  wish: wishReducers
});

const store = createStore(
  masterReducer, // combined reducer
  { name: "Amir Mustafa", wish: ["eat", "sleep"] }, // default data for reducer - earlier we passed in reducer page itself
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
