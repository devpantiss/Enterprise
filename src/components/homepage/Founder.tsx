// Import necessary React modules
import React from 'react';

// Define the component
const Founder: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 pb-0">
      {/* Left Section: Text */}
      <div className="max-w-6xl flex flex-col justify-center items-center text-left">
        <p className="text-lg md:text-xl font-light text-gray-700 mb-6">
          “Science and technology innovations have the potential to solve some of the world’s most
          complex social and environmental challenges. However, this requires our innovation ecosystem
          to integrate with the markets and communities. We also need to create the enablers to support
          innovators who are solving difficult problems in areas like climate change and healthcare, both
          of which are burning topical issues.
        </p>
        <p className="text-lg md:text-xl font-light text-gray-700 mb-6">
          I am delighted to note that Social Alpha prioritises some of these challenges in its work,
          focusing on impact first. I wish the entrepreneurs working on these challenges, and the Social
          Alpha team all the best in this journey.”
        </p>
        <p className="font-semibold text-gray-900 text-left">Ratan N Tata</p>
      </div>

      {/* Right Section: Image */}
      <div className="flex-shrink-0">
        <img
          src="https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2024/10/Ratan-Tata.jpg" // Replace with your image path
          alt="Ratan N Tata"
          className="rounded-md w-full max-w-sm object-cover"
        />
      </div>
    </section>
  );
};

export default Founder;
