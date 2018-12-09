import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import modalReducer from "./reducers/modalReducer";
import homeReducer from "./reducers/homeReducer";

const store = createStore(
    combineReducers({ modalReducer, homeReducer }),
    {},
    applyMiddleware(logger, thunk)
);

export default store;