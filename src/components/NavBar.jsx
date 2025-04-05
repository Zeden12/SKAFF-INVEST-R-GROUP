import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/skaff2.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-gray-200">
      <div className="flex items-center justify-between p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img 
            src={Logo} 
            alt="SKAFF INVEST R GROUP Logo" 
            className="h-15 w-25 mr-2"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">Home</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">Partners</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">About Us</a>
          <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">Contact Us</a>
          <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-50"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-50"
            >
              Partners
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-50"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-50"
            >
              Contact
            </a>
            <button
              className="w-full mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;