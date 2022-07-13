import React, { useEffect } from "react";

import Button from "../../components/widgets/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  WidgetTd,
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows
} from "../../components/widgets/TableCustom";
import { LoadingCustom } from "../../components/widgets/CircularProgress";
import { Grid } from "@material-ui/core";
import CardProfileClient from "../../components/client/CardProfileClient";
import { getInfoClient } from "../../store/actions/user.action";
import {
  featureNoSupported,
  getSumOfPriceforDetailCommand
} from "../../services/functions";
import { TAB_ADMIN } from "../../components/porfolio/constants";
import { getPanierByCommand } from "../../store/actions/panier.action";

export const DetailCommand = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allPaniersByCommand } = useSelector((state: any) => state.paniers);
  const { currentClient } = useSelector((state: any) => state.users);
  const { idCommand, idClient }: any = useParams();

  useEffect(() => {
    if (
      Object.keys(currentClient.client).length === 0 ||
      currentClient.client.id !== idClient
    ) {
      dispatch(getInfoClient(idClient));
    }
    dispatch(getPanierByCommand(idCommand));
  }, []);

  const columns: string[] = [
    "NUM",
    " ID. ARTICLES",
    "OPTIONS",
    "QUANTITE",
    "PRIX TOTAL $",
    "DATE ENREGIST."
  ];

  return (
    <div className='margin-2'>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <CardProfileClient client={currentClient.client} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} xl={8}>
          <div className='maiTabProducts'>
            <div className='content-actionsHeader-category'>
              <Button
                styleBtn={"btnPrimary"}
                textBtn={"Actualiser"}
                actionTo={() => featureNoSupported()}
              />
            </div>
            <ContentTable>
              <Table>
                <ColumnsTable columns={columns} />
                {!allPaniersByCommand.isLoadingInfo &&
                  allPaniersByCommand?.paniers?.map(
                    (item: any, key: number) => (
                      <WidgetLgTrRows key={key}>
                        <WidgetTd>{key + 1}</WidgetTd>
                        <WidgetTd>{item.product_id}</WidgetTd>
                        <WidgetTd>{item.options}</WidgetTd>
                        <WidgetTd>{item.quantity}</WidgetTd>
                        <WidgetTd>{item.price}</WidgetTd>
                        <WidgetTd>
                          {new Date(item?.created).toLocaleDateString()}
                        </WidgetTd>
                      </WidgetLgTrRows>
                    )
                  )}
              </Table>
              <div className='right margin-top-2'>
                <strong>
                  total:{" "}
                  {getSumOfPriceforDetailCommand(allPaniersByCommand?.paniers)}
                </strong>
              </div>
              <div>
                {allPaniersByCommand.isLoadingInfo && <LoadingCustom />}
              </div>
            </ContentTable>
            <div className='content-actions'>
              <div>
                <Button
                  styleBtn={"btnPrimary"}
                  textBtn={"Retour"}
                  actionTo={() => history.push(`/admin/${TAB_ADMIN.COMMANDS}`)}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
