import { combineReducers } from "redux";
import UserDataReducer from "./UserReducer";

const appReducer = combineReducers({
  userInfo: UserDataReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
