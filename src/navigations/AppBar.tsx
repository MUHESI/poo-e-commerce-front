import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import { useSelector } from "react-redux";
import ShoppingBadges from "./ShoppingBadges";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { askSession } from "../context/AppContext";
import Storage, { keyStorage } from "../context/Storage";
import ShopIcon from "@material-ui/icons/Shop";

const SIZE_SCREEN = 670;
export const AppBar = () => {
  const history = useHistory();
  const { createCommand } = useSelector((state: any) => state.commands);
  const { currentUser } = useSelector((state: any) => state.users);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const [large, setLarge] = useState(window.innerWidth);
  const toggleNavSmall = () => {
    setToggleMenu(!toggleMenu);
  };
  const { logged, user } = askSession();

  useEffect(() => {
    askSession();
  }, [currentUser.user]);

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

  const selectPath = (path: string) => {
    try {
      history.push(path);
      if (large < SIZE_SCREEN) {
        setTimeout(() => {
          setToggleMenu(false);
        }, 300);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const logout = () => {
    Storage.removeItem(keyStorage.currentUser);
    window.location.reload();
  };

  return (
    <div className='containerAppBar'>
      <div className='logo isCursor ' onClick={() => history.push("/")}>
        <p>
          <ShopIcon style={{ transform: "translateY(5px)" }} />{" "}
          <strong> Super-Cars</strong>{" "}
        </p>
      </div>
      {(large > SIZE_SCREEN || toggleMenu) && (
        <>
          <div className=' content-middle'>
            <ul className='liste' data-aos='fade-down'>
              <li className='items isCursor' onClick={() => selectPath("/")}>
                Accueil
              </li>
              <li
                className='items'
                onClick={() => {
                  if (logged) {
                    if (user.role === 1) return selectPath("/admin");
                    else {
                      return showToast({
                        message: "Seul les admins accedent a cet espace.",
                        typeToast: "dark"
                      });
                    }
                  } else {
                    showToast({
                      message: "Veiller vous connecter comme admin.",
                      typeToast: "dark"
                    });
                    return history.push("/login");
                  }
                }}
              >
                Admin
              </li>
              <li
                className='items isCursor'
                onClick={() => selectPath("/monPanier")}
              >
                <ShoppingBadges
                  length={createCommand?.command?.panier?.length || 0}
                />
              </li>

              {logged ? (
                <li
                  title='Se deconnecter'
                  className='items  hide_element'
                  onClick={() => logout()}
                >
                  {user.name}
                  <ExitToAppIcon
                    style={{
                      transform: " translateY(22%)",
                      marginLeft: "10px"
                    }}
                  />
                </li>
              ) : (
                <li
                  className='items  hide_element'
                  onClick={() => selectPath("/login")}
                >
                  <ExitToAppIcon
                    style={{
                      transform: " translateY(22%)",
                      marginRight: "10px"
                    }}
                  />
                  Se connecter
                </li>
              )}
            </ul>
          </div>
        </>
      )}
      <div className='content-lef'>
        {createCommand?.command?.panier?.length > 0 && !toggleMenu && (
          <span>
            <ShoppingBadges
              length={createCommand?.command?.panier?.length || 0}
            />
          </span>
        )}
        <button className='btn_toggle' onClick={toggleNavSmall}>
          {toggleMenu ? <CloseIcon /> : <DehazeIcon />}
        </button>
      </div>
    </div>
  );
};
