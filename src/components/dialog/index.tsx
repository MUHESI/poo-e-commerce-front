

import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
// import Grid from "@material-ui/core/Grid";
// import { DividerForClient } from "../shared/profilUser/DividerProfile";
import DeleteIcon from "@material-ui/icons/Delete";
import { showToast } from "../shared/ToastAlert";

interface IProps {
  r: string;
}

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
        Ajouter mode paiement
      </Button>
      <Dialog
        fullWidth={fullWidth}
        className={`${classes.mainDialog} mainPopupModifyPlanExecution`}
        maxWidth={"md"}
        open={open}
        // onClose={handleClose}
      >
        <DialogContent className={classes.mainContent}>
      
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}


/*



    <div className={`content `}>
            <div className="header">
              <div className={`close-btn btn-event `} onClick={handleClose}>
                &times;
              </div>

              <h1
                className={r == "R_SUBMIT_TASK" ? "" : classes.titleforAskCorr}
              >
                Ajouter mode paiement
              </h1>
            </div>
            <div className="body">
              return <div className="mainAddModePaiement">AddPaiement</div>;
              <div className="h">
                {[1, 2, 3].map((l, i) => (
                  <div className="dialogModiyPlane_content-input">
                    <div className="content-group">
                      <div className="group-milestone ">
                        <div className="content-milestone  margin-m  ">
                          <span className="span_number"> {`${i + 1}.`}</span>
                          <div>
                            <input
                              type="text"
                              className="input_milestone"
                              placeholder={`Milestone ${i + 1}`}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="group-montat  margin-m">
                        <div className="group-inputLabelLeft">
                          <div className="devise">USD</div>
                          <input type="text" placeholder="Montant" />
                        </div>
                      </div>

                      <div className="group-days  margin-m">
                        <input
                          type="text"
                          className="border-on"
                          placeholder="Durée"
                        />
                        <select
                          className=""
                          // onChange={handleChangeSchoolLevel}
                          // value={formData.schoolLevel}
                        >
                          <option value=""> Choisir</option>
                          <option value="Bac +5">Jours</option>
                          <option value="Master">Mois</option>
                          <option value="Bsc">Année</option>
                        </select>
                        <div className="icon-delete">
                          <DeleteIcon className="i" fontSize="large" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="group-add_milestone ">
                <span className="color-primary">
                  +Ajouter d'autres milestones
                </span>
                <span className="simple-text">
                  (Vous pouvez le faire plus tard)
                </span>
              </div>
              <div className="action">
                <button type="button" className="btn-cancel btn-event">
                  Annuler
                </button>
                <button type="button" className="btn-submit btn-event">
                  propser
                </button>
              </div>
            </div>
          </div>

*/