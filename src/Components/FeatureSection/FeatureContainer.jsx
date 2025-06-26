import img from "../../assets/images/math-tool.png";
import text_img from "../../assets/images/text.png";
import geo from "../../assets/images/geo.png";

export const FeaturesContainer = () => {
  return (
    <div className="relative z-20 -mt-[8rem] px-[10rem] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 justify-center pt-20 pb-16 ">
        {/* Card 1 */}
        <div className="bg-white flex-1 text-center px-6 py-12 shadow-md border-b-4 border-blue-800 transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img src={img} alt="Modern design" className="mx-auto h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Modern design</h3>
          <p className="text-gray-500">
            Wilson’s design is perfect which can adapt to any market niche
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white flex-1 text-center px-6 py-12 shadow-md border-b-4 border-blue-800 transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            src={text_img}
            alt="User Experience"
            className="mx-auto h-16 mb-6"
          />
          <h3 className="text-xl font-semibold mb-3">User Experience</h3>
          <p className="text-gray-500">
            We provide the user with an accessible and intuitive interface
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white flex-1 text-center px-6 py-12 shadow-md border-b-4 border-blue-800 transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
          <img src={geo} alt="Powerful Editor" className="mx-auto h-16 mb-6" />
          <h3 className="text-xl font-semibold mb-3">Powerful Editor</h3>
          <p className="text-gray-500">
            Wilson has been packaged with an incredibly robust set of tools
          </p>
        </div>
      </div>
    </div>
  );
};
