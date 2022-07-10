import React from "react";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -5,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 0px"
    }
  })
)(Badge);

//

export default function ShoppingBadges({ length }: any) {
  return (
    <IconButton aria-label='cart' style={{ margin: 0, padding: 0 }}>
      <StyledBadge badgeContent={length} color='secondary'>
        <span style={{ color: `${length !== 0 ? "white" : "black"} ` }}>
          <ShoppingCartIcon />
        </span>
      </StyledBadge>
    </IconButton>
  );
}
