import { createStore, combineReducers } from "redux";
import pokerPlayerReducer from "./poker/reducers/pokerPlayer";

// Combine all the reducers here
const allReducers = Object.assign({}, pokerPlayerReducer);

// Create the store
const store = createStore(combineReducers(allReducers));

export default store;
