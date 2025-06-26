import { useState } from "react";
import { CloseIcon, PlayIcon } from "../../assets/icons/svgIcons"; // Assume you have a close icon
import bgImg from "../../assets/images/marketing-agency.webp";

export const AdRightSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Background section with Play Button */}
      <div
        className="w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            className="w-20 h-20 rounded-full border-4 border-white text-white flex items-center justify-center hover:scale-110 transition"
            onClick={() => setShowVideo(true)}
          >
            {PlayIcon}
          </button>
        </div>
      </div>

      {/* Popup Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-8 right-8 bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center text-2xl hover:bg-red-700 transition"
            onClick={() => setShowVideo(false)}
          >
            &times;
          </button>

          {/* YouTube iframe */}
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
    </>
  );
};
