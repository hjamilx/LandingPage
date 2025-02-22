import React from "react";

const CTASection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700">
      {/* Glassmorphism Container */}
      <div className="max-w-3xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 border border-white/20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Ready to Take Your Business to the Next Level?
        </h2>
        <p className="text-lg text-white/90 mt-4 drop-shadow-md">
          Contact us today and let’s create something amazing together.
        </p>
        {/* CTA Button */}
        <a
          href="#contact"
          className="mt-6 inline-block bg-white text-indigo-700 font-semibold text-lg px-6 py-3 rounded-lg shadow-md transition-all transform hover:scale-110 hover:bg-gray-100 hover:shadow-lg border-2 border-transparent hover:border-indigo-500"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTASection;
