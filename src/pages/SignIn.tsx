import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/widgets/Button";
import InputWithIcon from "../components/widgets/InputWithIcon";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import imgbackgLogin from "../assets/img/imgbackgLogin.png";
import { showToast } from "../components/shared/ToastAlert";
import { postAPI } from "../components/utils/FetchData";
import Storage, { keyStorage } from "../context/Storage";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { loginUserTypes } from "../store/types/userTypes";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { featureNoSupported } from "../services/functions";
interface IPorps {
  height?: string;
}

const SignIn = ({ height }: IPorps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.users);

  const [formLogin, setFormLogin] = useState({
    password: "",
    email: "",
    isLoading: false
  });

  const handleSubmit = async () => {
    if (
      formLogin.email.trim().length < 5 ||
      formLogin.email.trim().length < 5
    ) {
      return showToast({
        message: "Assurez vous que tous les champs sont completés",
        typeToast: "dark"
      });
    }

    dispatch({
      type: loginUserTypes.SET_LOGIN_USER_LOADING,
      payload: true
    });
    try {
      // BACKEND
      const { data } = await postAPI("user/login", {
        password: formLogin.password,
        identifiant: formLogin.email
      });
      if (data.status === 200) {
        showToast({ message: data.message || "", typeToast: "success" });
        dispatch({
          type: loginUserTypes.SET_LOGIN_USER,
          payload: { user: data.user }
        });

        // WE STORE USER INFO IN LOCAL STORAGE
        Storage.setItem(keyStorage.currentUser, {
          user: data.user,
          startSession: new Date().getTime()
        });
        dispatch({
          type: loginUserTypes.SET_LOGIN_USER_LOADING,
          payload: false
        });
        if (!height) {
          return history.push("/");
        }
      }
      if (data.status === 400) {
        showToast({ message: data.message || "ERROR", typeToast: "error" });
      }
      dispatch({
        type: loginUserTypes.SET_LOGIN_USER_LOADING,
        payload: false
      });

      //
    } catch (error: any) {
      dispatch({
        type: loginUserTypes.SET_LOGIN_USER_LOADING,
        payload: false
      });
      showToast({ message: error.message || "ERROR", typeToast: "error" });
    }
  };

  const handleChange = (value: any, type: string) => {
    setFormLogin({ ...formLogin, [type]: value });
  };

  return (
    <div
      className='mainLogin '
      style={{
        background: `url(../assets/img/backgLogin.jpg)`,
        height: `${height || "100vh"}`
      }}
    >
      <div
        className='container'
        style={{
          border: " 0.0625rem solid rgba(0, 0, 0, 0.05)",
          borderRadius: " 10px"
        }}
      >
        <div className='content-form'>
          <div className='content-groupLoginwith '>
            <div className='content-body'>
              <h4>Se connecter </h4>

              <div className='content-icons'>
                <LinkedInIcon onClick={() => featureNoSupported()} />
                <FacebookIcon onClick={() => featureNoSupported()} />
                <GitHubIcon onClick={() => featureNoSupported()} />
              </div>
            </div>
          </div>
          <div className='content-fields'>
            <div className='field'>
              <InputWithIcon
                icon={<ContactPhoneIcon />}
                value={formLogin.email}
                label='Identifiant'
                fnOnChange={(e: any) => handleChange(e.target.value, "email")}
              />
            </div>
            <div className='field'>
              <InputWithIcon
                icon={<LockIcon />}
                value={formLogin.password}
                isPwd={true}
                label='Mot de pass'
                fnOnChange={(e: any) =>
                  handleChange(e.target.value, "password")
                }
              />
            </div>
            <div
              className='field isCursor  btn-event'
              onClick={() => history.push("/signup")}
            >
              Besoin de creer un compte ?
            </div>

            <div className='content-actions margin-2'>
              <Button
                textBtn='Connexion'
                display='block'
                styleBtn={"btnPrimary"}
                actionTo={() => handleSubmit()}
                iconRightBtn={<PlayArrowIcon />}
                isLoadingInfo={currentUser.isLoadingInfo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
