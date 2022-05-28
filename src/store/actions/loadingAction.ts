import { showToast } from "../../components/shared/ToastAlert";
// import { LOADING } from "../../store/types/globalTypes";
import { LOADING, ILoadingType } from "../../store/types/globalTypes";

export const acitveLoading = (action: boolean) => async (dispatch: any) => {
  if (action === true) {
    dispatch({
      type: LOADING,
      payload: { loading: true },
    });
    return;
  } else {
    console.log("dans else action :>> ", action);

    dispatch({
      type: LOADING,
      payload: { loading: false },
    });
    return;
  }
};
