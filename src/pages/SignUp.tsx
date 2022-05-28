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

const SignUp = () => {
  const history = useHistory();
  const [state, setstate] = useState("");
  const [noms, setNoms] = useState("");
  const [pwd, setpwd] = useState("");
  return (
    <div className="mainLogin  backgSignUp">
      <div className="container">
        <div className="content-form">
          <div className="content-groupLoginwith ">
            <div className="content-body">
              <h4>Créer un compte </h4>

              <div className="content-icons">
                <LinkedInIcon onClick={() => alert("")} />
                <FacebookIcon />
                <GitHubIcon />
              </div>
            </div>
          </div>
          <div className="content-fields">
            <div className="field">
              <InputWithIcon
                icon={<AccountCircle />}
                value={noms}
                label="Noms"
                fnOnChange={(e: any) => setNoms(e.target.value)}
              />

              <InputWithIcon
                icon={<EmailIcon />}
                value={state}
                label="Email"
                fnOnChange={(e: any) => setstate(e.target.value)}
              />
            </div>
            <div className="field">
              <InputWithIcon
                icon={<LockIcon />}
                value={pwd}
                isPwd={true}
                label="Mot de pass"
                fnOnChange={(e: any) => setpwd(e.target.value)}
              />
            </div>

            <div
              className="field isCursor  btn-event"
              onClick={() => history.push("/login")}
            >
              Vous avez deja un compte ?
            </div>

            <div className="content-actions_ margin-2">
              <Button
                textBtn="Creer un compte"
                display="block"
                styleBtn={"btnPrimary"}
                actionTo={() => history.push("/login")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
