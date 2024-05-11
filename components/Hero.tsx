"use client";
import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { SliderInfo } from "@/app/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Hero() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop
      navigation
      slidesPerView={1}
      autoplay
      speed={2500}
    >
      {SliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid grid-cols-2 items-center my-5 px-5">
            <HeroText headerText={item.header} />
            <HeroImage imgSrc={item.imgSrc} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
