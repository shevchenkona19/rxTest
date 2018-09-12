import { createStore, applyMiddleware , compose} from "redux";
import {rootReducer} from "../reducers/index";
import {initState} from "./index";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;