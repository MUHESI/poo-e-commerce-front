import React from "react";

interface IProps {
  lTitle: string;
  fTitle: string;
}

function Title({ fTitle, lTitle }: IProps) {
  return (
    <div className="mainTitle_porfolio">
      <div>
        <h3> {fTitle}</h3>
        <span> {lTitle}</span>
      </div>
    </div>
  );
}

export default Title;
