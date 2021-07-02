//import libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import MetaTags from "react-meta-tags";
import Disqus from "disqus-react";

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
  const [disqusReveal, setDisqusReveal] = useState(false);

  //set up disquss panel
  const disqusShortname = "ryan-rigley";
  const disqusConfig = {
    url: window.location.origin,
    identifier: projectInfo[0].projectVideos[0],
    title: projectInfo[0]?.projectTitle,
  };

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
      <MetaTags>
        <title>{projectInfo[0].projectTitle}</title>
        <meta
          id="meta-description"
          name="description"
          content={`${projectInfo[0].projectTitle} videos created by Ryan Rigley`}
        />
        <meta id="og-title" property="og:title" content={`${projectInfo[0].projectTitle}`} />
        <meta id="og-image" property="og:image" content={`${projectInfo[0].imgSrc}`} />
      </MetaTags>
      <Fade>
        <div className="project-page-bg">
          <img
            alt={`background for ${projectInfo[0].projectTitle}`}
            src={`../${projectInfo[0].imgSrc}`}
          />
        </div>
      </Fade>
      <div className="project-page-container">
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

            <div
              className="project-page-disqus-reveal"
              onClick={() => {
                setDisqusReveal(!disqusReveal);
              }}
            >
              <i className=""></i> Comments
              <i className={`${disqusReveal ? "fas fa-chevron-down" : "far fa-comment"}`}></i>
            </div>
            <div className={`project-page-disqus ${disqusReveal ? "" : "hidden"}`}>
              <Disqus.DiscussionEmbed
                key={projectInfo[0]?.projectTitle}
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ProjectPage;
