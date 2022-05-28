import React, { useState, useEffect, useContext } from "react";

import { MainSidebar } from "./sidebarCustom";

import userEntiteIDContext from "../context/AppContext";
// import { FONCTIONALITIES as ROLE } from "../components/shared/constantes/fonctionalities";
import { showToast } from "../components/shared/ToastAlert";

const Sidebar = ({ sideOpen }: any) => {
  const [menu, setMenu] = useState<any>("");
  const { fonction } = useContext(userEntiteIDContext);

  useEffect(() => {
    menu === "" && SelectSidebar();
    console.clear();
    console.log("object :>> ");
    console.log("fonction", fonction);
  }, []);

  const SelectSidebar = () => {
    switch (fonction) {
      case "ROLE.RECEPTION":
        // return setMenu(<SidebarCustom dataMenu={MENU_ADMIN_UNIV} />);
        // return setMenu(<MainSidebar sideOpen={sideOpen} />);

        break;
      default:
        return setMenu(<MainSidebar sideOpen={sideOpen} />);
    }
  };

  return <div>{menu}</div>;
};

export default Sidebar;
