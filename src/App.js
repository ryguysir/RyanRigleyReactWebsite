import React, { useState } from "react";
import "./App.css";

//import components
import Tag from "./components/my-work-page/tags/Tag";
import Project from "./components/my-work-page/project-components/project/Project";
import SearchBttn from "./components/my-work-page/search/SearchBttn";
import SearchForm from "./components/my-work-page/search/SearchForm";
import AboutMeSection from "./components/about-me-page/about-me-page-components/section/AboutMeSection";
import ContactMe from "./components/aboutMe/contactMe/ContactMe";
import VideoPanel from "./components/my-work-page/project-components/video-panel/VideoPanel";
import CompanyLogos from "./components/my-work-page/company-logos/CompanyLogos";

function App() {
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
  const projects = require("./modules/projectCreator");

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
  const scrollToContactMe = () => {
    let contactMe = document.getElementById("contact-me-holder").getBoundingClientRect().top;
    document.getElementsByClassName("about-me")[0].scroll(0, contactMe);
  };
  const scrollToTop = () => {
    document.getElementsByClassName("about-me")[0].scroll(0, 0);
  };

  //states
  const [currentTags, setCurrentTags] = useState([]);
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [videoPanelObject, setVideoPanelObject] = useState({
    hidden: true,
    videos: [],
    videoNumber: 0,
  });

  return (
    <>
      <div className={`about-me ${showAboutMe ? "" : "hidden"}`}>
        {/* header */}
        <AboutMeSection
          myNameIs={true}
          vidSrc={"./images/paperTexture.jpg"}
          body="Video Editor | Motion Graphics Artist | 3D Generalist | Web Developer"
          vidOrImage={false}
          buttons={true}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
          centerOrFooter={false}
          currentTags={currentTags}
        />

        {/* video editor */}
        <AboutMeSection
          myNameIs={false}
          vidSrc={"./videos/Video Editor Reel.mp4"}
          body="Over a decade of experience editing videos of all types, from blockbuster trailers to corporate event pieces."
          vidOrImage={true}
          buttons={false}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
          centerOrFooter={true}
        />

        {/* motion graphics */}
        <AboutMeSection
          myNameIs={false}
          vidSrc={"./videos/Motion Graphics Reel.mp4"}
          body="Animated motion graphics, title design, 3D design, motion tracking, and compositing are all examples of skills that I can utilize in taking any video to the next level."
          vidOrImage={true}
          buttons={false}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
          centerOrFooter={true}
        />

        <ContactMe scrollToTop={scrollToTop} />
      </div>
      <div className={`my-work ${showAboutMe ? "hidden" : ""}`}>
        {/* backgrounds */}
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>

        {/* video panel */}
        <VideoPanel videoPanelObject={videoPanelObject} setVideoPanelObject={setVideoPanelObject} />

        {/* about me button */}
        <div
          onClick={() => {
            setShowAboutMe(!showAboutMe);
          }}
          className="my-work-bttn"
        >
          <i
            className="fas fa-chevron-left"
            style={{ marginRight: 20 + "px", marginLeft: -5 + "px" }}
          ></i>
          About Me
        </div>

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
            <Project
              award={project.award}
              projectTitle={project.projectTitle}
              projectText={project.projectText}
              imgSrc={project.imgSrc}
              projectVideos={project.projectVideos}
              key={Math.random() * 1000}
              videoPanelObject={videoPanelObject}
              setVideoPanelObject={setVideoPanelObject}
            />
          ))}
        </div>

        {/* company logos */}
        <CompanyLogos currentTags={currentTags} setCurrentTags={setCurrentTags} />
      </div>
    </>
  );
}

export default App;
