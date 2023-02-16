// External deps
import { combineReducers } from "redux";

// Local deps
import todoReducer from "./todo";

const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer;
