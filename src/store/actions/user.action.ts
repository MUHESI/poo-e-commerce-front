import { Dispatch } from "redux";
import { postAPI, getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { getAllClientsTypes } from "../types/userTypes";

export const getAllClients = () => async (dispatch: Dispatch) => {
  dispatch({
    type: getAllClientsTypes.SET_GET_ALL_CLIENTS_LOADING,
    payload: true
  });
  try {
    const res = await getAPI("user/clients");
    if (res.data.status === 200)
      dispatch({
        type: getAllClientsTypes.SET_GET_ALL_CLIENTS,

        payload: {
          clients: res.data.clients
        }
      });

    dispatch({
      type: getAllClientsTypes.SET_GET_ALL_CLIENTS_LOADING,

      payload: false
    });
  } catch (err: any) {
    showToast({
      message: err?.response?.message || "Erreur de chargement des clients",
      typeToast: "error",
      autoClose: false
    });
  }
};
