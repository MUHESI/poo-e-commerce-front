import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// import AvatarGroup from "@material-ui/lab/AvatarGroup";
//
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import user from "../../assets/img/user.png";
import Divider from "@material-ui/core/Divider";

// <AvatarGroup max={4}>
// </AvatarGroup>

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function GroupAvatarsUserCommented() {
  const classes = useStyles();
  return (
    <div className={`${classes.root} mainGroupAvatar`}>
      {/* <div className="contentAvatar"></div> */}

      {new Array(16).fill(0).map((item) => (
        <Avatar alt='Remy Sharp' src={user} />
      ))}
    </div>
  );
}

const data = [
  {
    user: "MUHESI Bless ",
    fText:
      " MUI provides a robust, customizable, and accessible library of foundational and advanced components",
    lText: "Ruby and Rails"
  },
  {
    user: "MUHESI Moise",
    fText:
      " MUI provides a robust, customizable, and accessible library of foundational and advanced components",
    lText: "git and github"
  },
  {
    user: "Serge Kami",
    fText:
      " MUI provides a robust, customizable,  provides a robust, customizable,  provides a robust, customizable,k and accessible library of foundational and advanced components",
    lText: "Javascript "
  },
  {
    user: "Jacques Chirac",
    fText:
      " MUI provides a robust, customizable, and accessible library of foundational and advanced components",
    lText: "Vue js"
  },

  {
    user: "Mumbere Jean ",
    fText:
      " MUI provides a robust, customizable, and accessible library of foundational and advanced components",
    lText: "React js"
  }
];

const fText = (text: string, TextDate: string) => (
  <React.Fragment>
    <span className='fText-ListItem'>{text}</span>
    <div className='fText-date'>{TextDate} </div>
  </React.Fragment>
);

const lText = (text: string) => (
  <React.Fragment>
    <div className='lText-ListItem'>{text}</div>
    <div className='lText-replay hover-primary'>Repondre </div>
  </React.Fragment>
);

export function Comments() {
  return (
    <List className={`containerRelatedPost`}>
      <div>
        <h2> Reactions </h2>

        <GroupAvatarsUserCommented />
      </div>
      <h2> Commentaires </h2>
      {data.map((item: any) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='User' src={user} />
            </ListItemAvatar>
            <ListItemText
              className='content-content'
              primary={fText(item.user, "4d ago")}
              secondary={lText(item.fText)}
            />
          </ListItem>
        </>
      ))}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem> */}
    </List>
  );
}
