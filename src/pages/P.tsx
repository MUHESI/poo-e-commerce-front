import React from "react";
import { Grid } from "@material-ui/core";
import Button from "../components/widgets/Button";
import userMuhesi from "../assets/img/moise.jpeg";
import user from "../assets/img/user.png";
import SendIcon from "@material-ui/icons/Send";
import BookIcon from "@material-ui/icons/Book";

const ProfileUser = () => {
  return (
    <div className="MainProfileUser margin-2">
      <div className="container_">
      <div className="container-Profile">
        <div className="content-img ">
          <div>
            <img src={userMuhesi} alt="user" className="isCursor img-hover" />
          </div>
        </div>
        <div className="content-body">
          <div className="role">Admin </div>
          <div className="names">MUHESI MOISE </div>
          <div className="bio">
            <p>
              Don't be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is..
              Kanye loves Kanye I love
              Rick Owens’ bed design but the back is..
             
            </p>
          </div>
          <hr />
          <div className="content-actions ">
            <div className="btn-left margin-top-2">
              <Button
                textBtn="Message"
                // display="block"
                styleBtn={"btnPrimaryCircle"}
                iconRightBtn={<SendIcon />}

                // actionTo={() => history.push("/blog")}
              />
            </div>
            <div className="btn-right margin-top-2">
              <Button
                textBtn="43 Blogs"
                // display="block"
                styleBtn={"btnPrimaryCircle"}
                iconRightBtn={<BookIcon />}

                // actionTo={() => history.push("/blog")}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProfileUser;
