import React from "react";
import "./app.css";

const LogoObject = ({ label, alt, data, currentProjectsHandler }) => {
  return (
    <div className="company-logo-holder" onClick={currentProjectsHandler}>
      <object
        className="company-logo-object"
        aria-labelledby={label}
        alt={alt}
        data={data}
      ></object>
    </div>
  );
};

export default LogoObject;
