import React, { useState, useEffect } from "react";

// Banner images
import banner1 from "../img/banner1.avif";
import banner2 from "../img/banner2.avif";
import banner3 from "../img/banner3.avif";

const Banner = () => {
  const banners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);
  const slideInterval = 5000; // 5 seconds

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, []);

  // Dot click
  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`w-full transition-all duration-700 ease-in-out ${
            index === current ? "block" : "hidden"
          }`}
        >
          <img src={banner} alt={`Banner ${index + 1}`} className="w-full" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
