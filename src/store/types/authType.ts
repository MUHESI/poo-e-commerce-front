import { IUser } from "../../utils/TypesScript";
export const AUTH = "AUTH";

export let initialState = {
  user: {},
  loading: false,
};

export interface IAuth {
  token?: string;
  // user: IUser;
  user?: any;
}
export interface IAuthType {
  type: typeof AUTH;
  payload: IAuth;
}
