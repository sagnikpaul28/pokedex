import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Home from './containers/Home';

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    window.document.getElementsByClassName('app')[0]
);