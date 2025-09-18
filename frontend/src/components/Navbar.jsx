import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-2xl font-bold text-gray-800">
          <span className="text-[#192832]">Medi</span>Care
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-[#192832] cursor-pointer">Home</li>
          <li className="hover:text-[#192832] cursor-pointer">About</li>
          <li className="hover:text-[#192832] cursor-pointer">Doctors</li>
          <li className="hover:text-[#192832] cursor-pointer">Services</li>
          <li className="hover:text-[#192832] cursor-pointer">Blog</li>
        </ul>

        <div className="flex space-x-3">
          <button className="hidden md:block text-black px-6 py-2 rounded-3xl font-medium hover:rounded-full hover:bg-[#192832] hover:text-white cursor-pointer transition-all duration-300">
            Signup
          </button>

          <button className="hidden md:block bg-[#ebebeb] text-black px-6 py-2 rounded-3xl font-medium hover:rounded-full hover:bg-[#192832] hover:text-white cursor-pointer transition-all duration-300">
            Appointment
          </button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li className="hover:text-[#192832] cursor-pointer cursor-target">Home</li>
            <li className="hover:text-[#192832] cursor-pointer">About</li>
            <li className="hover:text-[#192832] cursor-pointer">Doctors</li>
            <li className="hover:text-[#192832] cursor-pointer">Services</li>
            <li className="hover:text-[#192832] cursor-pointer">Blog</li>
          </ul>

          <button className="w-full text-black px-6 py-2 rounded-3xl font-medium transition-all duration-300 hover:rounded-full hover:bg-[#192832] hover:text-white">
            Signup
          </button>
          <button className="w-full bg-[#ebebeb] text-black px-6 py-2 rounded-3xl font-medium transition-all duration-300 hover:rounded-full hover:bg-[#192832] hover:text-white">
            Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
