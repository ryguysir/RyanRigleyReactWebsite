import React from "react";
import "./app.css";
import "../../../../App.css";

const ProjectVideo = ({ videoSrc }) => {
  return (
    <iframe
      title={videoSrc}
      width="960px"
      height="540px"
      frameBorder="0"
      allowFullScreen
      loading="lazy"
      src={`https://player.vimeo.com/video/${videoSrc === undefined ? "516839250" : videoSrc}`}
      alt=""
    />
  );
};

export default ProjectVideo;
