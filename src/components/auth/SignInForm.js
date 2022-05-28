import React, { useState } from "react";
import axios from "axios";
import evnv from "dotenv";
// require("dotenv").config({ path: "./config/.env" });

const SignInForm = () => {
  const RECEPTION = "RECEPTION";
  const CAISSE = "CAISSE";
  const LABORATOIRE = "LABORATOIRE";
  const CONSULTATION = "CONSULTATION";
  // const RECEPTION = 'RECEPTION';
  // const RECEPTION = 'RECEPTION';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    /* axios
      .post(
        "http://localhost:5020/api/user/login",

        {
          email,
          password,
        },
        {
          "Content-type": "Application/json",
        }
      ) */
    axios({
      method: "POST",
      url: "http://localhost:5020/api/user/login",
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          // emailError.innerHTML = res.data.errors.email;
          // passwordError.innerHTML = res.data.errors.password;
          console.log(res.data.errors.email);
          console.log(res.data.errors.password);
          console.log(res.data);
        } else {
          const { actif, onholyday, fonction } = res.data;
          if (actif) {
            if (!onholyday) {
              switch (fonction) {
                case RECEPTION:
                  console.log(RECEPTION);
                  // window.location = "/reception";
                  break;
                case LABORATOIRE:
                  console.log(RECEPTION);
                  window.location = "/laboratory";
                  break;
                default:
                  return console.log(fonction);
              }
            } else {
              console.log("Tu es en congé");
            }
          } else {
            console.log("Tu es inactif desolé");
          }
          // console.log(res.data);
          // window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="mail"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="eamil error"></div>
      <br />

      <label htmlFor="password"> Mot de pass</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;

//   proxy: "http://localhost:5000/",
// import logger from "morgan";

// app.use(logger("dev"));
// axios({
//   method: "POST",
//   url: "http://localhost:5020/api/user/login",
//   withCredentials: true,
//   data: {
//     email,
//     password,
//   },
// });
// Accept: "Application/json",
// "http://localhost:5020/api/user/login",
// `${process.env.REACT_APP_API_URL}api/user/login`,
