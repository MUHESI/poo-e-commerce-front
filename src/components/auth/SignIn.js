import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import evnv from "dotenv";
// import InputPassword from "./InputPassword";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validateEmail } from "../../../src/services/validForm/methodsHelper";
import { login } from "../../store/actions/authActions";
import { useSelector } from "react-redux";

import { FONCTIONALITIES as ROLE } from "../shared/constantes/fonctionalities";
import { showToast } from "../shared/ToastAlert";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Gestion fiche
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    color: "#3f51b5",
  },
  width: {
    width: "100%",
  },
}));

export default function Login() {
  const { auth } = useSelector((state) => state);

  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    showPassword: false,
  });
  useEffect(() => {
    console.clear();
    console.log("auth :>> ", auth);
    if (auth.token) {
      showToast({ message: "je  suis dans if ss_token " });
      history.push("/");
    }
  }, [auth.token, history]);

  const goToUrl = (path) => history.push(path);
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim().length <= 5 || !validateEmail(email))
      return showToast({
        message: "Erreur : l'email est invalide. ",
        type: "error",
      });
    else if (password.length < 7)
      showToast({
        message:
          "Erreur : Votre mot de password doit avoir aumoins 8 caracters. ",
        type: "error",
      });
    else {
      showToast({
        message: `super email ${email} et ps ${password}`,
        type: "error",
      });
      dispatch(login({ account: email, password }));
    }

    //   .then((res) => {
    //     if (res.data.errors) {
    //       showToast({
    //         message: `${res.data.errors.email} ${res.data.errors.password}`,
    //         typeToast: "error",
    //       });
    //     } else {
    //       const { actif, onholyday, fonction } = res.data;

    //       if (actif) {
    //         if (!onholyday) {
    //           if (fonction) window.location = "/dashboard";
    //         } else {
    //           console.log("Tu es en congé");
    //         }
    //       } else {
    //         console.log("Tu es inactif desolé");
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  const classes = useStyles();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" className={classes.title}>
          Gestion Fiche
        </Typography>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          action=""
          onSubmit={handleLogin}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined" className={classes.width}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Mot de passe oublié ?
              </Link> */}
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Mot de passe oublié ?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
