import initialState from "../initialState";
import { getAllProductsTypes } from "../types/productTypes";

const productReducer = (state: any = initialState.products, action: any) => {
  let products = { ...state };
  switch (action.type) {
    // GET ALL PRODUCTS
    case getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING:
      products.allProducts.isLoadingInfo = action.payload;
      return products;
    case getAllProductsTypes.SET_GET_ALL_PRODUCTS:
      products.allProducts.products = action.payload.products;
      return products;
    // CREATE NEW PRODUCT
    default:
      return products;
  }
};

export default productReducer;
