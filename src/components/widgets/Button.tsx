import React, { useEffect, useState } from "react";
import { showToast } from "../shared/ToastAlert";
import Loading from "./CircularProgress";
import CircularProgress from "@material-ui/core/CircularProgress";

function Button({
  actionTo,
  textBtn,
  iconLeftBtn,
  iconRightBtn,
  styleBtn,
  display,
}: any) {
  const [text, setText] = useState("");
  const [iconLeft, setIconLeft] = useState("");
  const [iconRight, setIconRight] = useState("");
  const [style, setStyle] = useState("");

  // btnPrimary or btnSecondary

  useEffect(() => {
    if (textBtn && textBtn.trim().length > 0) setText(textBtn);
    if (iconLeftBtn) setIconLeft(iconLeftBtn);
    if (iconRightBtn) setIconRight(iconRightBtn);
    if (styleBtn) setStyle(styleBtn);
    console.clear();
  }, []);
  const showMsg = () =>
    showToast({ message: "plaese, add an action ", typeToast: "dark" });
  const loading = false;
  const loadingtext = "";

  return (
    <button
      id="global-btn"
      className={`${style} ${
        iconRightBtn || iconLeftBtn || loading ? "BtnIcon" : ""
      } 
      
      ${display && display === "block" ? "isBlock" : ""}
      `}
      type="button"
      onClick={actionTo ? actionTo : showMsg}
    >
      <span className="icon "> {iconLeftBtn}</span>
      <span className="text">{loading ? "Loading..." : text}</span>
      <span className="icon "> {iconRightBtn}</span>
    </button>
  );
}

export default Button;
