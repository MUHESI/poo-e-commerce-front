import { LOADING, initialState } from "../types/globalTypes";

const loadingReducer = (state: any = initialState.loading, action: any) => {
  let loading = { ...state };

  switch (action.type) {
    case LOADING:
      loading = action.payload;
      console.log("loading :>> ", loading);
      return action.payload;

    default:
      return state;
  }
};

export default loadingReducer;
