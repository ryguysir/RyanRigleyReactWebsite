import React, { useEffect } from "react";
import ReactGa from "react-ga";
import MetaTags from "react-meta-tags";

import "./app.css";
import "../../App.css";

import AboutMeSection from "./section/AboutMeSection";
import ContactMe from "./contact-me/ContactMe";

const AboutMePage = ({ showAboutMe, setShowAboutMe }) => {
  useEffect(() => {
    ReactGa.initialize("G-3NF43NTEZV");

    //monitor page views
    ReactGa.pageview("/");
    ReactGa.pageview("/my-work");
  }, []);

  const scrollToContactMe = () => {
    let contactMe = document.getElementById("contact-me-holder").getBoundingClientRect().top;
    document.getElementsByClassName("about-me")[0].scroll(0, contactMe);
  };
  const scrollToTop = () => {
    document.getElementsByClassName("about-me")[0].scroll(0, 0);
  };
  return (
    <>
      <MetaTags>
        <title>Ryan Rigley</title>
        <meta id="meta-description" name="description" content="learn about Ryan Rigley" />
        <meta id="og-title" property="og:title" content="Ryan Rigley" />
      </MetaTags>
      <div className="about-me">
        {/* header */}
        <AboutMeSection
          myNameIs={true}
          vidSrc={""}
          body="Video Editor | Motion Graphics Artist | 3D Generalist | Web Developer"
          vidOrImage={false}
          buttons={true}
          showAboutMe={showAboutMe}
          setShowAboutMe={setShowAboutMe}
          scrollToContactMe={scrollToContactMe}
          centerOrFooter={false}
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
    </>
  );
};

export default AboutMePage;
