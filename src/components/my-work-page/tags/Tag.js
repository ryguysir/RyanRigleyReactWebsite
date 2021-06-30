import React from "react";

import "./app.css";
import "../../../App.css";

const Tag = ({ text, currentTags, setCurrentTags }) => {
  const currentProjectsHandler = (e) => {
    if ([...currentTags].includes(e.target.innerText)) {
      setCurrentTags([...currentTags].filter((item) => item !== e.target.innerText));
    } else {
      setCurrentTags([...currentTags, e.target.innerText]);
    }
  };
  return (
    <div
      onClick={currentProjectsHandler}
      className={`tag ${currentTags.includes(text) ? "tagToggled" : ""}`}
    >
      {text}
    </div>
  );
};

export default Tag;
