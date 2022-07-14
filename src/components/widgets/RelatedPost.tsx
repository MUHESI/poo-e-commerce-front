import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import user from "../../assets/img/user.png";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../store/actions/product.action";

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
      " MUI provides a robust, customizable, and accessible library of foundational and advanced components",
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

const fText = (text: string) => (
  <React.Fragment>
    <div className='fText-ListItem'>{text}</div>
  </React.Fragment>
);

const lText = (text: string) => (
  <React.Fragment>
    <div className='lText-ListItem'>{text}</div>
  </React.Fragment>
);

export default function RelatedPost() {
  return (
    <List className={` containerRelatedPost`}>
      <h2> Related Posts</h2>
      {data.map((item: any) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='User' src={user} />
            </ListItemAvatar>
            <ListItemText
              primary={fText(item.user)}
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

export function SubheaderCategories() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state: any) => state.categories);

  return (
    <List className={` containerCategories-right`}>
      <h2> Categories</h2>
      <Divider component='li' />
      <ListItem onClick={() => dispatch(getAllProducts())}>
        <ListItemText primary={fText("Toutes")} secondary='' />
      </ListItem>
      {allCategories?.categories?.map((item: any, key: number) => (
        <>
          <Divider component='li' />
          <ListItem onClick={() => dispatch(getProductsByCategory(item.id))}>
            <ListItemText primary={fText(item.libelle)} secondary='' />
          </ListItem>
        </>
      ))}
    </List>
  );
}
