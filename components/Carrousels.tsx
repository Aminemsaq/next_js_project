/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const initialTestimonials = [
  {
    url: "https://www.youtube.com/embed/rHrYfGi-78k",
    thumbnail: "https://img.youtube.com/vi/rHrYfGi-78k/hqdefault.jpg",
    playing: false,
  },
  {
    url: "https://www.youtube.com/embed/YuY68vJF94Q",
    thumbnail: "https://img.youtube.com/vi/YuY68vJF94Q/hqdefault.jpg",
    playing: false,
  },
  {
    url: "https://www.youtube.com/embed/F-Jv7exUeZc",
    thumbnail: "https://img.youtube.com/vi/F-Jv7exUeZc/hqdefault.jpg",
    playing: false,
  },
];

const Carrousels = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  const togglePlay = (index: number) => {
    setTestimonials((prevTestimonials) =>
      prevTestimonials.map((testimonial, i) =>
        i === index ? { ...testimonial, playing: !testimonial.playing } : { ...testimonial, playing: false }
      )
    );
  };

  return (
    <div className="flex flex-wrap justify-center py-10">
       <div className="container mx-auto px-4">
      <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold mb-6">
      Témoignages
      </h1>
      <h2 className="text-white text-center text-2xl mb-10">
      Hta nta t9der tbedel 7yatek b7alhoum !
      </h2>
      </div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg border-b-2 border-white-500 overflow-hidden relative">
            <img
              src={testimonial.thumbnail}
              alt={`Thumbnail ${index}`}
              className="w-full h-auto cursor-pointer"
              onClick={() => togglePlay(index)}
            />
            {testimonial.playing && (
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  title={`YouTube Video ${index}`}
                  width="100%"
                  height="100%"
                  src={testimonial.url}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 z-10"
                ></iframe>
                <div
                  className="absolute inset-0 bg-white opacity-75"
                  onClick={() => togglePlay(index)}
                ></div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => togglePlay(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.25 12L4.75 3.5V20.5L20.25 12z"
                    />
                  </svg>
                </div>
              </div>
              
            )}
            <button
              className="absolute top-0 right-0 m-2 p-2 bg-gray-600 rounded-full hover:bg-gray-700 focus:outline-none"
              onClick={() => togglePlay(index)}
              style={{ backgroundColor: "#c7f0f4", color: "#333" }}
            >
              {testimonial.playing ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrousels;
