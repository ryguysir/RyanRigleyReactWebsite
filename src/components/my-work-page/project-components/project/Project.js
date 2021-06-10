import React from "react";
import Fade from "react-reveal/Fade";

import "./app.css";
import "../../../../App.css";

//import components
import AwardLottie from "../award/AwardLottie";
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

  return (
    <div>
      <div className="project-card" onClick={showVideos}>
        <Fade cascade left key={projectTitle}>
          <div className="project-card-text">
            <h2>
              {projectTitle}
              <div className="project-card-text-horizontal-line"></div>
            </h2>

            <h3>{projectText}</h3>
            <div className={award === "" ? "hidden" : ""}>
              <AwardLottie award={award} />
            </div>
          </div>
        </Fade>
        <img className="project-card-img" src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Project;
