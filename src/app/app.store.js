import { createStore, combineReducers, applyMiddleware } from "redux";
import pokerReducers from "./poker/reducers/";
import thunk from "redux-thunk";

// Create the store
const store = createStore(combineReducers(pokerReducers), applyMiddleware(thunk));

export default store;
