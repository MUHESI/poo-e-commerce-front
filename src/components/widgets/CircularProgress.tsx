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
    <div className='mainLoading_'>
      <div className='mainLoading'>
        <div className='container'>
          <div className='ring'> </div>
          <div className='ring'> </div>
          <div className='ring'> </div>
          <p> loading ... </p>
        </div>
      </div>
    </div>
  );
};