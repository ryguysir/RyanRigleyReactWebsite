import React from "react";
import Slide from "react-reveal/Slide";

import "./app.css";
import "../../../App.css";

import LogoObject from "./LogoObject";

const CompanyLogos = ({ currentTags, setCurrentTags }) => {
  const logoData = require("./companyLogosData.js");

  const currentProjectsHandler = (e) => {
    e.target.firstChild.classList.toggle("company-logo-object-toggled");
    let val = e.target.firstChild.attributes[2].nodeValue;
    console.log(val);
    if ([...currentTags].includes(val)) {
      setCurrentTags([...currentTags].filter((item) => item !== val));
    } else {
      setCurrentTags([...currentTags, val]);
    }
  };
  const scrollRight = () => {
    let elem = document.getElementsByClassName("company-logos-container")[0];
    let curScrollPos = document.getElementsByClassName("company-logos-container")[0].scrollLeft;
    elem.scroll(curScrollPos + 200, 0);
  };
  const scrollLeft = () => {
    let elem = document.getElementsByClassName("company-logos-container")[0];
    let curScrollPos = document.getElementsByClassName("company-logos-container")[0].scrollLeft;
    elem.scroll(curScrollPos - 200, 0);
  };

  return (
    <>
      <div className="company-logos-container-arrow-left" onClick={scrollLeft}>
        <i className="fas fa-chevron-left"></i>
      </div>

      <div className="company-logos-container-arrow-right" onClick={scrollRight}>
        <i className="fas fa-chevron-right"></i>
      </div>
      <Slide bottom>
        <div className="company-logos-container">
          {logoData.default.map((item) => {
            return (
              <LogoObject
                key={item.data}
                label={item.label}
                alt={item.alt}
                data={item.data}
                currentProjectsHandler={currentProjectsHandler}
              />
            );
          })}
        </div>
      </Slide>
    </>
  );
};

export default CompanyLogos;
