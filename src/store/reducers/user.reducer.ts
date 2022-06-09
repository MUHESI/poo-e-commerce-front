import initialState from "../initialState";
import { getAllClientsTypes } from "../types/userTypes";

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
    // CREATE NEW USER
    default:
      return users;
  }
};

export default userReducer;
