import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1)
    }
  })
);

export default function InputWithIcon({
  value,
  isPwd,
  icon,
  label,
  fnOnChange,
  pl,
  fullWidth
}: any) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='input-with-icon-adornment'>{label}</InputLabel>

        {isPwd ? (
          <Input
            type='password'
            id='input-with-icon-adornment'
            value={value}
            onChange={fnOnChange}
            placeholder={pl || ""}
            startAdornment={
              <InputAdornment position='start'>
                {icon || <AccountCircle />}
              </InputAdornment>
            }
          />
        ) : (
          <Input
            fullWidth={fullWidth}
            type='text'
            id='input-with-icon-adornment'
            placeholder={pl || ""}
            value={value}
            onChange={fnOnChange}
            startAdornment={
              <InputAdornment position='start'>{icon && icon}</InputAdornment>
            }
          />
        )}
      </FormControl>
    </div>
  );
}
