import { combineReducers } from "redux";
import auth from "./authReducer";
import categoryReducer from "./category.reducer";
import loading from "./loadingReducer";
import menu from "./menuReducer";

export default combineReducers({
  auth,
  loading,
  menu,
  categories: categoryReducer
});
