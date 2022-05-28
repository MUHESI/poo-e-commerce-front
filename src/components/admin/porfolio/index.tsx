import React from "react";
import { CardHomeText, CardAboutMeText, CardEducation, CardSkillsPrograming , CardWorkHistory, CardProjects, CardInterests} from "../Shared";
import { Grid } from "@material-ui/core";

function ManageDataPorfolio() {
  return (
    <div className="mainManageDataPorfolio">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardHomeText />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardAboutMeText />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardEducation />
          </div>
        </Grid>
      </Grid>
            {/* ---------------------------- */}

            <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardSkillsPrograming />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardWorkHistory />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardProjects />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <div className="mainHtomeText">
            <CardInterests />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ManageDataPorfolio;
