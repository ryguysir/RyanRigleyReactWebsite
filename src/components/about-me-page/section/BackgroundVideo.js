import React from "react";
import "./app.css";
import "../../../App.css";

const BackgroundVideo = ({ vidOrImage, vidSrc }) => {
  return (
    <div>
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
  );
};

export default BackgroundVideo;
