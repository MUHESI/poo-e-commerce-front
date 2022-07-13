import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "../widgets/Button";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    },
    main: {
      //   display: "flex",
      //   justifyContent: "space-between"
    }
  })
);

interface IProps {
  message: string;
  fnAction: () => void;
}
export default function AlertComponent({ message, fnAction }: IProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.main} mainCardHomeText`}>
      <div className='center margin-2'>{message}</div>
      <div className='center margin-2'>
        <Button
          styleBtn={"btnPrimaryCircle"}
          textBtn={"Actualiser"}
          actionTo={() => fnAction()}
          iconRightBtn={<CachedIcon />}
        />
      </div>
    </div>
  );
}
