import React, { useRef } from "react";
import logo1 from "../../assets/images/brand_01.webp";
import logo2 from "../../assets/images/brand_02.webp";
import logo3 from "../../assets/images/brand_03.webp";
import logo4 from "../../assets/images/brand_04.webp";
import logo5 from "../../assets/images/brand_05.webp";
import logo6 from "../../assets/images/brand_06.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const LogoCarousel = () => {
  const trackRef = useRef(null);

  const handleMouseMove = (e) => {
    const track = trackRef.current;
    const trackWidth = track.scrollWidth;
    const containerWidth = track.clientWidth;
    const mouseX = e.clientX;
    const scrollLeft =
      (mouseX / window.innerWidth) * (trackWidth - containerWidth);
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  return (
    <div
      className="w-full overflow-hidden py-16 bg-white flex justify-center"
      onMouseMove={handleMouseMove}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-16 px-10 overflow-x-auto whitespace-nowrap transition-all duration-300 ease-in-out scrollbar-hide"
      >
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`logo-${idx}`}
            className="h-16 w-auto object-contain filter grayscale brightness-0 hover:brightness-100 transition duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};
