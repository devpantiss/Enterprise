import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-[#49bea9] p-[50px]">
      <section className="container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-3/5 w-full">
          <p className="text-[30px] font-bold text-white">
            Subscribe to our newsletter and receive monthly insights into the
            world of social innovation.
          </p>
        </div>
        <div className="lg:w-2/5 w-full flex mt-4 lg:mt-0 flex-col gap-y-3">
          <input placeholder="Email" className="bg-transparent font-semibold border-[2px] border-white p-3 placeholder:text-white"/>
          <button className="bg-white text-black p-4 uppercase">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
