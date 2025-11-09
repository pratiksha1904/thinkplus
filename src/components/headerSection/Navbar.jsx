import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="ThinkPlus Logo" className="h-15 w-25" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-[#FB2576] font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-[#FB2576] font-medium">About Us</Link>

  {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className=" flex items-center space-x-1 text-white font-medium">
              <span>Services</span>
              <span className="text-xs">▼</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-black text-white shadow-lg rounded-md py-2 w-48  ">
                <Link
                  to="/services/web-development"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                 CAT
                </Link>
                <Link
                  to="/services/ui-ux-design"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                 IPMAT
                </Link>
                <Link
                  to="/services/seo-marketing"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  CLAT
                </Link>
                <Link
                  to="/services/seo-marketing"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                 IQ+
                </Link>
                <Link
                  to="/services/seo-marketing"
                  className="block px-4 py-2 hover:bg-gray-900"
                >
                  Career Counselling
                </Link>
              </div>
            )}
          </div>          <Link to="/testimonials" className="text-white hover:text-[#FB2576] font-medium">Testimonials</Link>
          <Link to="/blog" className="text-white hover:text-[#FB2576] font-medium">Blog</Link>
          <Link to="/contact" className="text-white hover:text-[#FB2576] font-medium">Contact</Link>
        </div>

        {/* Join Now Button */}
        <div className="hidden md:block">
          <Link
            to="/join"
            className="bg-[#FB2576] text-white px-5 py-2 rounded-lg hover:bg-[#FF3796] transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Gradient Shadow Under Navbar */}
      <div className="absolute -bottom-2 left-0 w-full h-4 bg-linear-to-b from-[#371a53] via-[#0f0f0f] to-transparent pointer-events-none"></div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="flex flex-col items-center py-3 space-y-3">
            <Link onClick={() => setIsOpen(false)} to="/" className="text-white hover:text-[#FB2576]">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="/about" className="text-white hover:text-[#FB2576]">About Us</Link>
            <Link onClick={() => setIsOpen(false)} to="/services" className="text-white hover:text-[#FB2576]">Services</Link>
            <Link onClick={() => setIsOpen(false)} to="/testimonials" className="text-white hover:text-[#FB2576]">Testimonials</Link>
            <Link onClick={() => setIsOpen(false)} to="/blog" className="text-white hover:text-[#FB2576]">Blog</Link>
            <Link onClick={() => setIsOpen(false)} to="/contact" className="text-white hover:text-[#FB2576]">Contact</Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/join"
              className="bg-[#FB2576] text-white px-4 py-2 rounded-lg hover:bg-[#FF3796] transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
