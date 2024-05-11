import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SliderInfo } from "@/app/data";

function Hero() {
  return SliderInfo.map((item) => (
    <div key={item.id} className="grid grid-cols-2 items-center my-5">
      <HeroText headerText={item.header} />
      <HeroImage imgSrc={item.imgSrc}/>
    </div>
  ));
}

export default Hero;
