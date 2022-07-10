import { Dispatch } from "redux";
import { postAPI, getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import {
  getAllProductsTypes,
  getInfoProductTypes
} from "../types/productTypes";

export const getAllProducts = () => async (dispatch: Dispatch) => {
  dispatch({
    type: getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING,
    payload: true
  });
  try {
    const res = await getAPI("produits");
    if (res.data.status === 200)
      dispatch({
        type: getAllProductsTypes.SET_GET_ALL_PRODUCTS,
        payload: {
          products: res.data.produits,
          currentCategory: null
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

    try {
      const res = await getAPI(`produits/categorie/${category}`);
      console.clear();
      console.log("res", res);
      if (res.data.status === 200)
        dispatch({
          type: getAllProductsTypes.SET_GET_ALL_PRODUCTS,
          payload: {
            products: res.data.produits,
            currentCategory: category
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

export const getInfoProduct =
  (product: string | number) => async (dispatch: Dispatch) => {
    dispatch({
      type: getInfoProductTypes.SET_GET_INFO_PRODUCT_LOADING,
      payload: true
    });
    try {
      const { data } = await getAPI(`produits/detail/${product}`);
      if (data.status === 200)
        dispatch({
          type: getInfoProductTypes.SET_GET_INFO_PRODUCT,
          payload: {
            product: data.product
          }
        });

      dispatch({
        type: getInfoProductTypes.SET_GET_INFO_PRODUCT_LOADING,
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
