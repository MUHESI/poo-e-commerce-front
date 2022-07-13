import React, { useState } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { IPanier, createCommandTypes } from "../../store/types/commandTypes";
import { Grid } from "@material-ui/core";
import CardProfileClient from "./CardProfileClient";
import SignIn from "../../pages/SignIn";
import { postAPI } from "../utils/FetchData";
import { showToast } from "../shared/ToastAlert";
import { getSumOfPriceArticles } from "../../services/functions";
import { askSession } from "../../context/AppContext";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const TablePaniers = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { createCommand } = useSelector((state: any) => state.commands);
  const [isLoadingIfonCammand, setIsLoadingIfonCammand] = useState(false);
  const { logged, user } = askSession();

  const columns: string[] = [
    "NUM",
    "NOMS PRODUITS",
    "QUNATITE",
    "PRIX UNIT. $",
    "PRIX TOTAL $",
    "DATE ENREGIST."
  ];
  const formatePaniers = (panier_: IPanier[]) => {
    let tabPaniers: any = [];
    panier_.map((item: IPanier) => {
      const p = {
        // commande_id:
        price: item.total,
        quantity: item.quantity,
        product_id: item.product,
        options: "DEFAULT"
      };

      tabPaniers.push(p);
    });
    console.clear();
    console.log("tabPaniers :>> ", tabPaniers);
    return tabPaniers;
  };

  const confirmCommand = async () => {
    if (!logged)
      return showToast({
        message: "Veillez d'abord vous connecter. ",
        typeToast: "dark"
      });

    if (createCommand?.command?.panier.length === 0) {
      showToast({
        message: "Veillez créer d'abord  votre commande. ",
        typeToast: "dark",
        autoClose: false
      });
      return history.push("/");
    }

    let command = {
      ...createCommand.command,
      amount: getSumOfPriceArticles(createCommand?.command?.panier),
      user_id: user.id,
      panier: formatePaniers(createCommand.command.panier),
      status: 1
    };
    try {
      setIsLoadingIfonCammand(true);
      const { data } = await postAPI("command/create/", { ...command });
      if (data.results.success) {
        dispatch({
          type: createCommandTypes.SET_CREATE_COMMAND
        });
        showToast({
          message: "Votre commande a été enregistré avec succes ",
          typeToast: "success"
        });
      }
      setIsLoadingIfonCammand(false);
      return history.push("/");
    } catch (error: any) {
      setIsLoadingIfonCammand(true);
      const { response } = error;
      showToast({
        message: `${response.data.error || "Oops, Une erreur est survenu"}`,
        typeToast: "error"
      });
    }
  };

  return (
    <div className='maiTabProducts margin-2 '>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          {logged ? (
            <CardProfileClient client={user} isLoadingInfo={false} />
          ) : (
            <>
              <h2> Vous n'etes pas connectés </h2>
              <SignIn height={"85vh"} />
            </>
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={8} xl={8}>
          <h2>Listes des articles passés en commande </h2>
          <div className='margin-2 '>
            <ContentTable>
              <Table>
                <ColumnsTable columns={columns} />
                {createCommand?.command?.panier?.map(
                  (item: IPanier, key: number) => (
                    <WidgetLgTrRows key={key}>
                      <WidgetTd>{key + 1}</WidgetTd>
                      <WidgetTd>{item.nameProduct}</WidgetTd>
                      <WidgetTd>{item.quantity}</WidgetTd>
                      <WidgetTd>{item.priceUnit}</WidgetTd>
                      <WidgetTd>{item.total}</WidgetTd>
                      <WidgetTd>{new Date().toLocaleDateString()}</WidgetTd>
                    </WidgetLgTrRows>
                  )
                )}
              </Table>
              <div className='right'>
                <strong>
                  total: {getSumOfPriceArticles(createCommand?.command?.panier)}
                </strong>
              </div>
            </ContentTable>
            <div className='content-actions'>
              <div>
                <Button
                  styleBtn={"btnPrimary"}
                  textBtn={"Confirmer la commande"}
                  actionTo={() => confirmCommand()}
                  isLoadingInfo={isLoadingIfonCammand}
                  iconRightBtn={<ShoppingCartIcon />}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TablePaniers;
