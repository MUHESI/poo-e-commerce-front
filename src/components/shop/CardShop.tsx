import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import imgStore from "../../assets/img/back3.jpg";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { substringText } from "../../services/functions";
import { ShowCategory } from "../admin/TableProducts";
import { useDispatch, useSelector } from "react-redux";
import { handlePanier } from "../../services/command/methodsHelper";
import {
  addProductInCommandTypes,
  createProductInCommandTypes
} from "../../store/types/commandTypes";
import {
  addProductInCommand,
  createProductInCommand
} from "../../store/actions/command.action";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: "rotate(180deg)"
    }
  })
);

export default function RecipeReviewCard({ item }: any) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { createCommand } = useSelector((state: any) => state.commands);

  const [expanded, setExpanded] = React.useState(false);

  const handlePanier_ = (product: any, quantity: number) => {
    const productFormatted: any = handlePanier.formateProduct(
      product,
      quantity
    );
    const ACTION = handlePanier.findActionAction(
      createCommand.command.panier,
      productFormatted
    );
    switch (ACTION) {
      case createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND:
        return dispatch(createProductInCommand(productFormatted));
      case addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND:
        const { listPaniers } = handlePanier.addQuantity(
          createCommand.command.panier,
          product.id,
          quantity
        );
        //
        // addProductInCommand;
        return dispatch(addProductInCommand(listPaniers));
      default:
        console.log("NOP");
        break;
    }
  };
  //

  return (
    <Card className='mainCardShop'>
      <CardMedia className={classes.media} image={imgStore} title='Article' />
      <CardContent>
        <div
          className='isCursor'
          onClick={() => history.push(`/shop/detail-product/${item.id}`)}
        >
          <h2>{substringText(item?.name, 10)} </h2>
          <h3>
            <ShowCategory item={item.category} />
          </h3>
          <h2 className='pice'>
            <span className='btn-event '> $ {item.price} </span>
          </h2>
        </div>
        <div className='description'>
          {substringText(item?.description, 35)}
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <MoreHorizIcon onClick={() => history.push("/actions")} />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={() => handlePanier_(item, 1)}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
