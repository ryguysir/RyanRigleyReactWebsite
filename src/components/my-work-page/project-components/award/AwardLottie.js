import React from "react";

import "./app.css";
import "../../../../App.css";

const AwardLottie = ({ award }) => {
  return (
    <img
      loading="lazy"
      alt="award"
      src={`${award === "key" ? "./images/clioAward.png" : "./images/goldenTrailer.png"}`}
      className="award"
    />
  );
};

export default AwardLottie;
