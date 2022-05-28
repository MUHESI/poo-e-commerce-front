import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export const PaginationToExport = ({ pagination, switchPage }: any) => {
  const clPagination = useStylesPagination();

  const tabNbPage = new Array(pagination.nbOfPages || 1).fill(0);

  /*°°°°°°°°° pagination °°°°°°°°° */
  const currentPage = pagination.next
    ? pagination.next - 1
    : pagination.previous + 1;

  // limit: 5;
  // nbOfDocs: 7;
  // nbOfPages: 2;
  // next: 2;

  return (
    <div className={clPagination.container}>
      <h1 style={{ color: "#767676" }}>
        Nombre des pages : {pagination.nbOfPages || 1}
      </h1>
      {/* {pagination.previous && (
        <button
          className={clPagination.chevronPagination}
          onClick={() => {
            switchPage(pagination.previous);
          }}
        >
          <ChevronLeftIcon />
        </button>
      )} */}

      {tabNbPage.map((nbpage, id) => (
        <button
          onClick={() => {
            switchPage(id + 1);
          }}
          className={
            currentPage === id + 1
              ? clPagination.currentPage
              : clPagination.unCurrentPage
          }
          key={id}
        >
          {id + 1}
        </button>
      ))}
      {/* {pagination.next && (
        <button
          className={clPagination.chevronPagination}
          onClick={() => {
            switchPage(pagination.next);
          }}
        >
          <ChevronRightIcon />
        </button>
      )} */}
    </div>
  );
};
const greenColor = "black";
const primaryColor = "#39245f;";
const whiteColor = "#F7F6FF";

const useStylesPagination = makeStyles((theme) =>
  createStyles({
    container: {
      textAlign: "center",
      "& h1": {
        color: greenColor,
        fontSize: "1em",
        fontWeight: "bold",
      },
    },

    CardContent: {
      margin: 5,
      padding: 2,
      textAlign: "justify",
      cursor: "pointer",
      marginLeft: "45px",
      marginRight: "45px",
      "&:hover": {
        // backgroundColor: "#e8e6e9",
      },
    },
    chevronPagination: {
      tarnsition: "0.4s",
      textAlign: "center",
      margin: "5px",
      padding: "5px",
      height: "30px",
      width: "30px",
      color: "black",
      border: "none",
      borderRadius: "50%",

      backgroundColor: whiteColor,
      "&:hover": {
        borderRadius: "50%",
        tarnsition: "0.2s",
        border: `2px solid ${primaryColor}`,
      },
    },
    unCurrentPage: {
      tarnsition: "0.4s",
      textAlign: "center",
      margin: "5px",
      height: "30px",
      width: "30px",
      padding: "5px",

      borderRadius: "50%",
      //
      border: "none",
      color: "black",
      backgroundColor: whiteColor,
      "&:hover": {
        tarnsition: "0.2s",
        border: `2px solid ${primaryColor}`,
      },
    },

    currentPage: {
      padding: "5px",
      textAlign: "center",
      margin: "5px",
      height: "30px",
      width: "30px",
      borderRadius: "50%",
      //
      border: `2px solid ${primaryColor}`,
      color: "white",
      backgroundColor: primaryColor,
    },
    morePlusPage: {
      margin: "5px",
      height: "30px",
      width: "30px",
      border: "none",
      backgroundColor: whiteColor,
    },
  })
);
