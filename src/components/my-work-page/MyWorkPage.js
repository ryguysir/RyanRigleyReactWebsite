import React from "react";
import Fade from "react-reveal/Fade";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import "./app.css";
import "../../App.css";

import Tag from "./tags/Tag";
import Project from "./project-components/project/Project";
import SearchBttn from "./search/SearchBttn";
import SearchForm from "./search/SearchForm";
// import CompanyLogos from "./company-logos/CompanyLogos";

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
    "Trailers",
    "TV",
    "Browse All",
  ];
  const projects = require("./project-components/projectCreator.js");

  const projectTagSort = () => {
    let finalArr = [];
    projects.default.forEach((project) => {
      //this first for loop sets up a regex for the currentTag
      let count = 0;
      for (let i = 0; i < currentTags.length; i++) {
        const regex = new RegExp(`(${currentTags[i].split(" ").join("")})`, "gi");

        if (project.projectTags.join("*").split(" ").join("").match(regex) !== null) {
          count++;
        } else {
          break;
        }
      }
      if (count === currentTags.length) {
        finalArr.push(project);
      }
    });
    return finalArr;
  };

  const showSearch = (elem) => {
    setCurrentTags([]);
    elem.currentTarget.classList.toggle("tagToggled");
    let searchBar = document.querySelector(".tag-search-field");
    searchBar.classList.toggle("tag-search-field-hidden");
    searchBar.firstChild.focus();
  };

  return (
    <>
      <MetaTags>
        <title>Projects by Ryan Rigley</title>
        <meta
          id="meta-description"
          name="description"
          content="using tags, look through the projects created by Ryan Rigley"
        />
        <meta id="og-title" property="og:title" content="Projects by Ryan Rigley" />
      </MetaTags>
      <div className="my-work">
        {/*__________________________about me button______________________________*/}
        <Link to="/">
          <div
            className="my-work-bttn"
            onClick={() => {
              setCurrentTags([]);
            }}
          >
            <Fade top cascade>
              <i
                className="fas fa-chevron-left"
                style={{ marginRight: 20 + "px", marginLeft: -5 + "px" }}
              ></i>
              About Me
            </Fade>
          </div>
        </Link>

        {/*_______________________________tags___________________________________ */}
        <div id="tag-container">
          {tagsText.map((item) => (
            <Tag text={item} key={item} currentTags={currentTags} setCurrentTags={setCurrentTags} />
          ))}
          <SearchBttn showSearch={showSearch} />
          <SearchForm currentTags={currentTags} setCurrentTags={setCurrentTags} />
        </div>

        {/*_____________________________disclaimer________________________________*/}
        <div className={`disclaimer-container ${currentTags.length < 1 ? "" : "hidden"}`}>
          <Fade top cascade>
            <i className="fas fa-chevron-up"></i>
            <div className="disclaimer">Select tags from above and logos from below</div>
            <i className="fas fa-chevron-down"></i>
          </Fade>
        </div>

        {/*_____________________________projects____________________________________*/}
        <div className={`project-holder ${currentTags.length < 1 ? "hidden" : ""}`}>
          {projectTagSort().map((project) => (
            <Link key={Math.random() * 100} to={`/my-work/${project.projectTitle}`}>
              <Project
                key={project.projectTitle}
                award={project.award}
                projectTitle={project.projectTitle}
                projectText={project.projectText}
                imgSrc={project.imgSrc}
                projectVideos={project.projectVideos}
                videoPanelObject={videoPanelObject}
                setVideoPanelObject={setVideoPanelObject}
              />
            </Link>
          ))}
        </div>

        {/*___________________________company logos_____________________________*/}
        {/* <CompanyLogos currentTags={currentTags} setCurrentTags={setCurrentTags} /> */}
      </div>
    </>
  );
};

export default MyWorkPage;
