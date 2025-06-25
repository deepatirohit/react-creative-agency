import { useState, useEffect } from "react";
import logo_img from "../../assets/images/logo-light.webp";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const menuItems = ["Home", "Portfolio", "Pages", "Blog", "Contact"];

  useEffect(() => {
    if (menuOpen) {
      setRenderOverlay(true); // mount immediately
      setOverlayVisible(true); // show overlay
      setTimeout(() => setAnimateItems(true), 100); // animate items in
    } else {
      // fade out items first
      setAnimateItems(false);

      // after items are out, hide overlay with animation
      const itemsExitDelay = menuItems.length * 150 + 200;
      const timer1 = setTimeout(() => setOverlayVisible(false), itemsExitDelay);

      // finally remove overlay from DOM
      const timer2 = setTimeout(
        () => setRenderOverlay(false),
        itemsExitDelay + 500
      ); // matches overlay fade-out
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [menuOpen]);

  return (
    <nav className=" px-[20rem] py-[2rem] bg-transparent absolute top-0 left-0 w-full z-20">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src={logo_img} alt="Logo" className="h-8 w-auto" />

        {/* Hamburger / Close Button */}
        <button className="z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="text-white text-3xl">&times;</span>
          ) : (
            <div className="flex flex-col justify-between w-8 h-6 cursor-pointer group">
              <span className="block h-0.5 bg-white w-full transition-all duration-300 ease-in-out"></span>
              <span className="block h-0.5 bg-white w-4 self-end transition-all duration-300 ease-in-out group-hover:w-6"></span>
              <span className="block h-0.5 bg-white w-6 self-end transition-all duration-300 ease-in-out group-hover:w-4"></span>
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
          {menuItems.map((item, index) => {
            const delay = index * 150;
            return (
              <a
                key={item}
                href="#"
                className={`text-2xl font-semibold mb-4 transform transition-all duration-500 ease-in-out ${
                  animateItems
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6 "
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};
