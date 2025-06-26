import { useState, useEffect } from "react";
import logo_img from "../../assets/images/logo-light.webp"; // White logo
import logo_colors from "../../assets/images/logo-color.webp"; // Colored logo

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "Portfolio", "Pages", "Blog", "Contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Overlay animation logic
  useEffect(() => {
    if (menuOpen) {
      setRenderOverlay(true);
      setOverlayVisible(true);
      setTimeout(() => setAnimateItems(true), 100);
    } else {
      setAnimateItems(false);
      const itemsExitDelay = menuItems.length * 150 + 200;
      const timer1 = setTimeout(() => setOverlayVisible(false), itemsExitDelay);
      const timer2 = setTimeout(
        () => setRenderOverlay(false),
        itemsExitDelay + 500
      );
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [menuOpen]);

  const logoSrc = scrolled || menuOpen ? logo_colors : logo_img;
  const hamburgerBarColor = scrolled || menuOpen ? "bg-black" : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out ${
        scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-[18rem] py-6">
        {/* Logo */}
        <img src={logoSrc} alt="Logo" className="h-8 w-auto" />

        {/* Hamburger / Close Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="z-50">
          {menuOpen ? (
            <span className="text-white text-3xl">&times;</span>
          ) : (
            <div className="flex flex-col justify-between w-8 h-6 cursor-pointer group">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${hamburgerBarColor}`}
              ></span>
              <span
                className={`block h-0.5 w-4 self-end transition-all duration-300 group-hover:w-6 ${hamburgerBarColor}`}
              ></span>
              <span
                className={`block h-0.5 w-6 self-end transition-all duration-300 group-hover:w-4 ${hamburgerBarColor}`}
              ></span>
            </div>
          )}
        </button>
      </div>

      {/* Fullscreen Overlay */}
      {renderOverlay && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            overlayVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-2xl font-semibold mb-4 transform transition-all duration-500 ease-in-out ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
