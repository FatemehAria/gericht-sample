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
  textAlignment,
  spoonAlignment,
}: {
  flexDirection: string;
  rotateValue: string;
  text: string;
  title: string;
  textAlignment: string;
  spoonAlignment: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center gap-8`}
      style={{ alignItems: `${flexDirection}` }}
    >
      <div
        className={`flex flex-col gap-1`}
        style={{ alignItems: `${spoonAlignment}` }}
      >
        <h3
          className={`${Cormorant.className} text-[64px] !leading-none text-[#DCCA87]`}
        >
          {title}
        </h3>
        <Image
          src={Spoon}
          alt="spoon"
          style={{ rotate: `${rotateValue}deg` }}
        />
      </div>
      <p
        className={`text-[#AAAAAA] !leading-7 text-[16px] max-w-md`}
        style={{ textAlign: `${textAlignment}` }}
      >
        {text}
      </p>
      <HeroButton ButtonText="Know More" />
    </div>
  );
}

export default AboutSection;
