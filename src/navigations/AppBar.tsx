import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import { useSelector } from "react-redux";
import ShoppingBadges from "./ShoppingBadges";

const SIZE_SCREEN = 670;

export const AppBar = () => {
  const history = useHistory();
  const { createCommand } = useSelector((state: any) => state.commands);

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [large, setLarge] = useState(window.innerWidth);
  const toggleNavSmall = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setLarge(window.innerWidth);
      if (window.innerWidth > SIZE_SCREEN) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const showMessageConnect = () => {
    showToast({
      message: "Merci de se connecter",
      typeToast: "dark"
    });
  };

  const selectPath = (path: string) => {
    history.push(path);
    if (large < SIZE_SCREEN) {
      setTimeout(() => {
        setToggleMenu(false);
      }, 300);
    }
  };

  return (
    <div className='containerAppBar'>
      <div className='logo isCursor ' onClick={() => selectPath("/")}>
        {/* <img className="logo_navbar" src={"logo"} alt="logo" /> */}
        <p> Super-market </p>
      </div>
      {(large > SIZE_SCREEN || toggleMenu) && (
        <>
          <div className=' content-middle'>
            <ul className='liste' data-aos='fade-down'>
              <li
                className='items isCursor'
                onClick={() => selectPath("/shop")}
              >
                Accueil
              </li>
              <li
                className='items isCursor'
                onClick={() => selectPath("/monPanier")}
              >
                <ShoppingBadges
                  length={createCommand?.command?.panier?.length || 0}
                />
              </li>
              <li className='items' onClick={() => selectPath("/admin")}>
                Admin
              </li>
              <li
                className='items  hide_element'
                onClick={() => selectPath("/login")}
              >
                Se connecter
              </li>
            </ul>
          </div>
        </>
      )}
      <div className='content-lef'>
        <button className='btn_toggle' onClick={toggleNavSmall}>
          {toggleMenu ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>
    </div>
  );
};
