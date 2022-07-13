import { Dispatch } from "redux";
import { getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";

import { getPaniersByCommandTypes } from "../types/panierTypes";

export const getPanierByCommand =
  (idCommand: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND_LOADING,
      payload: true
    });
    //
    try {
      const { data } = await getAPI(`panier/byCommand/${idCommand}`);
      if (data.results.success)
        //
        dispatch({
          type: getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND,
          payload: {
            paniers: data.results.data
          }
        });

      dispatch({
        type: getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND_LOADING,

        payload: false
      });
    } catch (err: any) {
      showToast({
        message: err?.response?.message || "Erreur de chargement des commandes",
        typeToast: "error",
        autoClose: false
      });
    }
  };
