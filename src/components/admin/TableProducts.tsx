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

export const TableProducts = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: any) => state.products);
  const { allCategories } = useSelector((state: any) => state.categories);

  useEffect(() => {
    if (allCategories.categories.length === 0) dispatch(getCategories());
    if (allProducts.products.length === 0) dispatch(getAllProducts());
  }, []);

  const columns: string[] = [
    "NUM",
    "NOMS PRODUCIS",
    "REMISE",
    "PRIX UNIT ",
    "CATEGORIE",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabProducts'>
      <div className='content-actionsHeader-category'>
        <select
          className=''
          onChange={(e: any) => {
            if (e.target.value === "ALL") return dispatch(getAllProducts());
            dispatch(getProductsByCategory(parseInt(e.target.value)));
          }}
        >
          <option value='ALL'>
            {`${
              allCategories.isLoadingInfo ? "Chargement..." : "Toutes categ."
            }`}
          </option>
          {allCategories?.categories?.map((item: any, key: number) => (
            <option value={item?.id} key={key}>
              {item?.libelle}
            </option>
          ))}
        </select>
        <Button
          styleBtn={"btnPrimary"}
          textBtn={"Creer un produit"}
          actionTo={() => history.push("/product/create")}
        />
      </div>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allProducts.isLoadingInfo &&
            allProducts?.products?.map((item: any, key: number) => (
              <WidgetLgTrRows key={key}>
                <WidgetTd>{key + 1}</WidgetTd>
                <WidgetTd>{item.name}</WidgetTd>
                <WidgetTd>{item.remise || "No défini"}</WidgetTd>
                <WidgetTd>{item.price}</WidgetTd>
                <WidgetTd>
                  <ShowCategory item={item.category} />
                </WidgetTd>
                <WidgetTd>
                  {new Date(item.created).toLocaleDateString()}
                </WidgetTd>
              </WidgetLgTrRows>
            ))}
        </Table>
        <div>{allProducts.isLoadingInfo && <LoadingCustom />}</div>
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button
            styleBtn={"btnPrimary"}
            textBtn={"Creer un produit"}
            actionTo={() => history.push("/product/create")}
          />
        </div>
      </div>
    </div>
  );
};

export function ShowCategory({ category }: any) {
  const { allCategories } = useSelector((state: any) => state.categories);

  return (
    <>
      {allCategories?.categories?.map((cat: any) => (
        <>
          {cat.id === category ? (
            <span>{cat.libelle || "-"} </span>
          ) : (
            <span>No défini</span>
          )}
        </>
      ))}
    </>
  );
}

export default TableProducts;
export function ShowNameClients({ client }: any) {
  const { allClients } = useSelector((state: any) => state.users);

  return (
    <>
      {allClients?.clients?.map((item: any) => (
        <>
          {item.id === client ? (
            <span>{`${item.name || ""} ${item.lastname || "--"}`} </span>
          ) : (
            <span>-</span>
          )}
        </>
      ))}
    </>
  );
}

export function ShowNameProducts({ prod }: any) {
  const { allProducts } = useSelector((state: any) => state.products);

  return (
    <>
      {allProducts?.products?.map((item: any) => (
        <>
          {item.id === prod ? (
            <span>{`${item.name || "--"} `} </span>
          ) : (
            <span>-</span>
          )}
        </>
      ))}
    </>
  );
}
