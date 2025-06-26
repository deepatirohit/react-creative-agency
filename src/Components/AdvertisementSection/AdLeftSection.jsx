export const AdLeft = () => {
  return (
    <div className="w-1/2 bg-[#1e1e1e] text-white flex flex-col items-start justify-center px-[10rem]">
      <h2 className="text-5xl font-semibold mb-8">The ultimate choice.</h2>
      <div className="flex gap-6">
        <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition">
          View Demo
        </button>
        <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition">
          Purchase
        </button>
      </div>
    </div>
  );
};
