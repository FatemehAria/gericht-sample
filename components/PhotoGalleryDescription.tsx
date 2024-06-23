import React from "react";
import TitlesAndSubs from "./TitlesAndSubs";
import HeroButton from "./HeroButton";

function PhotoGalleryDescription() {
  return (
    <div className="grid grid-cols-1 gap-[10%]">
      <TitlesAndSubs sub="Photo Gallery" title="Instagram" direction="start" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis
        ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <div className="flex justify-start">
        <HeroButton ButtonText="View More" />
      </div>
    </div>
  );
}

export default PhotoGalleryDescription;
