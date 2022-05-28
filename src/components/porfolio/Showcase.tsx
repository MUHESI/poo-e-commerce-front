import React from "react";
import photoMoise from "../../assets/img/moise.jpeg";
import ImageListItem from "@material-ui/core/ImageListItem";
import Button from "../widgets/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import ScrollReveal from 'scrollreveal'

const Showcase = () => {
  const mainHomePorfolio: any = document.getElementById("mainHomePorfolio");
  const docImg: any = document.getElementById("content-img");
  // mainHomePorfolio.onClick(window.innerWidth() /2 -t.pageX ) /70,

  // docImg.style.display =
  // const sr = ScrollReveal({
  //   origin: "top",
  //   distance: "80px",
  //   duration: "2000",
  //   reset: true,
  // });

  // sr.reveal("clasee", { duration: 200 });

  return (
    <div className='mainHomePorfolio' id='mainHomePorfolio'>
      <div className='container'>
        <div className='content-text'>
          <div className='text'>
            <span>
              Hi,
              <br /> I am <strong> MUHESI Moses </strong>
            </span>
            <br />
            <span> Software Engineer</span>
          </div>
          <div className='content-actions'>
            <div>
              <Button
                textBtn='Get resume'
                // display="block"
                // iconRightBtn={<SendIcon />}
                styleBtn={"btnPrimaryCircle_HomePorfilio"}
                actionTo={() => alert("ok")}
              />
              <a
                href='https://cloudinary.com/console/c-c4341a1c1fe7fdac4385627fc48efb/media_library/folders/home/asset/bd3cc5af4595e783b83a757eed5d5172/manage'
                target='_blank'
                rel='noopener noreferrer'
              >
                Get resume
              </a>
            </div>

            <div className='icons'>
              <LinkedInIcon onClick={() => alert("")} />
              <FacebookIcon />
              <GitHubIcon />
            </div>
          </div>
          {/* <div id='circle'> </div> */}
        </div>
        <div className='content-img' id='content-img'>
          <ImageListItem cols={1} rows={1} className='content-img'>
            <img
              src={
                "https://res.cloudinary.com/chanel-muhesi/image/upload/v1645356751/WhatsApp_Image_2022-02-20_at_1.30.37_PM_vlyzas.jpg"
              }
              alt='...'
              className='isCursor img-hover_'
            />
          </ImageListItem>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
