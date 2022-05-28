import React from "react";
import PaperDashboard from "../components/widgets/PaperDashboard";
import Button from "../components/widgets/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Home = () => {
  const mainTitle =
    " Nombre des cours dispensés sur le nommbre total des cours ";
  const R_TitleTop = "revenue";
  const R_Title = "$97/100";
  const lIcon = "icon";
  const fIcon = "icon2";
  const typeCard = "green";

  // calc(100% -5px)
  const getUser = () => {
    // console.log("oclik ok :>> ");
    alert("clik ok");
  };

  return (
    <div>
      <div className="">
        <div>MEnu </div>

      </div>
      <div className="margin-2 tab-fiche">
        <div>
          <Button
            styleBtn={"btnSecondary"}
            textBtn={"enregistrer"}
            iconRightBtn={<MailOutlineIcon />}
            // iconLeftBtn={<MailOutlineIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
