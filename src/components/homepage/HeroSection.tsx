import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
}

const HeroSection: React.FC = () => {
  const slides: Slide[] = [
    {
      image: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2019/04/Homepage01.jpg",
    },
    {
      image: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2019/04/Homepage-02.jpg",
    },
    {
      image: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2019/04/Homepage03.jpg",
    },
    {
      image: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2019/04/Homepage-04.jpg",
    },
    {
      image: "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2019/06/Homepage-05-1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-3xl md:text-6xl max-w-5xl font-bold text-center px-4">
              Our complex social, economic and environmental challenges urgently demand a radically new approach.
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            } focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
