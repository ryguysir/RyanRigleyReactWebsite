import React, { useState } from "react";
import "./App.css";

//import components
import Tag from "./components/Tag";
import Project from "./components/Project";
import SearchBttn from "./components/SearchBttn";
import SearchForm from "./components/SearchForm";
import PrimaryLottieAnim from "./components/PrimaryLottieAnim";
import AboutMeSection from "./components/AboutMeSection";
import ContactMe from "./components/ContactMe";
import VideoPanel from "./components/VideoPanel";

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
        <AboutMeSection
          myNameIs={true}
          vidSrc={"./images/Ryan Water Bender.png"}
          body="Video Editor | Motion Graphics Artist | 3D Generalist | Web Developer"
          vidOrImage={false}
          buttons={true}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
        />
        <AboutMeSection
          myNameIs={false}
          vidSrc={"./videos/Video Editor Reel.mp4"}
          body="Over a decade of experience editing videos of all types, from blockbuster trailers to corporate event pieces."
          vidOrImage={true}
          buttons={false}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
        />
        <AboutMeSection
          myNameIs={false}
          vidSrc={"./videos/Motion Graphics Reel.mp4"}
          body="I've won several awards for putting low par designs on shitty movies."
          vidOrImage={true}
          buttons={false}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
        />
        <ContactMe scrollToTop={scrollToTop} />
      </div>
      <div className={`my-work ${showAboutMe ? "hidden" : ""}`}>
        {/* video panel */}
        <VideoPanel videoPanelObject={videoPanelObject} setVideoPanelObject={setVideoPanelObject} />

        {/* about me button */}
        <div
          onClick={() => {
            setShowAboutMe(!showAboutMe);
          }}
          className="my-work-bttn"
        >
          About Me
        </div>

        {/* search form */}

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

        {/* lottie animation */}
        <PrimaryLottieAnim currentTags={currentTags} />
      </div>
    </>
  );
}

export default App;
