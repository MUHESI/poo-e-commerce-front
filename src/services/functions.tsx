import React from "react";
import { showToast } from "../components/shared/ToastAlert";
import { IPanier } from "../store/types/commandTypes";

export const substringText = (text: string, nbMax: number): string => {
  if (text && text.length > nbMax) {
    return `${text.substring(0, nbMax)}... `;
  }
  return text;
};

export const SubstringTextComp = (text: string, nbMax: number) => {
  if (text && text.length > nbMax) {
    return <span title={text}>{`${text.substring(0, nbMax)}... `} </span>;
  }
  return text;
};

export const getSumOfPriceArticles = (articles: IPanier[]) => {
  let amountTot = 0;
  articles.map((art: IPanier) => {
    amountTot = art.total + amountTot;
  });
  return amountTot;
};

export const getSumOfPriceforDetailCommand = (articles: any[]) => {
  let amountTot = 0;
  articles.map((art: any) => {
    amountTot = art.price + amountTot;
  });
  return amountTot;
};

export const featureNoSupported = () => {
  showToast({
    message: "Désolé cette fonctionalite n'est pas pris en charge.",
    typeToast: "info"
  });
};
