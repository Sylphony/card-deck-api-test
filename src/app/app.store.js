import { createStore, combineReducers, applyMiddleware } from "redux";
import pokerFieldReducer from "./poker/reducers/pokerField";
import thunk from "redux-thunk";

// Combine all the reducers here
const allReducers = Object.assign({}, pokerFieldReducer);

// Create the store
const store = createStore(combineReducers(allReducers), applyMiddleware(thunk));

export default store;
