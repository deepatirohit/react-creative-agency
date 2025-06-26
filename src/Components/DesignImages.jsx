import img1 from "../assets/images/01.webp";
import img2 from "../assets/images/02.webp";
import img3 from "../assets/images/03.webp";
import img4 from "../assets/images/04.webp";
import img5 from "../assets/images/05.webp";

const imageData = [
  { src: img1, title: "Fieda Magazine", subtitle: "Mockup" },
  { src: img2, title: "Hand Sculpture", subtitle: " Modeling" },
  { src: img3, title: "The monster", subtitle: "Branding" },
  { src: img4, title: "Sport", subtitle: "Modeling" },
  { src: img5, title: "Fieda Magazine", subtitle: "Mockup" },
];

export const DesignImages = () => {
  return (
    <div className="flex overflow-x-auto w-full">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="w-1/5 aspect-square flex-shrink-0 relative group cursor-pointer"
        >
          <img
            src={item.src}
            alt={`Design ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center text-white text-center px-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm mt-1">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
