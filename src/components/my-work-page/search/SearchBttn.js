import React from "react";
import Fade from "react-reveal/Fade";

import "./app.css";
import "../../../App.css";

const SearchBttn = ({ showSearch }) => {
  return (
    <div className="tag search-bttn" onClick={showSearch}>
      <Fade right cascade>
        Search
      </Fade>
    </div>
  );
};

export default SearchBttn;
