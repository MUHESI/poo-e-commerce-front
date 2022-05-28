import React from "react";

function Formbutton({ positionBtn, hundlechange, icon }: any) {
  return (
    <span className="group_form_btn">
      {positionBtn === "left" && (
        <button type="button" className="">
          {/* <SearchIcon className="iSearch hover-primary" fontSize="large" /> */}
        </button>
      )}
      <input type="text" placeholder="Rechercher" />
      {positionBtn === "right" && (
        <button type="button" className="">
          {/* <SearchIcon className="iSearch hover-primary" fontSize="large" /> */}
        </button>
      )}
    </span>
  );
}

export default Formbutton;
