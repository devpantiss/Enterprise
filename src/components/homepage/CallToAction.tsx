// CallToAction.tsx
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-teal-500 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-white text-xl md:text-2xl font-bold">
          We would love to hear about your start-up.
        </h2>
        <button className="bg-white text-teal-500 font-medium px-6 py-2 rounded shadow-md">
          PITCH TO US
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
