// import { GET_USER } from "../actions/authActions";
// import { IUser, IAuth, GlobalType } from "../../utils/TypesScript";
import { AUTH, initialState, IAuth, IAuthType } from "../types/authType";

const authReducer = (state: IAuth = {}, action: IAuthType): IAuth => {
  let auth = { ...state };
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
