import React from "react";
import { Grid } from "@material-ui/core";
import { substringText } from "../../services/functions";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import { imgProjects } from "./constants";
import imgProject1 from "../../assets/projects/project1.jpeg";
import Button from "../widgets/Button";

export default function CardProject() {
  const tabProjects = [
    {
      title: "joinAfrik",
      description:
        "   joinAfrik is a web application that will create a bridge between freelancers  and customers...",

      repository: "https://github.com/MUHESI",
      isPublic: false,
      img: imgProjects.projectOne,
      link: "https://github.com/MUHESI",
    },
    {
      title: "the bellevue portal",
      description:
        "A web platform that will manage the different services of the bellevue hospital wherever its extensions are located...",
      repository: "https://github.com/MUHESI",
      isPublic: false,
      img: imgProjects.projectJoinAdmin,
      link: "",
    },

    {
      title: "joinAfrik Admin",
      description:
        "   joinAfrik is a web application that will create a bridge between freelancers  and customers...",
      repository: "sjcsducds",
      isPublic: false,
      img: imgProjects.projectJoinAdmin,

      link: "",
    },
    {
      title: "projetc free",
      description:
        "hegy udgusds ufiodshvcosd  rgrefrd grfgrdfgr ukgiiguvoishvdxfhu dskvnusdi vidfsvbidsuui   vidfsvbidsuui  vidfsvbidsuui  vidfsvbidsuui  vidfsvbidsuui  vidfsvbidsuui  vidfsvbidsuui ",
      repository: "sjcsducds",
      isPublic: false,
      img: imgProject1,
      link: "",
    },
  ];

  return (
    <div className='mainProjects'>
      <Grid container spacing={5}>
        {tabProjects.map((project: any) => (
          <Grid item xs={12} sm={12} md={3} xl={3}>
            <div className='container'>
              <div className='content-img'>
                <img src={project.img} alt='...' />
              </div>
              <div className='content-text'>
                <h3>{project.title}</h3>
                <h4>2020-2021 </h4>
                <div className='description'>
                  {substringText(project.description || "", 150)}
                </div>

                <div
                  className='content-actions'
                  style={{
                    textAlign: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Button
                    textBtn='Visit '
                    iconRightBtn={<VideoLabelIcon />}
                    styleBtn={"btnPrimary"}
                  />

                  <Button
                    textBtn='Get repository '
                    styleBtn={"btnPrimary"}
                    // actionTo={() => alert("ok_")}
                  />
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
