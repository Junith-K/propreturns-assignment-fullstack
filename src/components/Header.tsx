// src/components/Header.tsx
import { IoIosCall } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#E5E7EB] p-4 flex justify-between items-center px-12">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-8" />
        <div className="relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <BsSearch className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search for location"
            className="pl-8 pr-3 w-[350px] py-2 text-sm rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 shadow-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-8">
          <IoIosCall className="text-gray-800 mr-1" />
          <span className="text-gray-800">+91 8369003785</span>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 mr-2">
            <span className="text-black font-light text-lg">M</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
