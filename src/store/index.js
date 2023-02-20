// External deps
import { createStore } from "redux";

// Local deps
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;
