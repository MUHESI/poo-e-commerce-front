import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = ({ signIn, signUp }) => {
  const [signUpModal, setSignUpModal] = useState(signUp); //ValSignIn ValSignUp
  const [signInModal, setSignInModal] = useState(signIn);
  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            className={signUpModal ? "active-btn" : null}
            id="register"
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            className={signInModal ? "active-btn" : null}
            id="login"
          >
            Se connecter
          </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {signInModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Log;
