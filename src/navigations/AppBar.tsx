import React, { useState, useEffect } from "react";
// import "./navStyle.css";
// import logo from "../../../assets/joinafrik_logo.png";
import CloseIcon from "@material-ui/icons/Close";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { useHistory } from "react-router-dom";
import { showToast } from "../components/shared/ToastAlert";
import { useSelector } from "react-redux";

const SIZE_SCREEN = 670;

export const AppBar = () => {
  const history = useHistory();
  const { menu } = useSelector((state: any) => state);

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
                // onClick={() => selectPath("/blog")}
                onClick={() => selectPath("/admin")}
              >
                Blog
              </li>
              <li className='items' onClick={() => selectPath("/shop")}>
                shop
              </li>
              <li
                className='items  hide_element'
                // onClick={() => selectPath("/blog/new")}
              >
                Create blog
              </li>
              {menu?.menu === "BLOG_" && (
                <>
                  <li
                    className='items  hide_element'
                    onClick={() => showMessageConnect()}
                  >
                    Blog 2
                  </li>
                </>
              )}
              {menu.menu === "SHOP_" && (
                <>
                  <li
                    className='items  hide_element'
                    onClick={() => showMessageConnect()}
                  >
                    shop 1
                  </li>
                </>
              )}
              <li
                className='items  hide_element'
                onClick={() => selectPath("/login")}
              >
                Se connecter
              </li>
              <li
                className='items  hide_element'
                onClick={() => selectPath("/profile-user/564")}
              >
                Profile
              </li>

              {/* <li>
            <div className='group-form' >
              <input type="text" placeholder="Rechercher">
              </input>
              <button
                className="btn__primaryMenu-sm"
                onClick={() => history.push("/login")}
              >
                R
              </button>
            </div>
          </li> */}

              {/* <li className="items ajouterNtn">
                <button
                  className="btn__primaryMenu-sm"
                  onClick={() => history.push("/login")}
                >
                  Se connecter
                </button>
              </li> */}
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
