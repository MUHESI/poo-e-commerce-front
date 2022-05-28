import React, { useState, useEffect } from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import CalendarViewDaySharpIcon from "@material-ui/icons/CalendarViewDaySharp";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutlineSharp";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import Hidden from "@material-ui/core/Hidden";

import axios from "axios";
// import cookie from "js-cookie";
import { showToast } from "../components/shared/ToastAlert";

function Navbar({ statutDrawer, openDrawer, closeDrawer }: any) {
  const [sidebarON, setSidebarON] = useState(true);
  const [drawerOpen, setSatatutDraw] = useState(statutDrawer);
  const hideSidebar = () => {
    let doc: any = document.querySelector(".sidebar");
    doc.classList.toggle("hideSidebar");
    //
    let docRight: any = document.querySelector(".main-container");
    docRight.classList.toggle("fullScren-main-container");
    setSidebarON(!sidebarON);
  };
  //

  const [toggleMenu, setToggleMenu] = useState(false);
  const [large, setLarge] = useState(window.innerWidth);
  const toggleNavSmall = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    console.clear();
    //1.

    console.log("window.innerWidth); :>> ", large);
    if (large < 1010) {
      setSatatutDraw(false);
      closeDrawer();
    }
    //2.
    const changeWidth = () => {
      setLarge(window.innerWidth);
      console.log(window.innerWidth);
      if (window.innerWidth < 1010) {
        setSatatutDraw(false);
        closeDrawer();
      }

      if (window.innerWidth > 1010) {
        setSatatutDraw(true);
        openDrawer();
      }
    };
    //3.

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div>
      <div className="MainNavbar">
        <nav className="nav-left">
          <span
            className=" isCursor "
            onClick={() => {
              if (large > 780) {
                if (statutDrawer) {
                  setSatatutDraw(!drawerOpen);
                  closeDrawer();
                } else {
                  setSatatutDraw(!drawerOpen);
                  openDrawer();
                }
              } else {
                console.log(" larege < 778 :>> ");
              }
            }}
          >
            {drawerOpen ? (
              <CalendarViewDaySharpIcon className="i" fontSize="large" />
            ) : (
              <CloseSharpIcon className="i" fontSize="large" />
            )}
          </span>
          <span className="lock isCursor">
            <LockOpenSharpIcon className="i" fontSize="large" />
          </span>
          <span className="help isCursor  ">
            <span className="icon ">
              <HelpOutlineSharpIcon className="i" fontSize="large" />
            </span>
            <em> Touver de l'aide</em>
          </span>
        </nav>
        <nav className="nav-right">
          <Hidden only={["sm", "xs"]}>
            {/* <Hidden only={["sm", "xs", "md", "lg"]}> */}

            {/*======= keep this form ======  */}
            <span className="group_form_btn">
              <input type="text" placeholder="Rechercher" />
              <button type="button" className="">
                <SearchIcon
                  className="iSearch hover-primary"
                  fontSize="large"
                />
              </button>
            </span>
            {drawerOpen === true && large < 1006 ? (
              ""
            ) : (
              <>
                <span className="notification">
                  <span className="icon ">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon className="i" fontSize="large" />
                    </Badge>
                  </span>
                </span>
                <span className="profile isCursor">
                  <span className="icon ">
                    <PersonIcon className="i" fontSize="large" />
                  </span>
                  <strong> MUHESI Moise</strong>
                </span>
              </>
            )}
          </Hidden>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
