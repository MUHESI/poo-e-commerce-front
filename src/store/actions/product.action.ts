import { Dispatch } from "redux";
import { postAPI, getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { getAllProductsTypes } from "../types/productTypes";

export const getAllProducts = () => async (dispatch: Dispatch) => {
  dispatch({
    type: getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING,
    payload: true
  });
  try {
    const res = await getAPI("produits");
    // console.clear();
    // console.log("res, re);
    if (res.data.status === 200)
      dispatch({
        type: getAllProductsTypes.SET_GET_ALL_PRODUCTS,
        payload: {
          products: res.data.produits
        }
      });

    dispatch({
      type: getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING,
      payload: false
    });
  } catch (err: any) {
    showToast({
      message: err?.response?.message || "Erreur de chargement des Produits",
      typeToast: "error",
      autoClose: false
    });
  }
};
export const getProductsByCategory =
  (category: number) => async (dispatch: Dispatch) => {
    dispatch({
      type: getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING,
      payload: true
    });
    console.clear();
    console.log("category", category);
    try {
      const res = await getAPI(`produits/categorie/${category}`);
      console.clear();
      console.log("res", res);
      if (res.data.status === 200)
        dispatch({
          type: getAllProductsTypes.SET_GET_ALL_PRODUCTS,
          payload: {
            products: res.data.produits
          }
        });

      dispatch({
        type: getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING,
        payload: false
      });
    } catch (err: any) {
      showToast({
        message:
          err?.response?.message || "Erreur de chargement des categories",
        typeToast: "error",
        autoClose: false
      });
    }
  };
