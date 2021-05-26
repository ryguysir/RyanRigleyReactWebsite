import React from "react";

const ProjectVideo = ({ videoSrc }) => {
  return (
    <iframe
      title={videoSrc}
      width="960px"
      height="540px"
      src={`https://player.vimeo.com/video/${videoSrc === undefined ? "516839250" : videoSrc}`}
      alt=""
    />
  );
};

export default ProjectVideo;
