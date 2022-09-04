import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../store/actions/product.action";

export function SubheaderCategories() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state: any) => state.categories);

  const fText = (text: string) => (
    <React.Fragment>
      <div className='fText-ListItem'>{text}</div>
    </React.Fragment>
  );

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
