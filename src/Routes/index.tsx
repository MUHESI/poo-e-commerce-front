import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navigations/Navbar";
import Sidebar from "../navigations/Sidebar";
import SwitchPath from "./SwitchPaths";
import Login from "../components/auth/Login";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import Breadcrumbs from "../components/widgets/Breadcrumbs";
import { AppBar } from "../navigations/AppBar";
import { useSelector } from "react-redux";

const drawerWidth = 250;
export const backgroundMain = " #eeeeee";

export default function MiniDrawer() {
  const history = useHistory();
  const { menu } = useSelector((state: any) => state);

  useEffect(() => {
    console.clear();
    console.log(`=================================`);
    console.log(`menu`, menu);
    console.log(`=================================`);
  }, []);

  // const { Uid } = useContext(keysUserContext);

  const Uid = false;

  return (
    <Router>
      <AppBar />
      <SwitchPath />
    </Router>
  );
}
