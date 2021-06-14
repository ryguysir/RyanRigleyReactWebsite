import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./app.css";
import "../../../App.css";

//import components
import PrimaryLottieAnim from "../primary-lottie/PrimaryLottieAnim";

const AboutMeSection = ({
  myNameIs,
  vidSrc,
  body,
  vidOrImage,
  buttons,
  scrollToContactMe,
  centerOrFooter,
}) => {
  const BackgroundVideo = lazy(() => import("./BackgroundVideo"));
  return (
    <div>
      <div className="about-me-section">
        <div className="about-me-container">
          <div className={`primary-lottie-anim ${vidOrImage ? "hidden" : ""}`}>
            {/* lottie animation */}
            <PrimaryLottieAnim />
          </div>
          <Fade bottom cascade>
            <h3 className={`${centerOrFooter ? "hidden" : ""}`}>{body}</h3>
          </Fade>
          <div className={`bttn-holder ${buttons ? "" : "hidden"}`}>
            <Link to="/my-work">
              <Fade cascade>
                <div className="about-me-bttn">View My Work</div>
              </Fade>
            </Link>
            <i className="fas fa-chevron-down"></i>
            <Fade cascade>
              <div onClick={scrollToContactMe} className="about-me-bttn">
                Contact Me
              </div>
            </Fade>
          </div>
        </div>
        <div className={`bottom-chevron ${centerOrFooter ? "" : "hidden"}`}>
          <i className="fas fa-chevron-down"></i>
        </div>
        <Slide bottom>
          {/* <div className={`about-me-footer-text-before ${centerOrFooter ? "" : "hidden"}`}></div> */}
          <div className={`about-me-footer-text ${centerOrFooter ? "" : "hidden"}`}>
            <Fade bottom>
              <span>{body}</span>
            </Fade>
          </div>
        </Slide>

        <Suspense fallback={<div></div>}>
          <BackgroundVideo vidOrImage={vidOrImage} vidSrc={vidSrc} />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutMeSection;
