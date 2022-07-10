import {
  addProductInCommandTypes,
  createProductInCommandTypes,
  IPanier
} from "../../store/types/commandTypes";

export const handlePanier = {
  findActionAction: (allPanier: any, product: any) => {
    if (allPanier.length === 0)
      return createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND;
    const paniers = allPanier.filter(
      (item: any) => item.product === product.product
    );
    if (paniers.length === 0)
      return createProductInCommandTypes.SET_CREATE_PRODUCT_IN_COMMAND;
    if (paniers.length > 0)
      return addProductInCommandTypes.SET_ADD_PRODUCT_IN_COMMAND;
  },
  formateProduct: (product: any, quantity: number) => {
    return {
      nameProduct: product?.name || "",
      product: product.id,
      options: "DEFAULT_OPTION",
      quantity: Number(quantity),
      priceUnit: Number(product.price),
      total: Number(product.price * quantity)
    };
  },

  addQuantity: (paniers: IPanier[], idProduct: number, quantity: number) => {
    const listPaniers = [...paniers];
    let prod: IPanier | any = {};
    for (var index in listPaniers) {
      if (listPaniers[index].product === idProduct) {
        const p: IPanier = listPaniers[index];
        prod = {
          ...p,
          quantity: p.quantity + quantity,
          total: Number((p.quantity + quantity) * p.priceUnit)
        };
        listPaniers[index] = prod;
        break;
      }
    }
    return { listPaniers, prod };
  },
  remplaceQuantity: (
    paniers: IPanier[],
    idProduct: number,
    quantity: number
  ) => {
    const listPaniers = [...paniers];
    let prod: IPanier | any = {};
    for (var index in listPaniers) {
      if (listPaniers[index].product === idProduct) {
        const p: IPanier = listPaniers[index];
        prod = {
          ...p,
          quantity: quantity,
          total: Number(quantity * p.priceUnit)
        };
        listPaniers[index] = prod;
        break;
      }
    }
    return { listPaniers, prod };
  }
};
