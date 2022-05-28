import React, { useEffect, useState } from "react";
import background from "../../assets/img/back2.jpg";
import backgElectro from "../../assets/img/back3.jpg";
import user from "../../assets/img/user.png";
import Button from "../../components/widgets/Button";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Grid } from "@material-ui/core";
import CardDetailBlog from "../../components/blog/CardDetailBlog";
import GroupAvatarsUserCommented, {
  Comments,
} from "../../components/blog/Comments";
import AddCommentForm from "../../components/blog/AddCommentForm";

export default function DetailBlog() {
  const [number, setNumber] = useState(1);
  const tabImgs = [background, backgElectro];

  useEffect(() => {
    const n = Math.random();
    if (n > 0.5) setNumber(0);
    else setNumber(1);
  }, []);
  const nbComent = 40;

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} xl={2}></Grid>

        <Grid item xs={12} sm={12} md={8} xl={8}>
          <div className="margin-2">
            <CardDetailBlog />
          </div>
          <div className="margin-2">
            <AddCommentForm />
          </div>
          <div className="margin-2">
            <Comments />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} xl={2}></Grid>
      </Grid>
    </div>
  );
}
