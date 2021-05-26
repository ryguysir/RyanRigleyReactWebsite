import React from "react";

const AboutMeSection = ({
  myNameIs,
  vidSrc,
  body,
  vidOrImage,
  buttons,
  showAboutMe,
  setShowAboutMe,
  scrollToContactMe,
  centerOrFooter,
}) => {
  const viewMyWork = () => {
    setShowAboutMe(!showAboutMe);
  };
  return (
    <div>
      <div className="about-me-section">
        <div className="about-me-container">
          <div className={`my-name-is ${myNameIs ? "" : "hidden"}`}>
            <h1>HELLO</h1>
            <h2>MY NAME IS</h2>
          </div>
          <h3 className={`${centerOrFooter ? "hidden" : ""}`}>{body}</h3>
          <div className={`bttn-holder ${buttons ? "" : "hidden"}`}>
            <div onClick={viewMyWork} className="about-me-bttn">
              View My Work
            </div>
            <div onClick={scrollToContactMe} className="about-me-bttn">
              Contact Me
            </div>
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>

        <div className={`about-me-footer-text-before ${centerOrFooter ? "" : "hidden"}`}></div>
        <div className={`about-me-footer-text ${centerOrFooter ? "" : "hidden"}`}>
          <span>{body}</span>
        </div>
        <img
          alt=""
          className={`about-me-image ${vidOrImage ? "hidden" : ""}`}
          tabIndex="0"
          src={vidSrc}
        />
        <video
          className={`about-me-video ${vidOrImage ? "" : "hidden"}`}
          tabIndex="0"
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
