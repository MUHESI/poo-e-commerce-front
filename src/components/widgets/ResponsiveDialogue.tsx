import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Button from "./Button";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router-dom";

export default function ResponsiveDialog() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendMail = () => {
    history.push("/mailsended");
  };

  return (
    
    <div className="mainResponsiveDialogue">
      <Button
        textBtn="Message"
        // display="block"
        styleBtn={"btnPrimaryCircle"}
        iconRightBtn={<SendIcon />}
        actionTo={handleClickOpen}
      />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" className="title isCursor">
          Message vers Muhesi
        </DialogTitle>

        <DialogContent className="mainResponsiveDialogue">
          <div className="group-form">
            <Hidden only={["md", "lg", "xl"]}>
              <textarea
                // style={{ color: "blue" }}

                rows={30}
                placeholder="Taper votre message ici"
                //   onChange={(e) => handleChange(e, "description")}
              ></textarea>
            </Hidden>
            <Hidden only={["xs", "sm"]}>
              <textarea
                // style={{ color: "red" }}
                rows={10}
                placeholder="Taper votre message ici"

                //   onChange={(e) => handleChange(e, "description")}
              ></textarea>
            </Hidden>
          </div>
        </DialogContent>
        <DialogActions
          style={{
            paddingRight: "15px",
          }}
        >
          <div>
            <Button
              textBtn="Annuler"
              // display="block"
              styleBtn={"btnPrimary"}
              // iconRightBtn={<SendIcon />}
              actionTo={handleClose}
            />
          </div>
          <div>
            <Button
              textBtn="Envoyer"
              // display="block"
              styleBtn={"btnPrimary"}
              iconRightBtn={<SendIcon />}
              actionTo={sendMail}
            />
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
