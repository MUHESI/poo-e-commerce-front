import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../widgets/Button";
import InputWithIcon from "../widgets/InputWithIcon";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MessageIcon from "@material-ui/icons/Message";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

const ContactMe = () => {
  const history = useHistory();
  const [state, setstate] = useState("");
  const [noms, setNoms] = useState("");
  const [pwd, setpwd] = useState("");
  return (
    <div className="mainContactMe">
      <div className="container">
        <div className="content-form">
          <div className="content-groupLoginwith ">
            <div className="content-body">
              <h4>Suivez-moi sur </h4>

              <div className="content-icons">
                <LinkedInIcon onClick={() => alert("")} />
                <FacebookIcon />
                <GitHubIcon />
              </div>
            </div>
          </div>
          <div className="content-fields contact-textPorfolio">
            <div className="field">
              <TextField
                id="outlined-textarea"
                label="Noms"
                placeholder=""
                multiline
                variant="outlined"
              />
            </div>
            <div className="field">
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder=""
                multiline
                variant="outlined"
              />
            </div>
            <div className="field">
              <TextField
                id="outlined-multiline-static"
                label="Votre message"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                style={{
                  margin: 0,
                }}
              />
            </div>

            {/* 
            <div
              className="field isCursor  btn-event"
              onClick={() => history.push("/login")}
            >
              Vous avez deja un compte ?
            </div> */}

            <div className="content-actions_ margin-2">
              <Button
                textBtn="Envoyer"
                // display="block"
                iconRightBtn={<SendIcon />}
                styleBtn={"btnPrimary"}
                // actionTo={() => history.push("/login")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
