import React from "react";

export default function AddCommentForm() {
  return (
    <div className="mainComment">
      <h2>Commenter </h2>
      <textarea
        rows={5}
        placeholder=""
        //   onChange={(e) => handleChange(e, "description")}
      ></textarea>
      {/* Type comment */}
      <button className="btnPrimary "> commenter </button>
    </div>
  );
}
