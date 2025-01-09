import React, { useState } from "react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? Images.length - 1 : prev - 1));

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % Images.length);

  return (
    <div className="relative mx-auto" onMouseEnter={nextSlide}>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "400px", backgroundSize: "cover" }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0" onMouseLeave={prevSlide}></div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
