import React from "react";

import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "5px",
      height: 5,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function ProgressBar({ tabSkills }: any) {
  const classes = useStyles();

  return (
    <div>
      {tabSkills.map((skill: any) => (
        <div className={classes.root}>
          <div className="bodLiner">
            <div className="text">
              <img src={skill.img} alt=".." />
              <span>{skill.skill} </span>
            </div>

            <div>{skill.value}%</div>
          </div>

          <br />
          <BorderLinearProgress variant="determinate" value={skill.value} />
        </div>
      ))}
    </div>
  );
}
