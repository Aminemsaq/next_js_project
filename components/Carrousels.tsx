"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    testimonial: "This course changed my life! The content is top-notch and easy to follow.",
  },
  {
    name: "Jane Smith",
    testimonial: "An amazing experience, I learned so much about trading and risk management.",
  },
  {
    name: "Sam Wilson",
    testimonial: "Highly recommended for anyone looking to get serious about trading.",
  }
];

const Carrousels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-800 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Testimonials
      </h2>
      <div className="relative w-full max-w-3xl">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
              >
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                  <p className="text-xl font-semibold mb-2">{testimonial.name}</p>
                  <p className="text-gray-300">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          <FaChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Carrousels;
