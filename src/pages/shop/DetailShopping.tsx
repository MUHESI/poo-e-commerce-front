import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { AppBar } from "../../navigations/AppBar";
import { useDispatch } from "react-redux";
import { menuAction } from "../../store/actions/menuAction";
import { useSelector } from "react-redux";

import Carousel from "../../components/widgets/Carousel";
import Categories from "../../components/widgets/Categorie";
import CardsBlog from "../../components/widgets/CardsBlog";
import { PaginationToExport } from "../../components/widgets/PaginationToExport";
import RelatedPost, {
  SubheaderCategories,
} from "../../components/widgets/RelatedPost";
import CardShop from "../../components/shop/CardShop";
import TableShopping from "../../components/shop/TableShopping";
import { showToast } from "../../components/shared/ToastAlert";

function HomeShop() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(menuAction("SHOP"));
  }, []);

  const LIMIT = 5;

  const getOtherPage = (page: number) => {
    // dispatch(getPatientPaginated(user.entite, page, LIMIT));
    showToast({
      message: "pagination must be  connected to backend ",
      typeToast: "dark",
    });
  };
  const dataPagination = {
    limit: 4,
    previous: 3,
    page: 5,
    next: 5,
    nbOfPages: 5,
  };

  return (
    <div className="margin-2">
      <TableShopping />
    </div>
  );
}

export default HomeShop;
