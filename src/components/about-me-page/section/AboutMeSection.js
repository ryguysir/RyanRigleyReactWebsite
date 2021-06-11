import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
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

            <Fade cascade>
              <div onClick={scrollToContactMe} className="about-me-bttn">
                Contact Me
              </div>
            </Fade>
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>
        <Fade bottom>
          <div className={`about-me-footer-text-before ${centerOrFooter ? "" : "hidden"}`}></div>
          <div className={`about-me-footer-text ${centerOrFooter ? "" : "hidden"}`}>
            <Fade bottom>
              <span>{body}</span>
            </Fade>
          </div>
        </Fade>

        <img
          alt=""
          className={`about-me-image ${vidOrImage ? "hidden" : ""}`}
          tabIndex="0"
          src={vidSrc}
        />
        <video
          className={`about-me-video ${vidOrImage ? "" : "hidden"}`}
          tabIndex="0"
          loading="lazy"
          muted={true}
          autoPlay={true}
          loop={true}
          autobuffer="true"
          preload="auto"
        >
          <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src={vidSrc} />
        </video>
      </div>
    </div>
  );
};

export default AboutMeSection;
