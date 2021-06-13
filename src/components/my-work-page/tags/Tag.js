import React from "react";
import Fade from "react-reveal/Fade";

import "./app.css";
import "../../../App.css";

const Tag = ({ text, currentTags, setCurrentTags }) => {
  const currentProjectsHandler = (e) => {
    e.target.classList.toggle("tagToggled");
    if ([...currentTags].includes(e.target.innerText)) {
      setCurrentTags([...currentTags].filter((item) => item !== e.target.innerText));
    } else {
      setCurrentTags([...currentTags, e.target.innerText]);
    }
  };
  return (
    <div onClick={currentProjectsHandler} className="tag">
      <Fade right cascade>
        {text}
      </Fade>
    </div>
  );
};

export default Tag;
