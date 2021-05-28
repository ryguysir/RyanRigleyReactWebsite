import React from "react";

const AwardLottie = ({ award }) => {
  return (
    <img
      loading="lazy"
      alt="award"
      src={`${award === "key" ? "./images/clioAward.png" : "./images/goldenTrailer.png"}`}
      className="award-lottie"
    />
  );
};

export default AwardLottie;
