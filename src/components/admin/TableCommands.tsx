import React, { useEffect } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingCustom } from "../widgets/CircularProgress";
import { getAllCommands } from "../../store/actions/command.action";
import { getAllClients } from "../../store/actions/user.action";
import { ShowNameClients } from "./TableProducts";

const TableCommands = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allCommands } = useSelector((state: any) => state.commands);
  const { allClients } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (allCommands.commands.length === 0) dispatch(getAllCommands());
    if (allClients.clients.length === 0) dispatch(getAllClients());
  }, []);

  const columns: string[] = [
    "NUM",
    "NOMS CLIENT",
    "N. TYPES. ARTICLES",
    "PRIX TOTAL $",
    "STATUS",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabProducts'>
      <div className='content-actionsHeader-category'>
        <Button styleBtn={"btnPrimary"} textBtn={"Actualiser"} />
      </div>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allCommands.isLoadingInfo &&
            allCommands?.commands?.map((item: any, key: number) => {
              return (
                <>
                  <WidgetLgTrRows
                    className='isCursor'
                    key={key}
                    onClick={() =>
                      history.push(
                        `/command/detail/${item?.id}/${item?.user_id}`
                      )
                    }
                  >
                    <WidgetTd>{key + 1}</WidgetTd>
                    <WidgetTd>
                      <ShowNameClients client={item.user_id} />
                    </WidgetTd>
                    <WidgetTd>artciles</WidgetTd>
                    <WidgetTd>{item.amount}</WidgetTd>
                    <WidgetTd>{item.status}</WidgetTd>
                    <WidgetTd>
                      {new Date(item.created).toLocaleDateString()}
                    </WidgetTd>
                  </WidgetLgTrRows>
                </>
              );
            })}
        </Table>
        <div>{allCommands.isLoadingInfo && <LoadingCustom />}</div>
      </ContentTable>
    </div>
  );
};
export default TableCommands;
