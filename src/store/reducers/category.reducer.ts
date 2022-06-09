import initialState from "../initialState";
import { getAllCategoriesTypes } from "../types/categoryTypes";

const categoryReducer = (state: any = initialState.categories, action: any) => {
  let categories = { ...state };
  switch (action.type) {
    // GET ALL CATEGORIES
    case getAllCategoriesTypes.SET_GET_ALL_CATEGORIES_LOADING:
      categories.allCategories.isLoadingInfo = action.payload;
      return categories;
    case getAllCategoriesTypes.SET_GET_ALL_CATEGORIES:
      categories.allCategories.categories = action.payload.categories;
      return categories;
    // CREATE NEW CATEGORY
    default:
      return categories;
  }
};

export default categoryReducer;
