import { useState } from "react";
import img1 from "../../assets/images/slider-creative-business-1.jpg";
import img2 from "../../assets/images/slider-creative-business-2.jpg";
import img3 from "../../assets/images/slider-creative-business-3.jpg";

const slides = [
  {
    image: img1,
    heading: "Creative Business",
    button: "Find Out More",
    styles: {
      heading: "text-[5.5rem] px-[15rem] py-[2rem]  font-extrabold text-white",
      button:
        "ml-[15rem] px-10 py-3 border-2 rounded-full text-white hover:bg-white hover:text-blue-600 hover:border-black",
    },
  },
  {
    image: img2,
    heading: "Bring You the best experiences",
    button: "Explore Now",
    styles: {
      heading: "text-6xl flex items-center font-extrabold text-yellow-300",
      button:
        "px-8 py-2 bg-yellow-300 text-black rounded-full hover:bg-yellow-400",
    },
  },
  {
    image: img3,
    heading: "Innovate Future",
    button: "Join Us",
    styles: {
      heading: "text-5xl font-semibold text-blue-200",
      button:
        "px-5 py-2 border-2 border-blue-200 text-blue-200 rounded hover:bg-blue-200 hover:text-black",
    },
  },
];

export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const { image, heading, button, styles } = slides[index];

  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <img src={slide.image} className="w-full h-full object-cover" />
            <div className="absolute top-1/2 left-16 transform -translate-y-1/2 max-w-xl">
              <h1 className={`${slide.styles.heading} mb-4`}>
                {slide.heading}
              </h1>
              <button className={`${slide.styles.button}`}>
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        &#10094;
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
      >
        &#10095;
      </button>

      {/* Slide Counter */}
      <div className="absolute right-8 bottom-8 text-white text-sm font-light">
        {index + 1}/{slides.length}
      </div>
    </div>
  );
};
