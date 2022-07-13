import { Dispatch } from "redux";
import { AUTH, IAuthType } from "../../store/types/authType";
import { LOADING, ILoadingType } from "../../store/types/globalTypes";
import { postAPI, getAPI } from "../../components/utils/FetchData";
import { showToast } from "../../components/shared/ToastAlert";
import { IUserLogin } from "../../utils/TypesScript";

const LOGGED_TEXT = "gestionFiche";
export const login =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | ILoadingType>) => {
    dispatch({
      type: LOADING,
      payload: true
    });
    try {
      const res = await postAPI("login", userLogin);
      dispatch({
        type: AUTH,
        payload: {
          token: res.data.access_token,
          user: res.data.user
        }
      });
      localStorage.setItem("logged", LOGGED_TEXT);

      dispatch({
        type: LOADING,
        payload: false
      });
    } catch (err: any) {
      dispatch({
        type: LOADING,
        payload: false
      });
      if (err.response.data && err.response.data.msg)
        showToast({ message: err.response.data.msg, typeToast: "error" });
      else showToast({ message: err.response.data, typeToast: "error" });
    }
  };

export const refresToken = () => async (dispatch: Dispatch<IAuthType>) => {
  const logged = localStorage.getItem("logged");
  if (logged !== LOGGED_TEXT) return;
  try {
    const res = await getAPI("refresh_token");
    console.clear();
    console.log("res refresToken :>> ", res);
    dispatch({
      type: AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user
      }
    });
  } catch (err: any) {
    console.log("err :>> ", err);
  }
};
