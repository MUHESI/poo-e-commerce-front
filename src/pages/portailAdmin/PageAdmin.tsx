import React from "react";
import ScrollableTabs from "../../navigations/ScrolllableTabs";
import { TableProducts } from "../../components/admin/TableProducts";
import { TableClients } from "../../components/admin/TableClients";
import { TableCategories } from "../../components/admin/TableCategories";
import TableCommands from "../../components/admin/TableCommands";
import { Hidden } from "@material-ui/core";
import AlertComponent from "../../components/shared/AlertComponent";
import { useHistory } from "react-router-dom";

function PageAdmin() {
  const history = useHistory();
  const navigateToHome = () => {
    history.push("/");
  };
  const tabMenu = [
    "G. Clients",
    "G. Produits ",
    "G. Categories",
    "G. COMMANDES"
  ];

  const tabComponents = [
    <TableClients />,
    <TableProducts />,
    <TableCategories />,
    <TableCommands />
  ];

  return (
    <div>
      <Hidden only={["xs"]}>
        <ScrollableTabs tabMenu={tabMenu} tabComponents={tabComponents} />
      </Hidden>
      <div style={{ marginTop: "150px" }}>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <AlertComponent
            textBtn={"Accueil"}
            message="Oups,  ces informations sont adaptées à un écran plus large , veillez changer d' appareil SVP."
            fnAction={navigateToHome}
          />
        </Hidden>
      </div>
    </div>
  );
}

export default PageAdmin;
