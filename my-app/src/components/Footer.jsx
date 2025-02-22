import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1F38] text-white py-10 px-6 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left md:text-center">
        
        {/* Left Section - Brand */}
        <div className="flex flex-col items-start md:items-center border-b border-[#7B97E0] pb-6 md:border-none">
          <h2 className="text-xl font-bold">YourBrand</h2>
          <p className="text-[#E0E6F9] mt-2 max-w-xs md:max-w-none">
            Empowering your business with top-tier solutions.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col items-start md:items-center border-b border-[#7B97E0] pb-6 md:border-none">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#E0E6F9]">About</a></li>
            <li><a href="#" className="hover:text-[#E0E6F9]">Services</a></li>
            <li><a href="#" className="hover:text-[#E0E6F9]">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#E0E6F9]">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Follow Us */}
        <div className="flex flex-col items-start md:items-center pb-6">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-start md:justify-center mt-4 space-x-3">
          <a href="#" 
   aria-label="Follow us on Facebook"
   className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6C88DD] hover:bg-[#94A8E5] transition">
  <FaFacebookF className="text-white text-lg" />
</a>

<a href="#" 
   aria-label="Follow us on Twitter"
   className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6C88DD] hover:bg-[#94A8E5] transition">
  <FaTwitter className="text-white text-lg" />
</a>

<a href="#" 
   aria-label="Connect with us on LinkedIn"
   className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6C88DD] hover:bg-[#94A8E5] transition">
  <FaLinkedinIn className="text-white text-lg" />
</a>

<a href="#" 
   aria-label="Follow us on Instagram"
   className="w-9 h-9 flex items-center justify-center rounded-full bg-[#6C88DD] hover:bg-[#94A8E5] transition">
  <FaInstagram className="text-white text-lg" />
</a>

          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#7B97E0] mt-10 pt-4 text-center text-[#E0E6F9] text-sm">
        © 2025 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
