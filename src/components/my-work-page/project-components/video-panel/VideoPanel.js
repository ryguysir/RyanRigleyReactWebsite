import React from "react";
import Fade from "react-reveal/Fade";

import "./app.css";
import "../../../../App.css";

//import components
import ProjectVideo from "./ProjectVideo";

const VideoPanel = ({ videoPanelObject, setVideoPanelObject }) => {
  const nextVid = () => {
    let curNumber = videoPanelObject.videoNumber;
    if (videoPanelObject.videoNumber < videoPanelObject.videos.length - 1) {
      curNumber += 1;
    } else {
      curNumber = 0;
    }
    setVideoPanelObject({ ...videoPanelObject, videoNumber: curNumber });
  };
  const previousVid = () => {
    let curNumber = videoPanelObject.videoNumber;
    if (videoPanelObject.videoNumber !== 0) {
      curNumber -= 1;
    } else {
      curNumber = videoPanelObject.videos.length - 1;
    }
    setVideoPanelObject({ ...videoPanelObject, videoNumber: curNumber });
  };
  const returnToProjects = () => {
    setVideoPanelObject({
      ...videoPanelObject,
      hidden: !videoPanelObject.hidden,
      videos: [],
      videoNumber: 0,
    });
  };
  return (
    <div>
      <div className={`video-panel-bg ${videoPanelObject.hidden ? "video-panel-bg-hidden" : ""}`}>
        <div className="video-panel">
          <div className="return-to-projects" onClick={returnToProjects}>
            <i className="fas fa-chevron-up"></i>
            <p>Return to projects</p>
          </div>
          <div className="video-panel-number">
            <Fade top cascade>
              {`${videoPanelObject.videoNumber + 1} of ${videoPanelObject.videos.length}`}
            </Fade>
          </div>
          <div className="video-panel-iframe">
            <ProjectVideo videoSrc={videoPanelObject.videos[videoPanelObject.videoNumber]} />
          </div>
          <div className="video-bttn-container">
            <div className="video-previous-bttn" onClick={previousVid}>
              <i className="fas fa-chevron-left"></i>
              Previous
            </div>
            <div className="video-next-bttn" onClick={nextVid}>
              Next
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
