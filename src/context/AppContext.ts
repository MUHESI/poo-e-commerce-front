import { createContext } from "react";
import { USERS } from "../components/helpers/constants";
import Storage, { keyStorage } from "./Storage";

export default createContext({ Uid: "", entite: "", fonction: "" });

export const askSession_ = () => {
  try {
    const res = Storage.getItem(keyStorage.currentUser);
    if (!res)
      return {
        logged: false,
        user: null
      };

    const { user } = res;
    return {
      logged: true,
      user,
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      phone: user.phone
    };
  } catch (error) {
    return {
      logged: false,
      user: null
    };
  }
};

export const askSession = () => {
  return {
    user: {
      ...USERS.data.clients[0]
    },
    logged: true
  };
};
