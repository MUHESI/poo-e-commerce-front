import { combineReducers } from "redux";
import auth from "./authReducer";
import loading from "./loadingReducer";
import menu from "./menuReducer";

export default combineReducers({
  auth,
  loading,
  menu,
});
