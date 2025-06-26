import logo from "../../assets/images/logo-light.webp"; // adjust your logo path

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 px-[10rem] py-16">
      <div className="flex flex-wrap justify-between gap-8 border-b border-gray-600 pb-12">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10 mb-4" />
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Our company</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>2005 Stokes Isle Apt. 896, Venaville 10010, USA</li>
            <li>info@yourdomain.com</li>
            <li>(+68) 120034509</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-white font-semibold mb-4">Instagram</h3>
          {/* You can replace this with a grid of images later */}
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-wrap justify-between items-center pt-6 text-sm text-gray-400">
        <div className="flex gap-8">
          <a href="#">Our blog</a>
          <a href="#">Latest Project</a>
          <a href="#">Contact Us</a>
        </div>
        <div>
          © 2025, Wilson. Made with <span className="text-red-500">❤️</span>{" "}
          HasThemes.
        </div>
      </div>
    </footer>
  );
};
