import React from "react";
import PhotoGalleryDescription from "./PhotoGalleryDescription";
import PhotoGallerySlider from "./PhotoGallerySlider";

function PhotoGallery() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 bg-black py-[3%] lg:pl-[5%] gap-5 px-[3%] lg:pr-0">
      <div className="col-span-1">
        <PhotoGalleryDescription />
      </div>
      <div className="col-span-2">
        <PhotoGallerySlider />
      </div>
    </div>
  );
}

export default PhotoGallery;
