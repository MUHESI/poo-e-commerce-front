import initialState from "../initialState";
import {
  addProductInCommandTypes,
  createCommandTypes,
  createProductInCommandTypes
} from "../types/commandTypes";

const commandReducer = (state: any = initialState.commands, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    // CREATE NEW PRODUCT IN COMMAND
    case createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND_LOADING:
      newState.createCommand.isLoadingInfo = action.payload;
      return newState;
    case createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND:
      const paniers = [...newState.createCommand.command.panier];
      paniers.push(action.payload.prductofPanier);
      newState.createCommand.command.panier = paniers;
      return newState;

    // ADD QUANTITY OF PRODUCT
    case addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND_LOADING:
      newState.createCommand.isLoadingInfo = action.payload;
      return newState;
    case addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND:
      /*   const ListPaniers = [...newState.createCommand.command.panier];
      for (var index in ListPaniers) {
        if (ListPaniers[index].idStateArticle === action.payload.prduct.id) {
          ListPaniers[index] = action.payload.prduct;
          break;
        }
      } */
      // console.clear();
      console.log("panier :>> ", action.payload.panier);
      newState.createCommand.command.panier = action.payload.panier;
      return newState;

    // CREATE COMMAND
    /*   case createCommandTypes.SET_CREATE_COMMAND_LOADING:
      categories.allCategories.isLoadingInfo = action.payload;
      return categories;
    case createCommandTypes.SET_CREATE_COMMAND:
      categories.allCategories.categories = action.payload.categories;
      return categories; */

    default:
      return newState;
  }
};

export default commandReducer;
