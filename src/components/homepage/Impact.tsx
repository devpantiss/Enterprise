// Import necessary React modules
import React from "react";

const Impact: React.FC = () => {
  return (
    <div className="bg-gray-900 flex justify-center items-center">
      <section className="container w-full flex flex-col lg:flex-row text-white py-16 px-8">
        {/* Heading Section */}
        <div className="text-center w-full lg:w-2/5 mb-12">
          <p className="uppercase text-sm font-bold text-left tracking-wide text-gray-400 mb-2">
            Social Alpha is the new approach
          </p>
          <h2 className="text-4xl md:text-5xl text-left font-bold text-teal-400">
            How we enable meaningful impact.
          </h2>
          {/* Read More Button */}
          <div className="text-center flex flex-start mt-12">
            <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded-md shadow-md hover:bg-gray-100">
              Read More
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">🔬</div>
            <div>
              <h3 className="font-bold text-xl mb-2">
                Deep-Science & Technology innovations.
              </h3>
              <p className="text-gray-400">
                Leveraging the power of science & technology to create large
                scale, disruptive and non-linear impact.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">♞</div>
            <div>
              <h3 className="font-bold text-xl mb-2">
                Empathetic, mission-driven entrepreneurs.
              </h3>
              <p className="text-gray-400">
                Enabling mission-driven, passionate and empathetic entrepreneurs
                focused on solving complex social, economic and environmental
                issues.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">⚙️</div>
            <div>
              <h3 className="font-bold text-xl mb-2">
                Robust incubation network.
              </h3>
              <p className="text-gray-400">
                Network of technology and business incubators to fully support
                entrepreneurs in their lab to market journey.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">🧪</div>
            <div>
              <h3 className="font-bold text-xl mb-2">
                High-tech innovation labs.
              </h3>
              <p className="text-gray-400">
                Dedicated innovation labs to support entrepreneurs in product
                development, design, iterations and testing.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">⚓</div>
            <div>
              <h3 className="font-bold text-xl mb-2">
                Sustainable business models.
              </h3>
              <p className="text-gray-400">
                Seeking sustainable business models & supporting them with
                product strategy validation, lifecycle management, GTM
                execution, pilot support, and seed capital.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-start space-x-4">
            <div className="text-orange-500 text-3xl">🔭</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Visionary investments.</h3>
              <p className="text-gray-400">
                Creating a new category of patient capital that invests in
                early-stage science and technology startups.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
