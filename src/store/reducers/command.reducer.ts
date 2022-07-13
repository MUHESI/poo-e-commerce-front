import initialState, { panierDefault } from "../initialState";
import {
  addProductInCommandTypes,
  createCommandTypes,
  createProductInCommandTypes,
  getAllCommandsTypes
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
      newState.createCommand.command.panier = action.payload.panier;
      return newState;
    //  GET ALL COMMANDS
    case getAllCommandsTypes.SET_GET_ALL_COMMANDS_LOADING:
      newState.allCommands.isLoadingInfo = action.payload;
      return newState;
    case getAllCommandsTypes.SET_GET_ALL_COMMANDS:
      newState.allCommands.commands = action.payload.commands;
      return newState;

    //  CREATE COMMAND
    case createCommandTypes.SET_CREATE_COMMAND:
      newState.createCommand.command.panier = panierDefault;
      return newState;

    default:
      return newState;
  }
};

export default commandReducer;
