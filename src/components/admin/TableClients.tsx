import React, { useEffect } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../../store/actions/user.action";
import { LoadingCustom } from "../widgets/CircularProgress";

export const TableClients = () => {
  const dispatch = useDispatch();
  const { allClients } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (allClients.clients.length === 0) dispatch(getAllClients());
  }, []);
  const columns: string[] = ["NUM", "NOMS", "EMAIL", "PHONE", "DATE ENREGIST."];

  return (
    <div className='maiTabClients'>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allClients.isLoadingInfo &&
            allClients?.clients?.map((item: any, key: number) => (
              <WidgetLgTrRows key={key}>
                <WidgetTd>{key + 1}</WidgetTd>{" "}
                <WidgetTd>{`${item.name} ${item.lastname}`}</WidgetTd>
                <WidgetTd>{item.email}</WidgetTd>
                <WidgetTd>{item.phone}</WidgetTd>
                <WidgetTd>
                  {new Date(item.created).toLocaleDateString()}
                </WidgetTd>
              </WidgetLgTrRows>
            ))}
        </Table>
        <div>{allClients.isLoadingInfo && <LoadingCustom />}</div>
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button styleBtn={"btnPrimaryGradient"} textBtn={"Ajouter"} />
        </div>
      </div>
    </div>
  );
};
