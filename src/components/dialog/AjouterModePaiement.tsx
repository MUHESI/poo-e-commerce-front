import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { showToast } from "../shared/ToastAlert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDialog: {
      height: "800px",
      margin: 0,
      padding: 0,
      "&:nth-child(5) ": {
        backgroundColor: "red",
      },
    },
    mainContent: {
      margin: 0,
      padding: 0,
      marginBottom: 50,
      // border: "1px solid #B8B8B8",
      borderBottom: "none",
      // borderRadius: " 5px",
      backgroundColor: "#F7F7F9",
      borderRadius: "18px",

      // backgroundColor: "rgba(0, 0, 0, 0.7)",
      "&:first-child ": {
        padding: 0,
      },
    },
    titleforAskCorr: {
      textAlign: "left",
      paddingLeft: "20px",
      // fontSize: "2.4em",
      // color: "blue",
    },
    contentforAskCorr: {
      backgroundColor: "#F7F7F9",
      borderRadius: "18px",
    },
    // MuiDialog-paper
  })
);

interface IProps {
  r: string;
}

export function AjouterModePaiement({ r }: IProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = (key: string) => {
    if (key === "R_SUBMIT_TASK") {
      showToast({ message: "submitTask sended ", typeToast: "success" });
    } else {
      showToast({ message: "AskCorrection sended ", typeToast: "success" });
    }
  };
  useEffect(() => {
    showToast({ message: r, typeToast: "success" });
  }, []);
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Mode payer...
      </Button>
      <Dialog
        fullWidth={fullWidth}
        className={`${classes.mainDialog} mainDialogAprovePay`}
        maxWidth={"sm"}
        open={open}
        // onClose={handleClose}
      >
        <DialogContent className={classes.mainContent}>
          <div className={`content `}>
            <div className="header">
              <div className={`close-btn btn-event `} onClick={handleClose}>
                &times;
              </div>

              <h1 className={classes.titleforAskCorr}>
                Ajouter mode Payaiment
              </h1>
            </div>
            <div className="body">
              <div className="mainAddModePaiement content-body">
                <h3>
                  {/* <span> I </span> */}
                  Compte Bancaire
                </h3>
                <div className="content-form">
                  <div className="group-form">
                    <div>
                      <label> intitulé du compte </label>
                      <input type="text" placeholder="Ex: Jeanne Bangui" />
                    </div>
                    <div>
                      <label> Nom de la banque </label>
                      <input type="text" placeholder="Ex: EquitBCDC" />
                    </div>
                  </div>
                  <div className="group-form">
                    <div>
                      <label> No routing </label>
                      <input type="text" placeholder="Ex: 1234" />
                    </div>
                    <div>
                      <label> No du compte </label>
                      <input type="text" placeholder="Ex: 123456769" />
                    </div>
                  </div>
                  <div className="content-radio">
                    <label> Code SWIFT </label>
                    <input type="text" placeholder="Ex: BLMFIE2M" />
                  </div>
                  <div className="content-radios"> </div>
                </div>
              </div>

              <p>
                <input type="radio" name="Paypal" value="" />
                <span> PayPal </span>
              </p>
              <p>
                <input type="radio" name="Paypal" value="statut2" />
                <span> CARTE VISA/MASTERCARD </span>
              </p>

              <div className="action">
                <button type="button" className="btn-cancel btn-event">
                  Annuler
                </button>
                <button type="button" className="btn-submit btn-event">
                  Payer
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

/*



          -----------------------------



*/

/*

import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { showToast } from "../shared/ToastAlert";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDialog: {
      height: "800px",
      margin: 0,
      padding: 0,
      "&:nth-child(5) ": {
        backgroundColor: "red",
      },
    },
    mainContent: {
      margin: 0,
      padding: 0,
      marginBottom: 50,
      // border: "1px solid #B8B8B8",
      borderBottom: "none",
      // borderRadius: " 5px",
      backgroundColor: "#F7F7F9",
      borderRadius: "18px",

      // backgroundColor: "rgba(0, 0, 0, 0.7)",
      "&:first-child ": {
        padding: 0,
      },
    },
    titleforAskCorr: {
      textAlign: "left",
      paddingLeft: "20px",
    },
    contentforAskCorr: {
      backgroundColor: "#F7F7F9",
      borderRadius: "18px",
    },
    // MuiDialog-paper
  })
);

interface IProps {
  r: string;
}

export function AjouterModePaiement({ r }: IProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submit = (key: string) => {
    if (key === "R_SUBMIT_TASK") {
      showToast({ message: "submitTask sended ", typeToast: "success" });
    } else {
      showToast({ message: "AskCorrection sended ", typeToast: "success" });
    }
  };
  useEffect(() => {
    showToast({ message: r, typeToast: "success" });
  }, []);
  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
   Mode payer...
      </Button>
      <Dialog
        fullWidth={fullWidth}
        className={`${classes.mainDialog} mainDialogAprovePay`}
        maxWidth={"sm"}
        open={open}
        // onClose={handleClose}
      >
        <DialogContent className={classes.mainContent}>


        <div className={`content `}>
            <div className="header">
              <div className={`close-btn btn-event `} onClick={handleClose}>
                &times;
              </div>

              <h1
                className={r === "R_SUBMIT_TASK" ? "" : classes.titleforAskCorr}
              >
         Ajouter mode  Payer...
              </h1>
            </div>
            <div className="body">





              <div>
                <h3> Montant à payer </h3>
                <span> $ 2000 </span>
              </div>
              <div className="contrat">
                <h3>Statut du contrat </h3>
                <p>
                  <input
                    type="radio"
                    className=""
                    name="statutContrat"
                    value="statut1"
                  />
                  <span> Terminer le contrat -Travail terminé </span>
                </p>
                <p>
                  <input
                    type="radio"
                    className=""
                    name="statutContrat"
                    value="statut2"
                    // onClick={() => alert("click")}
                  />
                  <span> Garder le contrat ouvert </span>
                </p>
              </div>

              <div className="action">
                <button type="button" className="btn-cancel btn-event">
                  Annuler
                </button>
                <button type="button" className="btn-submit btn-event">
                  Payer
                </button>
              </div>
            </div>
          </div>

         
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

*/
