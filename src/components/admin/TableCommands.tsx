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
import {
  getAllProducts,
  getProductsByCategory
} from "../../store/actions/product.action";
import { LoadingCustom } from "../widgets/CircularProgress";
import { getCategories } from "../../store/actions/category.action";
import { getAllCommands } from "../../store/actions/command.action";
import { useParams } from "react-router-dom";
import { IPanier } from "../../store/types/commandTypes";
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
        <Button
          styleBtn={"btnPrimary"}
          textBtn={"Actualiser"}
          //   actionTo={() => dispatch(getAllCommands())}
        />
      </div>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allCommands.isLoadingInfo &&
            allCommands?.commands?.map((item: any, key: number) => {
              try {
                // console.log("");
              } catch (error) {
                console.log("error :>> ", error);
              }

              return (
                <>
                  {/* {item.length} */}
                  <WidgetLgTrRows
                    //   title="cliequer pour v"
                    className='isCursor'
                    key={key}
                    onClick={() =>
                      history.push(
                        `/command/detail/${item?.id}/${item?.user_id}`
                      )
                    }
                  >
                    <WidgetTd>{key + 1}</WidgetTd>
                    {/* <WidgetTd>{item.user?.name || "--"}</WidgetTd> */}
                    <WidgetTd>
                      <ShowNameClients client={item.user_id} />
                    </WidgetTd>
                    <WidgetTd>
                      {/* {(item.panier && JSON.parse(item.panier).length) || ""} */}
                      artciles
                      {/* {item?.panier !== null && item?.panier} */}
                      {/* */}
                    </WidgetTd>
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
      {/*   <div className='content-actions'>
        <div>
          <Button
            styleBtn={"btnPrimary"}
            textBtn={"Creer un produit"}
            actionTo={() => history.push("/retour")}
          />
        </div>
      </div> */}
    </div>
  );
};
export default TableCommands;
