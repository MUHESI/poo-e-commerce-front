import { Dispatch } from "redux";

export const menuAction = (menu: string) => (dispatch: any) => {
  const BLOG = "BLOG";
  const SHOP = "SHOP";
  const PORTAIL = "PORTAIL";

  switch (menu) {
    case BLOG:
      dispatch({
        type: "menu",
        payload: {
          menu: BLOG
        }
      });
      break;
    case SHOP:
      dispatch({
        type: "menu",
        payload: {
          menu: SHOP
        }
      });
      break;
    case PORTAIL:
      dispatch({
        type: "menu",
        payload: {
          menu: PORTAIL
        }
      });
      break;

    default:
      console.log("any thing found  ");
  }
};
