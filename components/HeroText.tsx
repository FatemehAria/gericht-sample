import { Cormorant_Upright } from "next/font/google";
import Image from "next/image";
import React from "react";
import Spoon from "@/public/spoon.svg";
import "./herotext.css";

const Cormorant = Cormorant_Upright({
  weight: "700",
  subsets: ["latin"],
});

function HeroText({
  headerText,
  active,
}: {
  headerText: string;
  active: boolean;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className={`${Cormorant.className} tracking-wide text-[23px]`}>
          Chase the new Flavour
        </span>
        <Image src={Spoon} alt="spoon" />
      </div>
      <h2
        className={`${Cormorant.className} ${
          active ? "fade-in" : "fade-out"
        } text-[90px] max-w-md leading-none text-[#DCCA87] hero-text`}
      >
        {headerText}
      </h2>
      <p className="text-[#AAAAAA] max-w-md tracking-wide !leading-7">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <div className="flex justify-start">
        <button
          className={`text-black bg-[#DCCA87] ${Cormorant.className} rounded-sm p-2`}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default HeroText;
