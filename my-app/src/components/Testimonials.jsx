import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    text: "This service is amazing! It has greatly improved my business.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Highly recommend to everyone. Fantastic experience!",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    text: "A game-changer for our company. Absolutely love it!",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-[#D6E6FF] to-[#B0D0FF] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Real feedback from our satisfied customers.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center border-t-4 border-blue-500
              hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="mt-3 text-gray-600 italic text-sm sm:text-base">
              {"“" + testimonial.text + "”"}
              </p>

              {/* Star Ratings */}
              <div className="flex justify-center mt-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-lg sm:text-xl ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
