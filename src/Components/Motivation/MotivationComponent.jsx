import quoteImg from "../../assets/images/quote.webp";

export const MotivationSection = () => {
  return (
    <div className="flex px-[15rem] py-20 gap-16">
      {/* Left Side: Quote & Text */}
      <div className="w-1/2 relative">
        <img
          src={quoteImg}
          alt="quote"
          className="absolute w-20 top-0 left-0 opacity-20"
        />
        <h2 className="text-5xl font-semibold text-gray-800 leading-tight pl-16">
          Motivated
          <br />
          by the
          <br />
          desire <span className="text-blue-800 font-bold">to achieve.</span>
        </h2>
      </div>

      {/* Right Side: Features */}
      <div className="w-1/2 grid grid-cols-2 gap-x-10 gap-y-10">
        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
            {/* <FiMapPin className="text-gray-400" /> */}
            Modern Design
          </div>
          <p className="text-sm text-gray-600">
            Wilson’s design is perfect which can adapt to any market niche
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
            {/* <FiMonitor className="text-gray-400" /> */}
            User Experience
          </div>
          <p className="text-sm text-gray-600">
            We provide the user with an accessible and intuitive interface
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
            {/* <FiLightbulb className="text-gray-400" /> */}
            Powerful Editor
          </div>
          <p className="text-sm text-gray-600">
            Wilson has been packaged with an incredibly robust set of tools &
            plugins
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-gray-800 font-semibold">
            {/* <FiSearch className="text-gray-400" /> */}
            Fully Responsive
          </div>
          <p className="text-sm text-gray-600">
            In any kind of device, your website still looks amazing & catchy
          </p>
        </div>
      </div>
    </div>
  );
};
