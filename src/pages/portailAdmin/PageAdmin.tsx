import React from "react";
import ScrollableTabs from "../../navigations/ScrolllableTabs";
import { TableProducts } from "../../components/admin/TableProducts";
import { TableClients } from "../../components/admin/TableClients";
import { TableCategories } from "../../components/admin/TableCategories";

function PageAdmin() {
  const tabMenu = ["G. Clients", "G. Produits ", "G. Categories"];
  const tabComponents = [
    <TableClients />,
    <TableProducts />,
    <TableCategories />
  ];

  return (
    <div>
      <ScrollableTabs tabMenu={tabMenu} tabComponents={tabComponents} />
    </div>
  );
}

export default PageAdmin;
