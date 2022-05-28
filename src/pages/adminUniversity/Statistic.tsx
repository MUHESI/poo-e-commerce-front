import React from "react";
import { Grid } from "@material-ui/core";

function Statistic() {
  return (
    <div className=" margin-2 Statistic">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <div style={{ border: "1px solid blue" }} className="">
            lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch bdfiqsbfcguqzi
            ubeufvdjufoqs lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}>
          <div style={{ border: "1px solid blue" }} className="">
            lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch bdfiqsbfcguqzi
            ubeufvdjufoqs lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div style={{ border: "1px solid red" }} className="">
            lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch bdfiqsbfcguqzi
            ubeufvdjufoqs lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <div style={{ border: "1px solid red" }}>
            lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch bdfiqsbfcguqzi
            ubeufvdjufoqs
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={4}>
          <div style={{ border: "1px solid red" }}>
            lorz huvoidsboih dfudsoihvbdsiofh huvbdkfhicisqodch bdfiqsbfcguqzi
            ubeufvdjufoq
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Statistic;
