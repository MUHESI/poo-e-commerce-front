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

export const TableClients = () => {
  const users = [
    {
      role: 2,
      name: "MOSES",
      lastname: "Serge",
      email: "moses.test@gmail.com",
      phone: "09987887883"
    },
    {
      role: 1,
      name: "MOSES",
      lastname: "Serge",
      email: "moses.test@gmail.com",
      phone: "09987887883"
    },
    {
      role: 1,
      name: "MOSES",
      lastname: "Serge",
      email: "moses.test@gmail.com",
      phone: "09987887883"
    }
  ];
  const columns: string[] = [
    "NUM",
    "NOMS",
    "EMAIL",
    "ROLE",
    "PHONE",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabClients'>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {users.map((item: any, key: number) => (
            <WidgetLgTrRows key={key}>
              <WidgetTd>{key + 1}</WidgetTd>{" "}
              <WidgetTd>{`${item.name} ${item.lastname}`}</WidgetTd>
              <WidgetTd>{item.email}</WidgetTd>
              <WidgetTd>{item.phone}</WidgetTd>
              <WidgetTd>{item.role}</WidgetTd>
              <WidgetTd>{"14/05/2020"}</WidgetTd>
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
