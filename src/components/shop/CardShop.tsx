import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import imgStore from "../../assets/img/back3.jpg";
import { showToast } from "../shared/ToastAlert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className='mainCardShop'>
      <CardMedia className={classes.media} image={imgStore} title='Article' />
      <CardContent>
        <div
          className='isCursor'
          onClick={() => history.push("/shop/shopping/65787")}
        >
          <h2> Samsung S8 </h2>
          <h3> categorie </h3>
          <h2 className='pice'>
            <span className='btn-event '> $ 150 </span>
          </h2>
        </div>
        <div className='description'>
          This impressive paella is a perfect party dish and a fun
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
          // onClick={handleExpandClick }
          onClick={() =>
            showToast({
              message: "Article added to your pocket",
              typeToast: "dark"
            })
          }
          aria-expanded={expanded}
          aria-label='show more'
        >
          <AddShoppingCartIcon />

          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
  );
}
