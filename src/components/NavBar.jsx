// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/skaff2.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 border-b border-gray-200">
      <div className="flex items-center justify-between p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={Logo} 
              alt="SKAFF INVEST R GROUP Logo" 
              className="h-15 w-25 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => `text-xl hover:text-blue-900 transition-colors ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={({isActive}) => `text-xl hover:text-blue-900 transition-colors ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
          >
            About Us
          </NavLink>

          <NavLink 
            to="/companies" 
            className={({isActive}) => `text-xl hover:text-blue-900 transition-colors ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
          >
            Our Companies
          </NavLink>

          <NavLink 
            to="/services" 
            className={({isActive}) => `text-xl hover:text-blue-900 transition-colors ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
          >
            Services
          </NavLink>

          <NavLink 
            to="/careers" 
            className={({isActive}) => `text-xl hover:text-blue-900 transition-colors ${isActive ? 'text-blue-700 font-medium' : 'text-gray-700'}`}
          >
            Careers
          </NavLink>

          <Link 
            to="/contact" 
            className="px-4 py-2 rounded-md text-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            
            <NavLink
              to="/about"
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/companies"
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Companies
            </NavLink>

            <NavLink
              to="/services"
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/careers"
              className={({isActive}) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-blue-700 bg-blue-50' : 'text-gray-700 hover:bg-blue-50'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </NavLink>

            <Link
              to="/contact"
              className="w-full mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;