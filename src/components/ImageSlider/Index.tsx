import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { Slider } from "./styles";

interface ImageSliderProps {
  images: string[];
}

const Index = ({ images }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <Slider>
      {images.length > 1 && (
        <AiOutlineArrowLeft className="left arrows" onClick={prevSlide} />
      )}

      {images.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={image} />}
        </div>
      ))}

      {images.length > 1 && (
        <AiOutlineArrowRight className="right arrows" onClick={nextSlide} />
      )}
    </Slider>
  );
};

export default Index;
