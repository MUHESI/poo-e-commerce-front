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
import { IPanier } from "../../store/types/commandTypes";

const TablePaniers = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { createCommand } = useSelector((state: any) => state.commands);

  useEffect(() => {
    // dispatch(getAllProducts());
    // if (allCategories.categories.length === 0) dispatch(getCategories());
    // if (allProducts.products.length === 0) dispatch(getAllProducts());
    console.clear();
    console.log("createCommand  w :>> ", createCommand);
  }, []);

  const columns: string[] = [
    "NUM",
    "NOMS PRODUCIS",
    "QUNATITE",
    "PRIX UNIT. $",
    "PRIX TOTAL $",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabProducts'>
      <div className='content-actionsHeader-category'>
        <Button
          styleBtn={"btnPrimary"}
          textBtn={"Creer un produit"}
          actionTo={() => history.push("/product/create")}
        />
      </div>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {createCommand?.command?.panier?.map((item: IPanier, key: number) => (
            <WidgetLgTrRows key={key}>
              <WidgetTd>{key + 1}</WidgetTd>
              <WidgetTd>{item.nameProduct}</WidgetTd>
              <WidgetTd>{item.quantity}</WidgetTd>
              <WidgetTd>{item.priceUnit}</WidgetTd>
              <WidgetTd>{item.total}</WidgetTd>
              <WidgetTd>{new Date().toLocaleDateString()}</WidgetTd>
            </WidgetLgTrRows>
          ))}
        </Table>
        total:
        {/* <div>{allProducts.isLoadingInfo && <LoadingCustom />}</div> */}
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button
            styleBtn={"btnPrimary"}
            textBtn={"Creer un produit"}
            // actionTo={() => history.push("/product/create")}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePaniers;
