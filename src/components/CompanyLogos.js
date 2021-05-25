import React from "react";

const CompanyLogos = ({ currentTags, setCurrentTags }) => {
  const currentProjectsHandler = (e) => {
    e.target.firstChild.classList.toggle("company-logo-object-toggled");
    let val = e.target.firstChild.attributes[2].nodeValue;
    if ([...currentTags].includes(val)) {
      setCurrentTags([...currentTags].filter((item) => item !== val));
    } else {
      setCurrentTags([...currentTags, val]);
    }
  };
  return (
    <div className="company-logos-container">
      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="microsoft logo"
          alt="microsoft"
          data="./logos/microsoft_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="amazon logo"
          alt="amazon"
          data="./logos/amazon_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="indigo slate logo"
          alt="indigo slate"
          data="./logos/indigo slate_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="dell logo"
          alt="dell"
          data="./logos/dell_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="sap logo"
          alt="sap"
          data="./logos/sap_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="xbox logo"
          alt="xbox"
          data="./logos/xbox_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="valve logo"
          alt="valve"
          data="./logos/valve_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="netflix logo"
          alt="netflix"
          data="./logos/netflix_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="disney logo"
          alt="disney"
          data="./logos/disney_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="warner bros logo"
          alt="warner"
          data="./logos/warner bros_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="20th century fox logo"
          alt="20th"
          data="./logos/20th century fox_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="paramount logo"
          alt="paramount"
          data="./logos/paramount_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="prime video logo"
          alt="prime"
          data="./logos/prime video_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="universal logo"
          alt="universal"
          data="./logos/universal_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="lionsgate logo"
          alt="lionsgate"
          data="./logos/lionsgate_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="blumhouse logo"
          alt="blumhouse"
          data="./logos/blumhouse_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="stx logo"
          alt="stx"
          data="./logos/stx_logo.svg"
        ></object>
      </div>

      <div className="company-logo-holder" onClick={currentProjectsHandler}>
        <object
          className="company-logo-object"
          aria-labelledby="film arcade logo"
          alt="film arcade"
          data="./logos/film arcade_logo.svg"
        ></object>
      </div>
    </div>
  );
};

export default CompanyLogos;
