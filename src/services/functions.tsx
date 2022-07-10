import React from "react";

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
