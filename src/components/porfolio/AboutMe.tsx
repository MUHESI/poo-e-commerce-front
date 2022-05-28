import React from "react";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Button from "../widgets/Button";
import photoMoise from "../../assets/img/moise.jpeg";
import ImageListItem from "@material-ui/core/ImageListItem";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import WorkIcon from "@material-ui/icons/Work";

function AboutMe() {
  return (
    <div className='mainAboutMe'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} xl={4}>
          <Hidden only={["sm", "xs"]}>
            {/* <div className="content-img">
              <img src={photoMoise} alt="..." />
            </div> */}
            <ImageListItem cols={1} rows={1} className='content-img'>
              <img
                src={
                  "https://res.cloudinary.com/chanel-muhesi/image/upload/v1645357116/WhatsApp_Image_2022-02-20_at_1.36.55_PM_o448ic.jpg"
                }
                alt='...'
              />
            </ImageListItem>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={12} md={8} xl={8}>
          <div className='content-text'>
            <p>
              My name is MUHESI Moise. I'm a Fullstack Software Engineer who
              loves leveraging technology to solve complex problems in efficient
              ways. I value the concept of having skills and having implemented
              solutions more than portraying oneself as a master of a specific
              language.
            </p>
            <p className='border-b'>
              I believe that if you have the skills, know fundamental concepts
              of software design/architecture, and always have the willingness
              to learn, you can learn any language and provide solutions with
              it. Hence, I like portraying myself as someone who has the skills
              that it takes to provide good programming solutions despite the
              challenges and the language choice
            </p>
            <div>
              <p className=''>
                <h3> </h3>
                <ul>
                  <li>
                    I strongly believe in the power of technology and the
                    ability to create solutions via programming and the art of
                    software development. Therefore, I enjoy being challenged
                    and engaging with projects that require me to work outside
                    of my comfort and knowledge set.
                  </li>
                </ul>
              </p>
              <p>
                When I have free time, I work on personal projects to improve my
                skills or read books about great technologies. When I'm not
                working I enjoy playing piano, listening to music, and mentoring
                Junior Engineers.
              </p>
            </div>
            <div className='content-actions'>
              <div>
                <Button
                  BtnText='contactMe'
                  textBtn='Hire me'
                  iconRightBtn={<WorkIcon />}
                  styleBtn={"btnPrimaryGradient"}
                  // style={{ minWidth: "157px" }}
                />
              </div>
              <div>
                <Button
                  BtnText='contactMe'
                  textBtn='Get resume'
                  iconRightBtn={<PictureAsPdfIcon />}
                  styleBtn={"btnPrimaryGradient"}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <div> </div>
    </div>
  );
}

export default AboutMe;
