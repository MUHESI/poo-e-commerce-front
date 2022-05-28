import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { substringText } from "../../services/functions";

function PaperDashboard({ typeCard }: any) {
  const title2 = " Nombre des cours dispensés sur le nommbre total des cours ";
  const getColor = (i: number) => {
    switch (i) {
      case 1:
        return "backg-orange";
        break;

      case 2:
        return "backg-green";
        break;
      case 3:
        return "backg-red";
        break;
      case 4:
        return "backg-blue";
        break;

      default:
        console.log("object :>> ");
        break;
    }
  };
  const tab = [1, 2, 3, 4];

  return (
    <>
      {tab.map((el, i) => (
        <div
          className={`MainPaperDashboard ${
            tab.length === i + 1 ? "ManilastElt " : ""
          }`}
        >
          <div>
            <div className="content-body">
              <div className="block-left ">
                <div className={getColor(el) || "backg-red"}>
                  <MenuIcon />
                </div>
              </div>
              <div className="block-right">
                <p>Revenue</p>
                <h3>
                  $97/100 <span> </span>
                </h3>
              </div>
            </div>

            <div className="footer">
              <span className="icon">{/* <MenuIcon className="" /> */}</span>
              <span className="text">{substringText(title2 || "", 30)}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PaperDashboard;
