import React from "react";

const PrimaryLottieAnim = ({ currentTags }) => {
  return (
    <lottie-player
      class={`primary-lottie-anim ${currentTags.length > 0 ? "hidden" : ""}`}
      src="https://assets1.lottiefiles.com/packages/lf20_3rjibo7e.json"
      autoplay
      loop
    ></lottie-player>
  );
};

export default PrimaryLottieAnim;
