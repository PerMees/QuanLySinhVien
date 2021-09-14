import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import StudentReducer from "./Reducers/StudentReducer";

const rootReducer = combineReducers({ StudentReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
