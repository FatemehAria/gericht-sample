import Image from "next/image";
import React from "react";
import G from "@/assets/G.png";
import Spoon from "@/public/spoon.svg";
import HeroButton from "./HeroButton";
import Knife from "@/assets/knife.png";
import { Cormorant_Upright } from "next/font/google";
import AboutSection from "./AboutSection";

const Cormorant = Cormorant_Upright({
  weight: "600",
  subsets: ["latin"],
});

function About() {
  return (
    <div className="bg-about-background bg-no-repeat bg-center bg-cover grid grid-cols-3 absolute w-[100vw] left-0 h-[700px] tracking-wide">
      <AboutSection
        flexDirection="end"
        rotateValue="180"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et."
        title="About Us"
      />
      <div>
        <Image
          src={G}
          alt="gericht"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          width={300}
        />
        <Image
          src={Knife}
          alt="knife"
          height={600}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
      </div>
      <div>
        <h3>Our History</h3>
        <Image src={Spoon} alt="spoon" />
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <HeroButton ButtonText="Know More" />
      </div>
    </div>
  );
}

export default About;
