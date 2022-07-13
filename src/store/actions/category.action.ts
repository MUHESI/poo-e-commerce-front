import { Dispatch } from "redux";
import { getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { getAllCategoriesTypes } from "../types/categoryTypes";

export const getCategories = () => async (dispatch: Dispatch) => {
  dispatch({
    type: getAllCategoriesTypes.SET_GET_ALL_CATEGORIES_LOADING,
    payload: true
  });
  try {
    const res = await getAPI("categories");
    if (res.data.status === 200)
      dispatch({
        type: getAllCategoriesTypes.SET_GET_ALL_CATEGORIES,
        payload: {
          categories: res.data.categories
        }
      });

    dispatch({
      type: getAllCategoriesTypes.SET_GET_ALL_CATEGORIES_LOADING,
      payload: false
    });
  } catch (err: any) {
    showToast({
      message: err?.response?.message || "Erreur de chargement des categories",
      typeToast: "error",
      autoClose: false
    });
  }
};
