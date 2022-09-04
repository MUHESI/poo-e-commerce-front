import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import CardShop from "../../components/shop/CardShop";
import { showToast } from "../../components/shared/ToastAlert";
//

import { ContentScrollable } from "../../components/shared/ComponentSrolling";
import { getInfoProduct } from "../../store/actions/product.action";
import { LoadingCustom } from "../../components/widgets/CircularProgress";
import { useParams } from "react-router-dom";
import { getCategories } from "../../store/actions/category.action";
import Button from "../../components/widgets/Button";
import { handlePanier } from "../../services/command/methodsHelper";
import {
  addProductInCommandTypes,
  createProductInCommandTypes
} from "../../store/types/commandTypes";
import {
  addProductInCommand,
  createProductInCommand
} from "../../store/actions/command.action";

function DetailProduct() {
  const dispatch = useDispatch();
  const { id }: any = useParams();
  const { infoProduct } = useSelector((state: any) => state.products);
  const { allCategories } = useSelector((state: any) => state.categories);
  const { createCommand } = useSelector((state: any) => state.commands);

  useEffect(() => {
    if (allCategories.categories.length === 0) dispatch(getCategories());
    if (
      Object.keys(infoProduct.product).length === 0 ||
      infoProduct?.product?.id !== id
    )
      dispatch(getInfoProduct(id));
  }, []);

  const [quantityProduct, setQuantityProduct] = useState<any>(0);

  const handlePanier_ = (product: any, quantity: number) => {
    if (quantityProduct === 0 || isNaN(quantityProduct))
      return showToast({
        message: "Entrer la valeur valide",
        typeToast: "error"
      });
    const productFormatted: any = handlePanier.formateProduct(
      product,
      quantity
    );
    const ACTION = handlePanier.findActionAction(
      createCommand.command.panier,
      productFormatted
    );
    switch (ACTION) {
      case createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND:
        return dispatch(createProductInCommand(productFormatted));
      case addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND:
        const { listPaniers } = handlePanier.remplaceQuantity(
          createCommand.command.panier,
          product.id,
          quantity
        );

        return dispatch(addProductInCommand(listPaniers));
      default:
        console.log("NOP");
        break;
    }
  };

  return (
    <div className='margin-2 detail-shopping'>
      {!infoProduct.isLoadingInfo ? (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <div className='margin-top-2  margin-bottom-2 '>
              <div className='margin-bottom-2 '>
                <CardShop showDetail={true} item={infoProduct.product} />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} xl={8}>
            <ContentScrollable height={540} hideBgColor={false}>
              <div className='margin-top-2  margin-bottom-2  second-party '>
                <h2> AJouter ou augmenter la quantité de ce produit </h2>
                <div className='content-inputs'>
                  <input
                    value={quantityProduct}
                    type='number'
                    onChange={(e: any) =>
                      setQuantityProduct(Number(e.target.value))
                    }
                    placeholder='0'
                  />
                  <Button
                    styleBtn={"btnPrimary"}
                    textBtn={"Ajouter"}
                    onClick={() =>
                      handlePanier_(infoProduct.product, quantityProduct)
                    }
                  />
                </div>
              </div>
            </ContentScrollable>
          </Grid>
        </Grid>
      ) : (
        <LoadingCustom />
      )}
    </div>
  );
}

export default DetailProduct;
