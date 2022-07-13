import React from "react";
import { LoadingCustom } from "../components/widgets/CircularProgress";

export default function Loading() {
  return (
    <div
      style={{
        //  paddingTop:'100px',
        transform: "translateY(220px)"
      }}
    >
      <LoadingCustom />
    </div>
  );
}
