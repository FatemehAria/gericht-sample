import Image from "next/image";
import React from "react";
import First from "@/public/first_slide.svg";

function HeroImage() {
  return (
    <div className="relative h-[600px]">
      <div className="grid grid-cols-2 h-full">
        <div></div>
        <div className="bg-[#DCCA87] -rotate-180"></div>
        <div className="bg-[#DCCA87] -rotate-180"></div>
        <div></div>
      </div>
      <Image
        src={First}
        alt="1"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        width={520}
      />
    </div>
  );
}

export default HeroImage;
