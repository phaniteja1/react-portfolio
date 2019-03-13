import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const photos = [
  {
    src: "https://i.imgur.com/04k0g5V.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/YRGYyjS.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/nFcLnS4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/kai1AjP.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/Pmo1lWa.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/WIOtqcP.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/4xtCMRM.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/dEDu9QV.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://i.imgur.com/yQRD9XY.jpg",
    width: 4,
    height: 3
  }
];

function Photography() {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxIsOpen, setLightBoxVisibility] = useState(false);

  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setLightBoxVisibility(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightBoxVisibility(false);
  };
  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };
  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };
  return (
    <div className="photography">
      <Gallery photos={photos} onClick={openLightbox} />
      <Lightbox
        images={photos}
        onClose={closeLightbox}
        onClickPrev={gotoPrevious}
        onClickNext={gotoNext}
        currentImage={currentImage}
        isOpen={lightboxIsOpen}
      />
    </div>
  );
}

export default Photography;
