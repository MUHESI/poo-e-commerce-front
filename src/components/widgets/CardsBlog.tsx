import React, { useEffect, useState } from "react";
import background from "../../assets/img/back2.jpg";
import backgElectro from "../../assets/img/back3.jpg";
import user from "../../assets/img/user.png";
import Button from "./Button";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { useHistory } from "react-router-dom";

export default function CardsBlog() {
  const [number, setNumber] = useState(1);

  const tabImgs = [background, backgElectro];
  const history = useHistory();
  useEffect(() => {
    const n = Math.random();
    if (n > 0.5) setNumber(0);
    else setNumber(1);
  }, []);
  const nbComent = 40;

  return (
    <div className="containerCards">
      <div
        className="container-img"
        style={{
          background: `url(${tabImgs[number]}) center/cover`,
        }}
      ></div>
      <div className="content-text">
        <h2>
          Supplemental actions within the card are explicitly the card are
          explicitly the card are explicitly
        </h2>
        <div className="context-info">
          <p className="postedBy isCursor">
            <img src={user} alt="user" />
            <span className=" isCursor">Muhesi Moses</span>
          </p>
          <p className="date">
            <ScheduleIcon style={{ fontSize: 40 }} />
            <span> 04/15/2021 </span>
          </p>
        </div>
        <div className="context-body">
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
          over medium-high heat. Add chicken, and cook, stirring occasionally
          until lightly browned, 6 to 8 minutes.
        </div>
        <div className="context-actions">
          <Button
            textBtn="Read more"
            // display="block"
            styleBtn={"btnPrimary"}
            actionTo={() => history.push("/blog/detail/45665")}
          />
        </div>
        <div
          className="content-comments isCursor"
          onClick={() => history.push("/blog/detail/45665")}
        >
          {nbComent} comments
        </div>
      </div>
    </div>
  );
}
