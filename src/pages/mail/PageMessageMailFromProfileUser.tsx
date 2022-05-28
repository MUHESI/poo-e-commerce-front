import React from "react";
import Button from "../../components/widgets/Button";
import SendIcon from "@material-ui/icons/Send";
import user from "../../assets/img/user.png";

export default function PageMessageMailFromProfileUser() {
  const nameUserTO = "MUHESI Moise";
  const nameUserFrom = "Serge Mweka ";
  return (
    <div className="mainMessageFromProfileUser">
      <div className="profile_conentainer ">
        <div className="profile_appBar">
          <span> high-tech </span>
          <span> Logo </span>
        </div>
        <div className="profile-contentBody margin-top-2">
          <div className="profile-header ">
            <h2> Salut,{nameUserTO} </h2>
            <p>
              une personne vous a envoyé un message dépuis
              <strong className="isCursor"> high-techTec</strong>
            </p>
          </div>
          <div className="profile-body margin-2">
            <div className="profile-group-img-text">
              <div className="profile-group-img">
                <img src={user} alt="..." className="" />
              </div>
              <div className="profile-text-right">
                <div className="profile-name-date">
                  <h2>{nameUserFrom}</h2>
                  <div className="profile-date">2021-11-23:50 pm</div>
                </div>
                <div className="profile-message">
                  Bonjour à vous je suis bien dans , Every push to the branch
                  you specify here will deploy a new version of this app. Every
                  push to the branch you specify here will deploy a new version
                  of this app.
                </div>
              </div>
            </div>
            <div className="content-actions margin-top-2">
              {/* <Button
                textBtn="Repondre"
                display="block"
                styleBtn={"btnPrimary"}
                // iconRightBtn={<SendIcon />}
                //   actionTo={handleClickOpen}
              /> */}
              <button
                id="global-btn"
                className="btnPrimary isBlock"
                type="button"
              >
                <span className="text"> Repondre</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
