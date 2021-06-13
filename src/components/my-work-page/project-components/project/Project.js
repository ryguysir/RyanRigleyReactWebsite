import React from "react";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <Fade>
        <div className="project-card" onClick={showVideos}>
          <Fade cascade left>
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
          <LazyLoadImage
            className="project-card-img"
            height="100%"
            width="100%"
            left="0%"
            effect="blur"
            src={imgSrc}
            alt={`image for ${projectTitle}`}
          />
        </div>
      </Fade>
    </div>
  );
};

export default Project;
