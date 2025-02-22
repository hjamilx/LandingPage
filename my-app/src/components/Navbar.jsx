import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 shadow-lg fixed w-full top-0 left-0 z-50 navbar-border">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="text-2xl font-extrabold text-white">
          MyBrand
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white text-lg items-center !font-bold">
          <a href="#" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-lg font-semibold bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out hover:bg-gray-200 hover:scale-110 hover:shadow-2xl active:scale-95">
           Get Started
            </a>

        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-indigo-600 shadow-lg py-6 flex flex-col items-center animate-fadeIn">
    <a href="#" className="text-lg font-semibold text-white py-3 w-full text-center transition duration-300 border-b border-gray-400/30 hover:bg-indigo-700 active:bg-indigo-800">
      Home
    </a>
    <a href="#" className="text-lg font-semibold text-white py-3 w-full text-center transition duration-300 border-b border-gray-400/30 hover:bg-indigo-700 active:bg-indigo-800">
      About
    </a>
    <a href="#" className="text-lg font-semibold text-white py-3 w-full text-center transition duration-300 border-b border-gray-400/30 hover:bg-indigo-700 active:bg-indigo-800">
      Services
    </a>
    <a href="#" className="text-lg font-semibold text-white py-3 w-full text-center transition duration-300 hover:bg-indigo-700 active:bg-indigo-800">
      Contact
    </a>
    <button className="mt-4 px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-md transition duration-300 
  hover:bg-gray-200 active:bg-gray-300 active:scale-95">
  Get Started
</button>

  </div>
)}



    </nav>
  );
};

export default Navbar;
