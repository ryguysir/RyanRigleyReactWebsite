import React from "react";

import AwardLottie from "../award/AwardLottie";

import "./app.css";

const Project = ({
  projectTitle,
  projectText,
  imgSrc,
  projectVideos,
  videoPanelObject,
  setVideoPanelObject,
  award,
}) => {
  const showVideos = () => {
    if (videoPanelObject.hidden === true) {
      setVideoPanelObject({
        ...videoPanelObject,
        hidden: !videoPanelObject.hidden,
        videos: projectVideos,
      });
    } else {
      setVideoPanelObject({ ...videoPanelObject, hidden: !videoPanelObject.hidden, videos: [] });
    }
    return;
  };

  const lowResImage = {
    background: `url(${imgSrc.slice(0, imgSrc.length - 4) + "-sd.jpg"}) no-repeat`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div className={award.length === 0 ? "hidden" : ""}>
        <AwardLottie award={award} />
      </div>
      <div className="project" onClick={showVideos}>
        <div className="project-text-and-img-holder">
          <div className="project-text">
            <h2>{projectTitle}</h2>
            <h3>{projectText}</h3>
          </div>
          <img style={lowResImage} src={imgSrc} alt="" />
        </div>
      </div>
      <div className="project-gradient"></div>
    </div>
  );
};

export default Project;
