//import libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

//import css
import "./app.css";

//import components
import ProjectVideo from "./ProjectVideo";

const ProjectPage = ({ match }) => {
  //setup project info
  const projectsArr = require("../projectCreator");
  const title = match.url.split("/")[2];
  const projectInfo = projectsArr.default.filter((item) => item.projectTitle === title);

  //current video number state
  const [vidNumber, setVidNumber] = useState(0);

  //functions
  const nextVid = () => {
    if (vidNumber < projectInfo[0].projectVideos.length - 1) {
      setVidNumber(vidNumber + 1);
    } else {
      setVidNumber(0);
    }
  };
  const previousVid = () => {
    if (vidNumber !== 0) {
      setVidNumber(vidNumber - 1);
    } else {
      setVidNumber(projectInfo[0].projectVideos.length - 1);
    }
  };

  return (
    <>
      <Fade>
        <div className="project-page-bg">
          <img
            alt={`background for ${projectInfo[0].projectTitle}`}
            src={`../${projectInfo[0].imgSrc}`}
          />
        </div>
      </Fade>
      <Fade cascade left>
        <div className="video-panel">
          <Link to="/my-work">
            <div className="return-to-projects">
              <p>Return to projects</p>
            </div>
          </Link>
          <div className="video-panel-iframe">
            <ProjectVideo videoSrc={projectInfo[0].projectVideos[vidNumber]} />
          </div>
          <div className="video-bttn-container">
            <div className="video-previous-bttn" onClick={previousVid}>
              <i className="fas fa-chevron-left"></i>
              Previous
            </div>
            <div className="video-panel-number">
              {`${vidNumber + 1} of ${projectInfo[0].projectVideos.length}`}
            </div>
            <div className="video-next-bttn" onClick={nextVid}>
              Next
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="project-share-container">
            <FacebookShareButton
              key={Math.random() * 100}
              url={`ryanrigley.com${match.url}`}
              quote={"Check out this video made by Ryan Rigley"}
              hashtag="#ryanrigley"
            >
              <FacebookIcon round={true}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton
              key={Math.random() * 100}
              url={`ryanrigley.com${match.url}`}
              quote={"Check out this video made by Ryan Rigley"}
              hashtag="#ryanrigley"
            >
              <TwitterIcon round={true}></TwitterIcon>
            </TwitterShareButton>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ProjectPage;
