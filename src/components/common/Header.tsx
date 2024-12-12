import React, { useState } from "react";

const Header: React.FC = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  const menuItems = [
    { label: "APPROACH", dropdown: ["INNOVATION ECOSYSTEM", "INCUBATION LABS", "INVESTMENT MODEL"] },
    { label: "PORTFOLIO"  },
    { label: "LABS", dropdown: ["CLEAN ENERGY", "AIC", "CEIBIC", "SPIN", "MACH33"] },
    { label: "PROGRAMS", dropdown: ["DST SEED SUPPORT", "TECHTONIC", "TRANSFORM PLASTICS", "ACCELERATORS", "ACT GRANTS", "SD ATMA FUND"] },
    { label: "ABOUT" },
    { label: "NEWSROOM" },
    { label: "CAREERS", dropdown: ["WORK AT SOCIAL ALPHA", "WORK AT PORTFOLIO COMPANY"] },
    { label: "GET INVOLVED" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-orange-600 text-2xl font-bold flex items-center">
          <img src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1733989064/Social-Alpha-Logo-removebg-preview_qcjbqi.png" alt="logo" className="h-16"/>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-gray-800 relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => toggleDropdown(item.label)}
              onMouseLeave={() => toggleDropdown('')}
            >
              <a
                href="#"
                className="uppercase text-sm font-medium hover:text-orange-600"
              >
                {item.label}
              </a>
              {item.dropdown && dropdown === item.label && (
                <div className="absolute top-16 z-50 left-0 bg-gray-800 text-white w-48 shadow-md py-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800 focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
