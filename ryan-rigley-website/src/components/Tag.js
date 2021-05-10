import React from "react";

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
      {text}
    </div>
  );
};

export default Tag;
