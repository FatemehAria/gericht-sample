import React from "react";
import HeroButton from "./HeroButton";
import { Cormorant_Upright } from "next/font/google";
import Spoon from "@/public/spoon.svg";
import Image from "next/image";

const Cormorant = Cormorant_Upright({
  weight: "600",
  subsets: ["latin"],
});

function AboutSection({
  flexDirection,
  rotateValue,
  text,
  title,
}: {
  flexDirection: string;
  rotateValue: string;
  text: string;
  title: string;
}) {
  return (
    <div
      className={`flex flex-col items-${flexDirection} justify-center gap-8`}
    >
      <div className="flex flex-col gap-1 items-end">
        <h3
          className={`${Cormorant.className} text-[64px] !leading-none text-[#DCCA87]`}
        >
          {title}
        </h3>
        <Image src={Spoon} alt="spoon" className={`rotate-${rotateValue}`} />
      </div>
      <p className="text-right text-[#AAAAAA] !leading-7 text-[16px]">
        {text}
      </p>
      <HeroButton ButtonText="Know More" />
    </div>
  );
}

export default AboutSection;
