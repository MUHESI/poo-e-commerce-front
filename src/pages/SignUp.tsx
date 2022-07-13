import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/widgets/Button";
import InputWithIcon from "../components/widgets/InputWithIcon";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { showToast, statusToast } from "../components/shared/ToastAlert";
import { textMessageSignUp as textToast } from "../components/helpers/constants";
import { postAPI } from "../components/utils/FetchData";
import { checkFormSignUp } from "../components/helpers/vaildSignUp";
import { featureNoSupported } from "../services/functions";

const SignUp = () => {
  const history = useHistory();

  const [formSignUp, setFormSignUp] = useState({
    password: "",
    email: "",
    confirmPassword: "",
    names: "",
    phone: "",
    role: 2,
    isLoading: false
  });

  const submitForm = (type: string) => {
    const names = formSignUp.names.split(" ");
    if (names.length < 2)
      return showToast({
        message: "Veillez separer les 2 noms par un espace svp.",
        typeToast: "dark"
      });
    if (!validForm.confirmPassword)
      return showToast({
        message: "Les mots ne correspondent pas.",
        typeToast: "dark"
      });

    // PREPARE
    let form = {
      ...formSignUp,
      password: formSignUp.password,
      email: formSignUp.email,
      name: names[0],
      lastname: names[1],
      phone: formSignUp.phone,
      cover: "cover.png"
    };
    if (type === "CLIENT") {
      form = { ...form, role: 2 };
    } else {
      form = { ...form, role: 1 };
    }
    handleSubmit(form);
  };

  const handleSubmit = async (form: any) => {
    setFormSignUp({ ...formSignUp, isLoading: true });
    if (!validForm.password || !validForm.email) {
      setFormSignUp({ ...formSignUp, isLoading: false });
      return showToast({
        message: textToast.COMPLETE_ALL_FIELDS_REQUIRED,
        typeToast: statusToast.ERROR
      });
    }
    try {
      const { data } = await postAPI("user/register", { ...form });
      if (data.status === 201) {
        showToast({
          message: data.message || "",
          typeToast: "success"
        });
        history.push("/login");
      }
      if (data.status === 400) {
        showToast({
          message: data.message || "",
          typeToast: "dark"
        });
      }
      setFormSignUp({ ...formSignUp, isLoading: false });
    } catch (error: any) {
      return showToast({
        message: error?.response?.message || "ERROR",
        typeToast: "error"
      });
    }
  };

  const [validForm, setValidForm] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    names: false,
    phone: true
  });
  React.useEffect(() => {
    setValidForm(checkFormSignUp(validForm, formSignUp));
  }, [formSignUp]);

  return (
    <div className='mainLogin  backgSignUp'>
      <div className='container'>
        <div className='content-form'>
          <div className='content-groupLoginwith '>
            <div className='content-body'>
              <h4>Créer un compte </h4>

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
                icon={<AccountCircle />}
                value={formSignUp.names}
                label='Noms'
                pl={"eg. ASIFIWE BRENDAN "}
                fnOnChange={(e: any) =>
                  setFormSignUp({ ...formSignUp, names: e.target.value })
                }
              />
              <InputWithIcon
                icon={<EmailIcon />}
                value={formSignUp.email}
                label='Email'
                pl={"eg. brendan@gmail.com"}
                fnOnChange={(e: any) =>
                  setFormSignUp({ ...formSignUp, email: e.target.value })
                }
              />
              <InputWithIcon
                icon={<EmailIcon />}
                value={formSignUp.phone}
                label='phone'
                pl={"eg. 0998799308"}
                fnOnChange={(e: any) =>
                  setFormSignUp({ ...formSignUp, phone: e.target.value })
                }
              />
            </div>
            <div className='field'>
              <InputWithIcon
                icon={<LockIcon />}
                value={formSignUp.password}
                isPwd={true}
                label='Mot de pass'
                pl={"8 carac. ou plus avec Maj."}
                fnOnChange={(e: any) =>
                  setFormSignUp({ ...formSignUp, password: e.target.value })
                }
              />
              <InputWithIcon
                icon={<LockIcon />}
                value={formSignUp.confirmPassword}
                isPwd={true}
                label='Repeter le mot de passe'
                fnOnChange={(e: any) =>
                  setFormSignUp({
                    ...formSignUp,
                    confirmPassword: e.target.value
                  })
                }
              />
            </div>

            <div
              className='field isCursor  btn-event'
              onClick={() => history.push("/login")}
            >
              Vous avez deja un compte ?
            </div>

            <div className='content-actions margin-2'>
              <Button
                textBtn='Creer un compte admin'
                // display='block'
                styleBtn={"btnPrimary"}
                actionTo={() => submitForm("ADMIN")}
              />
              <Button
                textBtn='Creer un compte client'
                // display='block'
                styleBtn={"btnPrimary"}
                actionTo={() => submitForm("CLIENT")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
