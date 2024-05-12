"use client";
import React, { useState } from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SliderInfo } from "@/app/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      // loop
      navigation
      slidesPerView={1}
      speed={2500}
      onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
    >
      {SliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid grid-cols-2 items-center my-5">
            <HeroText
              headerText={item.header}
              active={activeSlideIndex === item.id}
            />
            <HeroImage imgSrc={item.imgSrc} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
