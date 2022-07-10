import initialState from "../initialState";
import {
  getAllProductsTypes,
  getInfoProductTypes
} from "../types/productTypes";

const productReducer = (state: any = initialState.products, action: any) => {
  let products = { ...state };
  switch (action.type) {
    // GET ALL PRODUCTS
    case getAllProductsTypes.SET_GET_ALL_PRODUCTS_LOADING:
      products.allProducts.isLoadingInfo = action.payload;
      return products;
    case getAllProductsTypes.SET_GET_ALL_PRODUCTS:
      products.allProducts.currentCategory = action.payload.currentCategory;
      products.allProducts.products = action.payload.products;
      return products;
    // GET INFO PRODUCT
    case getInfoProductTypes.SET_GET_INFO_PRODUCT_LOADING:
      products.infoProduct.isLoadingInfo = action.payload;
      return products;
    case getInfoProductTypes.SET_GET_INFO_PRODUCT:
      products.infoProduct.product = action.payload.product;
      return products;
    // CREATE NEW PRODUCT
    default:
      return products;
  }
};

export default productReducer;
