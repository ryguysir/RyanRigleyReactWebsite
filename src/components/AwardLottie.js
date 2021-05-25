import React from "react";

const AwardLottie = ({ award }) => {
  return (
    <lottie-player
      class={`award-lottie ${award === "key" || award === "golden" ? "" : "hidden"}`}
      src={`${
        award === "key"
          ? "https://assets8.lottiefiles.com/packages/lf20_howv2r3o.json"
          : "https://assets8.lottiefiles.com/packages/lf20_fja1ejkn.json"
      }`}
      autoplay
      loop
    ></lottie-player>
  );
};

export default AwardLottie;
