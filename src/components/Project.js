import React from "react";

const Project = ({
  projectTitle,
  projectText,
  imgSrc,
  projectVideos,
  videoPanelObject,
  setVideoPanelObject,
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
      <div className="project" onClick={showVideos}>
        <div className="project-text-and-img-holder">
          <div className="project-text">
            <h2>{projectTitle}</h2>
            <h3>{projectText}</h3>
          </div>
          <img src={imgSrc} alt="" />
        </div>
      </div>
      <div className="project-gradient"></div>
    </div>
  );
};

export default Project;
