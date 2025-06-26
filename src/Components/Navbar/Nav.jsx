import { useEffect, useState } from "react";
import logo_img from "../../assets/images/logo-light.webp"; // white version
import logo_white from "../../assets/images/logo-color.webp"; // blue/colored version

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  const [renderOverlay, setRenderOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = ["Home", "Portfolio", "Pages", "Blog", "Contact"];

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Overlay animation
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

  // Determine logo and hamburger color
  const showWhiteContent = !scrolled && !menuOpen;
  const logoSrc = showWhiteContent ? logo_img : logo_white;
  const hamburgerColor = showWhiteContent ? "white" : "black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          menuOpen
            ? "bg-black"
            : scrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="px-[20rem] py-6 flex justify-between items-center transition-all duration-500">
        {/* Logo */}
        <img src={logoSrc} alt="Logo" className="h-8 w-auto" />

        {/* Hamburger / Close */}
        <button className="z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="text-white text-3xl">&times;</span>
          ) : (
            <div className="flex flex-col justify-between w-8 h-6 cursor-pointer group">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ease-in-out`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span
                className={`block h-0.5 w-4 self-end transition-all duration-300 ease-in-out group-hover:w-6`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
              <span
                className={`block h-0.5 w-6 self-end transition-all duration-300 ease-in-out group-hover:w-4`}
                style={{ backgroundColor: hamburgerColor }}
              ></span>
            </div>
          )}
        </button>
      </div>

      {/* Fullscreen Overlay */}
      {renderOverlay && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out
            ${
              overlayVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }
          `}
        >
          {menuItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-2xl font-semibold mb-4 transform transition-all duration-500 ease-in-out
                ${
                  animateItems
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
              `}
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
