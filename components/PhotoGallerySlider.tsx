"use client";
import { PhotoGallerySliderInfo } from "@/app/data";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./photogalleryslider.css";

function PhotoGallerySlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay
      loop
      slidesPerView={1}
      speed={3000}
      spaceBetween={10}
      className="bg-black my-8"
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {PhotoGallerySliderInfo.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="image-container">
            <Image src={item.imgSrc} alt={`${item.id}`} className="lg:h-[350px] h-[500px]" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PhotoGallerySlider;
