import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-[url('/path-to-pattern.png')]"></div>
      
      <div className=" mt-24 relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeIn">
          Elevate Your Online Presence
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 animate-fadeIn delay-200">
          Unlock the full potential of your brand with our cutting-edge solutions.
        </p>
        <a
          href="#"
          className="mt-4 inline-block px-8 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
