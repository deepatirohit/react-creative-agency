import img from "../../assets/images/multipurpose-ultimate-laptop.webp";

export const FeaturesInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-24 px-[18rem] bg-[#f1f5f9]">
      {/* Left content */}
      <div className="max-w-xl">
        <div className="text-blue-900 font-semibold mb-2">Intro</div>
        <h3 className="font-bold text-5xl leading-tight text-gray-800 mb-6">
          Modern <span className="block">creative agency.</span>
        </h3>
        <p className="text-gray-500 mb-8">
          Wilson is a new incredibly versatile WordPress theme that has a
          special codeless page builder. Even several demos are included!
        </p>
        <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition">
          More Info
        </button>
      </div>

      {/* Right image */}
      <div className="mt-12 md:mt-0 md:ml-16 max-w-xl">
        <img src={img} alt="Laptop" className="w-full h-auto" />
      </div>
    </div>
  );
};
