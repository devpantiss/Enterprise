import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container mx-auto">
      <footer className="bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733989064/Social-Alpha-Logo-removebg-preview_qcjbqi.png"
            alt="logo"
            className="h-16"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 my-4 md:my-0 text-sm text-gray-400">
          <a href="#" className="hover:text-white">
            Approach
          </a>
          <a href="#" className="hover:text-white">
            Portfolio
          </a>
          <a href="#" className="hover:text-white">
            Programs
          </a>
          <a href="#" className="hover:text-white">
            About
          </a>
          <a href="#" className="hover:text-white">
            Media
          </a>
          <a href="#" className="hover:text-white">
            Careers
          </a>
          <a href="#" className="hover:text-white">
            Get Involved
          </a>
          <a href="#" className="hover:text-white">
            Newsletters
          </a>
        </nav>

        {/* Copyright Section */}
        <div className="text-center md:text-left text-gray-500 text-xs mt-4 md:mt-0">
          © 2024 Foundation for Innovation and Social Entrepreneurship
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
