import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Categories from "../../components/widgets/Categorie";
import { PaginationToExport } from "../../components/widgets/PaginationToExport";
import { SubheaderCategories } from "../../components/widgets/RelatedPost";
import CardShop from "../../components/shop/CardShop";
import { ContentScrollable } from "../../components/shared/ComponentSrolling";
import { getAllProducts } from "../../store/actions/product.action";
import { getCategories } from "../../store/actions/category.action";
import { LoadingCustom } from "../../components/widgets/CircularProgress";
import AlertComponent from "../../components/shared/AlertComponent";

function HomeShop() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: any) => state.products);
  const { allCategories } = useSelector((state: any) => state.categories);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    if (allProducts.products.length === 0) dispatch(getAllProducts());
    if (allCategories.categories.length === 0) dispatch(getCategories());
  }, [random]);

  const dataPagination = {
    limit: 4,
    previous: 3,
    page: 5,
    next: 5,
    nbOfPages: 5
  };
  const reload = () => {
    setRandom(Math.random());
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

              {!allProducts.isLoadingInfo && allProducts.products.length === 0 && (
                <div>
                  <AlertComponent
                    message={
                      "Oops , nous n avons pas rétrouvé les données. Assurez vous que vous etes connéctez. c est possible que ces donnees n existent pas dans la base des données."
                    }
                    fnAction={reload}
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
