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
      navigation
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={1}
      speed={3000}
      onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      spaceBetween={10}
      className="bg-black"
    >
      {SliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 items-center lg:px-5 my-5 lg:w-[90%] mx-auto">
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
