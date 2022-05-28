import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/widgets/Button";
import InputWithIcon from "../components/widgets/InputWithIcon";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const SignIn = () => {
  const history = useHistory();
  const [state, setstate] = useState("");
  const [pwd, setpwd] = useState("");
  return (
    <div className="mainLogin ">
      <div className="container">
        <div className="content-form">
          <div className="content-groupLoginwith ">
            <div className="content-body">
              <h4>Se connecter </h4>

              <div className="content-icons">
                <LinkedInIcon onClick={() => alert("o,n")} />
                <FacebookIcon />
                <GitHubIcon />
              </div>
            </div>
          </div>
          <div className="content-fields">
            <div className="field">
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
            <div className="field isCursor  btn-event" 
            
            
            onClick={() => history.push('/signup')}
            >
           Besoin de creer un compte ? 
            </div>
            

            <div className="content-actions margin-2">
              <Button
                textBtn="Connexion"
                display="block"
                styleBtn={"btnPrimary"}
                actionTo={() => history.push("/blog")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
