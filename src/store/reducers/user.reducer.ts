import initialState from "../initialState";
import {
  getAllClientsTypes,
  getInfoClientTypes,
  loginUserTypes
} from "../types/userTypes";

const userReducer = (state: any = initialState.users, action: any) => {
  let users = { ...state };
  switch (action.type) {
    // GET ALL CLIENTS
    case getAllClientsTypes.SET_GET_ALL_CLIENTS_LOADING:
      users.allClients.isLoadingInfo = action.payload;
      return users;
    case getAllClientsTypes.SET_GET_ALL_CLIENTS:
      users.allClients.clients = action.payload.clients;
      return users;
    // GET INFO CLIENT
    case getInfoClientTypes.SET_GET_INFO_CLIENT_LOADING:
      users.currentClient.isLoadingInfo = action.payload;
      return users;
    case getInfoClientTypes.SET_GET_INFO_CLIENT:
      users.currentClient.client = action.payload.client;
      return users;

    // LOGIN USER
    case loginUserTypes.SET_LOGIN_USER_LOADING:
      users.currentUser.isLoadingInfo = action.payload;
      return users;
    case loginUserTypes.SET_LOGIN_USER:
      users.currentUser.user = action.payload.user;
      return users;
    // CREATE NEW USER
    default:
      return users;
  }
};

export default userReducer;
