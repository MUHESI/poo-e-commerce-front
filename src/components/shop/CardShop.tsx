import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import imgStore from "../../assets/img/back3.jpg";
// import rangeRover2 from "../../assets/cars/rangeRover2.jpg";
//
import rangeRover1 from "../../assets/cars/rangeRover1.jpg";
import rangeRover2 from "../../assets/cars/rangeRover2.jpg";
import rangeRover3 from "../../assets/cars/rangeRover3.jpg";
import rangeRover4 from "../../assets/cars/rangeRover4.jpg";
//
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

const imgs = [
  rangeRover1,
  rangeRover2,
  rangeRover3,
  rangeRover4,
  rangeRover2,
  rangeRover1,
  rangeRover3,
  rangeRover4,
  rangeRover1,
  rangeRover4
];

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

export default function RecipeReviewCard({ showDetail, item, index }: any) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { createCommand } = useSelector((state: any) => state.commands);

  const [expanded] = React.useState(false);
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
        return dispatch(addProductInCommand(listPaniers));
      default:
        console.log("NOP");
        break;
    }
  };
  //

  return (
    <Card className='mainCardShop'>
      <CardMedia
        className={`${classes.media} isCursor`}
        image={index < imgs.length ? imgs[index] : rangeRover3}
        title='Article'
        onClick={() => history.push(`/shop/detail-product/${item.id}`)}
      />
      <CardContent>
        <div
          className='isCursor'
          onClick={() => history.push(`/shop/detail-product/${item.id}`)}
        >
          <h2> {showDetail ? item?.name : substringText(item?.name, 20)} </h2>
          <h3>category: {item.category}</h3>
          <h2 className='pice'>
            <span className='btn-event '> $ {item.price} </span>
          </h2>

          <div className='description'>
            {showDetail
              ? item?.description
              : substringText(item?.description, 50)}
          </div>
        </div>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <MoreHorizIcon
            onClick={() => history.push(`/shop/detail-product/${item.id}`)}
          />
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
