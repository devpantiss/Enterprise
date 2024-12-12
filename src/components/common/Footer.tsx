import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="relative bg-teal-800 text-white py-12 px-6 md:px-16 lg:px-24">
        {/* Map Section */}
        {/* <div className="absolute inset-y-0 right-0 w-2/5">
          <img
            src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/map.png?w=512&ssl=1" // Replace with the actual map image path
            alt="Map of India with highlights"
            className="h-full object-contain"
          />
        </div> */}

        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase text-sm tracking-wide font-medium mb-4">
            Your partner in digital, automated, and ESG-compliant facility
            management
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Managing over{" "}
            <span className="text-yellow-400">170 million ft²</span> area
            operations
          </h1>
          <p className="text-lg md:text-xl font-medium mt-4">
            Across 303 districts in India for 6 key nation builder sectors
          </p>
        </div>
        {/* Line Separator */}
        <div className="mt-8 mx-auto max-w-4xl border-t border-yellow-400" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <img
              src="https://i0.wp.com/smc-india.com/wp-content/uploads/2023/09/smc-logo-full-white.png?w=318&ssl=1"
              className="w-44"
            />
            <p className="text-sm">
              Plot No.18, 3rd Floor, DDA Community Center, Okhla Industrial
              Area, Phase-I, New Delhi – 110020
            </p>
            <p className="text-xs mt-2">
              © 2024 SMC Integrated Facility Management Solutions Limited, an
              SIS Group Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Our Solutions</h2>
            <ul className="space-y-2 text-sm">
              <li>Computerised Maintenance Management System</li>
              <li>Energy Audit & Maintenance</li>
              <li>Indoor Air Quality</li>
              <li>Ultraviolet Germicidal Irradiation</li>
              <li>Uberizing Hospital Operation</li>
              <li>Next Generation Disinfection System</li>
              <li>Smart Surface Disinfection Program – H.K 2.0</li>
              <li>Integrated Facility Management</li>
            </ul>
          </div>

          {/* Sector Specialization */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Sector Specialization
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Pharma</li>
              <li>Retail</li>
              <li>Education</li>
              <li>Residential</li>
            </ul>
          </div>

          {/* More Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">More Information</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About SMC India
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About SIS Group
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600"
          >
            WE’RE HIRING!
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
