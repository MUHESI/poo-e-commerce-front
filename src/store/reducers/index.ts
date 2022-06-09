import { combineReducers } from "redux";
import auth from "./authReducer";
import categoryReducer from "./category.reducer";
import loading from "./loadingReducer";
import menu from "./menuReducer";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth,
  loading,
  menu,
  categories: categoryReducer,
  products: productReducer,
  users: userReducer
});
