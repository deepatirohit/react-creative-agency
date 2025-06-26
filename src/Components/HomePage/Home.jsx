import { useEffect, useState } from "react";
import img1 from "../../assets/images/slider-creative-business-1.jpg";
import img2 from "../../assets/images/slider-creative-business-2.jpg";
import img3 from "../../assets/images/slider-creative-business-3.jpg";
import { PlayIcon } from "../../assets/icons/svgIcons";

const slides = [
  {
    image: img1,
    heading: "Creative Business",
    subtitle: "",
    button: "Find Out More",
    styles: {
      heading: "text-[5.5rem] px-[15rem] py-[2rem] font-extrabold text-white",
      button:
        "ml-[15rem] px-10 py-3 border-2 rounded-full text-white hover:bg-white hover:text-blue-600 hover:border-black",
    },
  },
  {
    image: img2,
    heading: "Bring You the best\nexperiences",
    subtitle: "",
    button: PlayIcon,
    styles: {
      heading:
        "text-[6rem] font-bold text-white text-center mb-6 whitespace-pre-line",
      subtitle: "text-white text-center mt-4 text-lg px-4",
      wrapper:
        "absolute inset-0 flex flex-col items-center justify-center text-center px-4",
      button:
        "px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition",
    },
  },
  {
    image: img3,
    heading: "Art Direction",
    subtitle:
      "We Design & Build brands, campaigns & digital\nProjects for business large and small",
    button: "Find Out More",
    styles: {
      wrapper:
        "absolute inset-0 flex flex-col justify-center items-center text-center px-6",
      heading: "text-[6rem] font-bold text-white mb-4",
      subtitle: "text-[2rem] text-white max-w-2xl mb-6 whitespace-pre-line",
      button:
        "px-5 py-2 border-2 border-white text-white rounded-full hover:bg-black hover:text-white hover:border-none transition cursor-pointer",
    },
  },
];

export const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [showVideo, setShowVideo] = useState(false);

  const prev = () => {
    setDirection("prev");
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection("next");
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (showVideo) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showVideo]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide wrapper with direction-aware transform */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ease-in-out h-full`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0 relative transition-opacity duration-700"
            >
              <img src={slide.image} className="w-full h-full object-cover" />
              <div
                className={`${
                  slide.styles.wrapper ||
                  "absolute top-1/2 left-16 transform -translate-y-1/2 max-w-xl"
                }`}
              >
                <h1 className={`${slide.styles.heading} mb-4`}>
                  {slide.heading}
                </h1>

                {slide.subtitle && (
                  <p
                    className={`${slide.styles.subtitle || "text-white mt-4"}`}
                  >
                    {slide.subtitle}
                  </p>
                )}

                <button
                  className={`${slide.styles.button}`}
                  onClick={() => {
                    if (i === 1) setShowVideo(true);
                  }}
                >
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>
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

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            className="absolute top-8 right-8 bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center text-2xl hover:bg-red-700 transition"
            onClick={() => setShowVideo(false)}
          >
            &times;
          </button>
          <div className="w-full max-w-5xl aspect-video px-4">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/jwiIzNIK4dg?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
