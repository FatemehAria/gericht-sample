import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <div className="grid grid-cols-2 items-center my-5">
      <HeroText />
      <HeroImage />
    </div>
  );
}

export default Hero;
