import React from "react";
import bg from "../../assets/img/backg.png";
import Button from "../widgets/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

function Login() {
  return (
    <div
      className="mainLogin"
      style={
        {
          // background: `url(${bg}) no-repeat fixed center/cover `,
        }
      }
    >
      <div className="sectionLeft">
        <div className="content-body">
          <h2>
            Bienvenue dans Système de Gestion des Fiches de Prestation des
            Enseignants
          </h2>
          <div className="body">
            <p>
              React components for faster and easier web development. Build your
              own design system, or start with Material Design React components
              for faster and easier web development. Build your own design
              system, or start with Material Design
            </p>
            <p>
              React components for faster and easier web development. Build your
              own design system, or start with Material Design React components
              for faster and easier web development. Build your own design
              system, or start with Material Design
              <br />
              <br />
            </p>
          </div>
          <div className="actions">
            <Button
              textBtn="Contactez-nous"
              iconLeftBtn={<MailOutlineIcon />}
              iconRightBtn=""
              styleBtn={"btnPrimary"}
            />
          </div>
        </div>
      </div>

      <div className="sectionRight">
        <div className="content-formLogin">
          <div className="header">
            <h2> Connexion </h2>
            <h1>Complétez vos coordonnées pour accéder à votre compte</h1>
          </div>
          <div className="body">
            <div>
              <span className="group_form_btn-input">
                <button type="button" className="">
                  <EmailIcon
                    className="iSearch hover-primary"
                    fontSize="large"
                  />
                </button>
                <input type="text" placeholder="Rechercher" />
              </span>
            </div>
            <div>
              <span className="group_form_btn-input">
                <button type="button" className="">
                  <LockIcon
                    className="iSearch hover-primary"
                    fontSize="large"
                  />
                </button>
                <input type="text" placeholder="Rechercher" />
              </span>
            </div>
            <p className="isCursor btn-event"> Mot de passe oublié ?</p>
            <div className="actions">
              <Button
                textBtn="Connexion"
                display="block"
                styleBtn={"btnPrimary"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
