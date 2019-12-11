import rootReducer from "../reducers/rootReducer"
import thunk from "redux-thunk";
import logger from "redux-logger"
import {createStore, applyMiddleware} from "redux";
import {loadState} from "./localStorage"

const persistedState = loadState();
console.log(persistedState)
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk, logger));



export default store