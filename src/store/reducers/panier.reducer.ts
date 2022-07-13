import initialState from "../initialState";

import { getPaniersByCommandTypes } from "../types/panierTypes";

const panierReducer = (state: any = initialState.paniers, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    //  GET ALL PANIERS BY COMMAND
    case getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND_LOADING:
      newState.allPaniersByCommand.isLoadingInfo = action.payload;
      return newState;
    case getPaniersByCommandTypes.SET_GET_PANIERS_BY_COMMAND:
      newState.allPaniersByCommand.paniers = action.payload.paniers;
      return newState;
    default:
      return newState;
  }
};

export default panierReducer;
