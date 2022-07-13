import { Dispatch } from "redux";
import { getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { getAllClientsTypes, getInfoClientTypes } from "../types/userTypes";

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

export const getInfoClient =
  (idClient: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: getInfoClientTypes.SET_GET_INFO_CLIENT_LOADING,
      payload: true
    });
    try {
      const res = await getAPI(`user/clients/${idClient}`);
      if (res.data.status === 200)
        dispatch({
          type: getInfoClientTypes.SET_GET_INFO_CLIENT,
          payload: {
            client: res.data.data
          }
        });

      if (res.data.status === 400) {
        dispatch({
          type: getInfoClientTypes.SET_GET_INFO_CLIENT,
          payload: {
            client: {}
          }
        });
      }
      dispatch({
        type: getInfoClientTypes.SET_GET_INFO_CLIENT_LOADING,
        payload: false
      });
    } catch (err: any) {
      showToast({
        message: err?.response?.message || "Erreur de chargement de client",
        typeToast: "error",
        autoClose: false
      });
    }
  };
