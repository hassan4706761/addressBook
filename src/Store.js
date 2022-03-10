import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Redux/Reducers";
import thunk from "redux-thunk";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;
