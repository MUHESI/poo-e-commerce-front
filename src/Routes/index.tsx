import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchPath from "./SwitchPaths";
import { AppBar } from "../navigations/AppBar";
export const backgroundMain = " #eeeeee";

export default function MiniDrawer() {
  useEffect(() => {}, []);

  return (
    <Router>
      <AppBar />
      <SwitchPath />
    </Router>
  );
}
