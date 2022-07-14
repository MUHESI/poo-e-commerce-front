import React, { useEffect, useState } from "react";
import { styleTheme } from "../../styles";
import { showToast } from "../shared/ToastAlert";
function Button({
  actionTo,
  textBtn,
  iconLeftBtn,
  iconRightBtn,
  styleBtn,
  display,
  disabled,
  isLoadingInfo
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
  }, []);
  const showMsg = () =>
    showToast({ message: "plaese, add an action ", typeToast: "dark" });
  const loadingtext = "";

  return (
    <button
      style={{ backgroundColor: styleTheme.colors.blueDark }}
      disabled={disabled ? disabled : false}
      id='global-btn'
      className={`${style} ${
        iconRightBtn || iconLeftBtn || isLoadingInfo ? "BtnIcon" : ""
      } 
      
      ${display && display === "block" ? "isBlock" : ""}
      `}
      type='button'
      onClick={actionTo ? actionTo : showMsg}
    >
      <span className='icon '> {iconLeftBtn}</span>
      <span className='text'>{isLoadingInfo ? "Loading..." : text}</span>
      <span className='icon '> {iconRightBtn}</span>
    </button>
  );
}

export default Button;
