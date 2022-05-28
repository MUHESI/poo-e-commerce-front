import React from "react";

import { useHistory } from "react-router-dom";
import userPicture from "../assets/img/user.png";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Divider from "@material-ui/core/Divider";
import { substringText } from "../services/functions";

interface IProps {
  sideOpen?: any;
}

export const MainSidebar = ({ sideOpen }: IProps) => {
  const history = useHistory();

  const dataMenu = [
    {
      path: "/",
      labelText: "Fiches",
      labelIcon: "",
      labelInfo: "",
    },
    {
      path: "/",
      labelText: "Décanats",
      labelIcon: "",
      labelInfo: "",
    },
    {
      path: "/",
      labelText: "Décanats",
      labelIcon: "",
      labelInfo: "100",
    },
    {
      path: "/",
      labelText: "Statistiques",
      labelIcon: "",
      labelInfo: "",
    },
    {
      path: "/",
      labelText: "Profil",
      labelIcon: "",
      labelInfo: "",
    },
  ];

  // switch (role) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }

  const subTitle = (title: string) => {
    if (sideOpen) return title;
    try {
      const tabTitle = title.split(" ");
      return `${tabTitle[0].substring(0, 1)}-${tabTitle[1].substring(0, 2)}`;
    } catch (error) {
      return title.substring(0, 3);
    }
  };
  // history.push(menu.path)
  return (
    <div
      className="mainSidebar"
      style={{ height: "100%", marginBottom: "0px", paddingBottom: "0px" }}
    >
      <h2> {subTitle("ADMIN UNIVERSITE")}</h2>

      <div className="profile-cover">
        <span className="icon">
          <img src={userPicture} alt="" />
        </span>
        <span className="text"> MUHESI Moise </span>
      </div>
      <ul className="content-menu">
        {dataMenu.length > 0 &&
          dataMenu.map((menu) => (
            <li
              className="group-menu hover-primary isCursor"
              onClick={() => console.log("ok")}
            >
              <div>
                <span className="icon">
                  {menu.labelIcon || ""}

                  <InboxIcon />
                </span>
                <span className="text">
                  {substringText(menu.labelText, 20) || ""}
                </span>
                <span className={`${menu.labelInfo ? "notif-number" : ""}`}>
                  {menu.labelInfo || ""}
                </span>
              </div>
            </li>
          ))}
      </ul>
      <Divider />
    </div>
  );
};
