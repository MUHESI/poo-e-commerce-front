import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import ProgressBar from "./LinerProgress";
import { Grid } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import imgJS from "../../assets/icons/html.jpeg";
import imgHtml from "../../assets/icons/html_.png";
import imgMongodb from "../../assets/icons/mongodb.jpeg";
import imgReact from "../../assets/icons/react.jpeg";
import imgScss from "../../assets/icons/scss.jpg";
import imgUnitTest from "../../assets/icons/unitTest.jpg";
import CardProject from "./cardProjects";

export function Education() {
  return (
    <div className='mainEducation'>
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <div className='content-education'>
              <div className='content-titles'>
                <h3>Ir software Devepper </h3>
                <h4 className='isCursor  btn-event '>2020-2021</h4>
              </div>
              <p>At ULPGL-GOMA</p>
            </div>
            <div className='content-education'>
              <div className='content-titles'>
                <h3>BETA level</h3>
                <h4 className='isCursor  btn-event '>2020-2021</h4>
              </div>
              <p>At Microsoft( Student Ambassadors MLSA)</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <div className='content-education'>
              <div className='content-titles'>
                <h3>Ir in Electropnic domain </h3>
                <h4 className='isCursor  btn-event '>2020-2021</h4>
              </div>
              <p>At MAHAMBA (Institut Industrille Mahamba)</p>
            </div>
            <div className='content-education'>
              <div className='content-titles'>
                <h3>Management project </h3>
                <h4 className='isCursor  btn-event '>2020-2021</h4>
              </div>
              <p>At the CRES (GOMA) </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const tabSkills = [
  {
    skill: "js",
    img: imgJS,
    value: 85,
  },
  {
    skill: "React",
    img: imgReact,
    value: 85,
  },
  {
    skill: "Mongodb",
    img: imgMongodb,
    value: 80,
  },

  {
    skill: "html",
    img: imgHtml,
    value: 85,
  },
  {
    skill: "scss",
    img: imgScss,
    value: 85,
  },
  {
    skill: "Test unitaires",
    img: imgUnitTest,
    value: 60,
  },
];

export function SkillsPrograming() {
  return (
    <div>
      <div className='mainSkills'>
        <div className='container'>
          {/* <span className="text">
            <em> icon</em> Html fref uiButtonBase-root.M uiButtonBase-root.M v
          </span>
          <span className="poucent"> 95%</span> */}
          <ProgressBar tabSkills={tabSkills} />
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} xl={12}></Grid>
        <Grid item xs={12} sm={6} md={6} xl={6}></Grid>
      </Grid>
    </div>
  );
}

export function WorkHistory() {
  return (
    <div className='mainWorkHistory'>
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <div>
              <h3> the bellevue portal </h3>
              <p>
                A web platform that will manage the different services of the
                bellevue hospital wherever its extensions are located; the
                management - consultation - the waiting room - laboratory -
                finance - accounting etc. using react js and typescript
                technology.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} xl={6}>
            <div>
              <h3>joinAfrik </h3>
              <p>
                joinAfrik is a web application that will create a bridge between
                people with services to offer (called freelancers) and customers
                with misssions, Thus, affricans will have work to and money to
                earn.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div>
      <CardProject />
    </div>
  );
}

export function Interests() {
  return (
    <div className='mainInterests '>
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <div>
              <h3>✍ Blog & Writing </h3>
              <p>
                Apart from coding, I also maintain a blog - you can find my
                articles here at
              </p>
            </div>
            {/*   <div>
              <h3> the bellevue portal </h3>
              <p>
                A web platform that will manage the different services of the
                bellevue hospital wherever its extensions are located; the
                management - consultation - the waiting room - laboratory -
                finance - accounting etc. using react js and typescript
                technology.
              </p>
            </div> */}
            <div>
              <h3> improve skills</h3>
              <p>
                When I have free time, I work on personal projects to improve my
                skills or read books about great technologies.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} xl={6}>
            <div>
              <h3>Sport </h3>
              <p>
                Sport from time to time I do sports with my friends; I like
                soccer and walking;
              </p>
            </div>
            <div>
              <h3> Movies</h3>
              <p>
                I like action movies and detective series uo_fh gvoisfvsdhifnvos
                oisfvsdhifnvo oisfvsdhifnvov oisfvsdhifnvo oids
              </p>
            </div>
            <div>
              {/* <h3> bhjvfudv uvvsdhfvbds</h3>
              <p>
                uo_fh gvoisfvsdhifnvos oisfvsdhifnvo oisfvsdhifnvov
                oisfvsdhifnvo oids
              </p>
              <p> uo_fh gvoisfvsdhifnvos oids</p>
              <p> uo_fh gvoisfvsdhifnvos oids</p> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export const tabItemMenu = [
  {
    icon: <WorkIcon />,
    menu: "Education",
  },
  {
    icon: <WorkIcon />,
    menu: "Skills Programing",
  },
  {
    icon: <WorkIcon />,
    menu: "Work History",
  },
  {
    icon: <WorkIcon />,
    menu: "Projects",
  },
  {
    icon: <WorkIcon />,
    menu: "Interests",
  },
];
