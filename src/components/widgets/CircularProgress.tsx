import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <span
      style={{
        display: "flex"
      }}
    >
      <CircularProgress />
    </span>
  );
}
export const LoadingCustom = () => {
  return (
    <div className='mainLoading'>
      <p> loading ... </p>
    </div>
  );
};
