import React from 'react';
import Logo from '../assets/logo.jpg';
import { MdAccountCircle } from "react-icons/md";

function Header() {
  return (
    <div className="bg-white drop-shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
        
        {/* Logo */}
        <div>
          <img 
            src={Logo}
            alt="logo"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </div>
        
        {/* Account Icon */}
        <div>
          <MdAccountCircle className="text-3xl sm:text-4xl md:text-5xl text-gray-700 cursor-pointer" />
        </div>
      </header>
    </div>
  );
}

export default Header;
