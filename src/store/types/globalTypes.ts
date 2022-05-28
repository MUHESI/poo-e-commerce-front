// import { IUser } from "../../utils/TypesScript";
export const LOADING = "LOADING";

export let initialState = {
  user: {},
  loading: false,
};

// export type GlobalType = IAuthType;

export interface ILoadingType {
  type: typeof LOADING;
  payload: boolean;
}
