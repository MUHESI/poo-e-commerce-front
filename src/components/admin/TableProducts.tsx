import React from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd,
  WidgetTdUser,
  TextUser,
  ImgUser,
  img
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import AddIcon from "@material-ui/icons/Add";

export const TableProducts = () => {
  const products = [
    {
      name: "Article1",
      quantity: 22,
      category: "CAT_2",
      price: 20
    },
    {
      name: "Article1",
      quantity: 22,
      category: "CAT_2",
      price: 20
    },
    {
      name: "Article1",
      quantity: 22,
      category: "CAT_2",
      price: 20
    }
  ];
  const columns: string[] = [
    "NUM",
    "NOMS PRODUCIS",
    "UNITE ",
    "PRIX UNIT ",
    "CATEGORIE",
    "DATE ENREGIST."
  ];
  const categories = [
    {
      libelle: "Catg1",
      description: "ZE344"
    },
    {
      libelle: "Catg3",
      description: "ZE344"
    },
    {
      libelle: "Catg2",
      description: "ZE344"
    }
  ];

  return (
    <div className='maiTabProducts'>
      <div className='content-actionsHeader-category'>
        <select
          className=''
          // onChange={handleChangeSchoolLevel}
          // value={formData.schoolLevel}
        >
          <option value=''> Toutes categ. </option>
          {categories.map((item: any, key: number) => (
            <option value={item?.libelle} key={key}>
              {item?.libelle}
            </option>
          ))}
        </select>
      </div>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {products.map((item: any, key: number) => (
            <WidgetLgTrRows key={key}>
              <WidgetTd>{key + 1}</WidgetTd>
              <WidgetTd>{item.name}</WidgetTd>
              <WidgetTd>{item.unity || ""}</WidgetTd>
              <WidgetTd>{item.category}</WidgetTd>
              <WidgetTd>{item.price}</WidgetTd>
              <WidgetTd>{item.price}</WidgetTd>
              {/* <WidgetTd bgColor={"#3bb077"}> NON </WidgetTd> */}
            </WidgetLgTrRows>
          ))}
        </Table>
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button
            styleBtn={"btnPrimaryGradient"}
            textBtn={"Ajouter"}
            // iconRightBtn={<AddIcon />}
            // iconLeftBtn={<MailOutlineIcon />}
          />
        </div>
      </div>
    </div>
  );
};
