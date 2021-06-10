import React from "react";

import { Link } from "react-router-dom";
import "./app.css";
import "../../App.css";

import Tag from "./tags/Tag";
import Project from "./project-components/project/Project";
import SearchBttn from "./search/SearchBttn";
import SearchForm from "./search/SearchForm";
import VideoPanel from "./project-components/video-panel/VideoPanel";
import CompanyLogos from "./company-logos/CompanyLogos";

const MyWorkPage = ({ currentTags, setCurrentTags, videoPanelObject, setVideoPanelObject }) => {
  //variables
  const tagsText = [
    "Corporate",
    "Technology",
    "Action",
    "Adventure",
    "Drama",
    "Romance",
    "Horror",
    "Sci-Fi",
    "Comedy",
    "Historical",
    "Awards",
    "Favorites",
    "Browse All",
  ];
  const projects = require("./project-components/projectCreator.js");

  //functions
  const projectTagSort = () => {
    if (currentTags.length > 0) {
      return projects.default.filter((project) => {
        let count = 0;
        for (let i = 0; i < currentTags.length; i++) {
          if (project.projectTags.includes(currentTags[i].toLowerCase())) {
            count++;
          } else {
            break;
          }
        }
        return count === currentTags.length ? project : null;
      });
    } else {
      return [];
    }
  };
  const showSearch = (elem) => {
    elem.currentTarget.classList.toggle("tagToggled");
    let searchBar = document.querySelector(".tag-search-field");
    searchBar.classList.toggle("tag-search-field-hidden");
    searchBar.firstChild.focus();
  };
  return (
    <div className="my-work">
      {/* video panel */}
      <VideoPanel videoPanelObject={videoPanelObject} setVideoPanelObject={setVideoPanelObject} />

      {/* about me button */}
      <Link to="/">
        <div className="my-work-bttn">
          <i
            className="fas fa-chevron-left"
            style={{ marginRight: 20 + "px", marginLeft: -5 + "px" }}
          ></i>
          About Me
        </div>
      </Link>

      {/* tags */}
      <div id="tag-container">
        {tagsText.map((item) => (
          <Tag text={item} key={item} currentTags={currentTags} setCurrentTags={setCurrentTags} />
        ))}
        <SearchBttn showSearch={showSearch} />
        <SearchForm currentTags={currentTags} setCurrentTags={setCurrentTags} />
      </div>

      {/* projects */}
      <div id="project-holder">
        {projectTagSort().map((project) => (
          <>
            <Project
              award={project.award}
              projectTitle={project.projectTitle}
              projectText={project.projectText}
              imgSrc={project.imgSrc}
              projectVideos={project.projectVideos}
              key={project.projectTitle}
              videoPanelObject={videoPanelObject}
              setVideoPanelObject={setVideoPanelObject}
            />
          </>
        ))}
      </div>

      {/* company logos */}
      <CompanyLogos currentTags={currentTags} setCurrentTags={setCurrentTags} />
    </div>
  );
};

export default MyWorkPage;
