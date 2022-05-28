import React from "react";
import ScrollableTabs from "../../navigations/ScrolllableTabs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ManageDataPorfolio from "../../components/admin/porfolio/index";

function PageAdmin() {
  const tabMenu = [
    {
      label: "Control User",
      icon: <FavoriteIcon />,
    },
    {
      label: "Porfolio",
      icon: <FavoriteIcon />,
    },
    {
      label: "Autres",
      icon: <FavoriteIcon />,
    },
  ];
  const tabComponents = [<ManageDataPorfolio />, <ManageDataPorfolio />];

  return (
    <div>
      <ScrollableTabs tabMenu={tabMenu} tabComponents={tabComponents} />
    </div>
  );
}

export default PageAdmin;
