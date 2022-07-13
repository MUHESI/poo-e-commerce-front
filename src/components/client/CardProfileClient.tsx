import React from "react";
import UserImg from "../../assets/img/user.png";

function CardProfileClient({ client, isLoadingInfo }: any) {
  return (
    <div className='mainProfile'>
      {/* <FirstHeading title={mainTile} /> */}
      <div className='content-img'>
        <img src={UserImg} alt='...' />
      </div>
      <div className='content-text'>
        <div className='content-identity'>
          {/* <SecondHeading title={secondTitle} /> */}
          <div className='content-body'>
            {isLoadingInfo ? (
              " charmement en cours"
            ) : (
              <>
                <div>
                  Noms :
                  <span>
                    {`${client?.name || ""} ${client?.lastname || ""}`}{" "}
                  </span>
                </div>
                <div>
                  Email : <span> {client?.email} </span>
                </div>
                <div>
                  Telephone : <span> {client?.phone} </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className='content-identity'>
          {/* <SecondHeading title={lastTitle} /> */}
        </div>
      </div>
    </div>
  );
}

export default CardProfileClient;
