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
import { showToast } from "../../components/shared/ToastAlert";
function HomeBlog() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(menuAction("BLOG"));
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
    <div>
      <div className="">
        <Carousel />
      </div>
      {/* <div className="ContainerCards">cards</div> */}
      <div className="margin-2 ">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={8} xl={8}>
            <div className="margin-top-2  margin-bottom-2 ">
              <Categories />
            </div>
            <div>
              {[4, 5, 9].map((item) => (
                <div className="margin-bottom-2 ">
                  <CardsBlog />
                </div>
              ))}
            </div>
            <div>
              <PaginationToExport
                pagination={dataPagination}
                switchPage={getOtherPage}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <div className="margin-top-2  margin-bottom-2 ">
              <RelatedPost />
            </div>
            <div className="margin-top-2  margin-bottom-2 ">
              <SubheaderCategories />
            </div>

            <div className="ContainerPagination"> </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeBlog;
