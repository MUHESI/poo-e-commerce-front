import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { menuAction } from "../../store/actions/menuAction";
import { useSelector } from "react-redux";
import Carousel from "../../components/widgets/Carousel";
import Categories from "../../components/widgets/Categorie";
import { PaginationToExport } from "../../components/widgets/PaginationToExport";
import { SubheaderCategories } from "../../components/widgets/RelatedPost";
import CardShop from "../../components/shop/CardShop";
import { showToast } from "../../components/shared/ToastAlert";
import { ContentScrollable } from "../../components/shared/ComponentSrolling";
import { getAllProducts } from "../../store/actions/product.action";
import { getCategories } from "../../store/actions/category.action";
import { LoadingCustom } from "../../components/widgets/CircularProgress";

function HomeShop() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: any) => state.products);
  const { allCategories } = useSelector((state: any) => state.categories);

  useEffect(() => {
    dispatch(menuAction("SHOP"));
    if (allProducts.products.length === 0) dispatch(getAllProducts());
    if (allCategories.categories.length === 0) dispatch(getCategories());

    console.clear();
    console.log("allProducts.products >", allProducts.products);
    console.log(
      "allProducts.products.currentCategory :>> ",
      allProducts.currentCategory
    );
  }, []);

  const LIMIT = 5;

  const getOtherPage = (page: number) => {
    // dispatch(getPatientPaginated(user.entite, page, LIMIT));
    showToast({
      message: "pagination must be  connected to backend ",
      typeToast: "dark"
    });
  };
  const dataPagination = {
    limit: 4,
    previous: 3,
    page: 5,
    next: 5,
    nbOfPages: 5
  };

  return (
    <div>
      <div className='margin-2 '>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <div className='margin-top-2  margin-bottom-2 '>
              <SubheaderCategories />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} xl={8}>
            <ContentScrollable height={540} hideBgColor={false}>
              <div className='margin-top-2  margin-bottom-2 '>
                <Categories category={allProducts.currentCategory} />
              </div>
              <div>
                <Grid container spacing={2}>
                  {!allProducts.isLoadingInfo &&
                    allProducts.products.map((item: any, key: number) => (
                      <Grid item xs={12} sm={6} md={4} xl={4} key={key}>
                        <div className='margin-bottom-2 '>
                          <CardShop item={item} />
                        </div>
                      </Grid>
                    ))}
                </Grid>
              </div>
              <div>{allProducts.isLoadingInfo && <LoadingCustom />}</div>

              {!allProducts.isLoadingInfo && (
                <div>
                  <PaginationToExport
                    pagination={dataPagination}
                    switchPage={getOtherPage}
                  />
                </div>
              )}
            </ContentScrollable>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeShop;
