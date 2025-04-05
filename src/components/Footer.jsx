import React from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-blue-400 mt-1" />
                Kigali, Rwanda – Gisozi, near Gisozi Sector, Total Energies Building, First Floor, Room B2
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" /> +25 07 88 33 88 77
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" /> info@skaffgroup.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Policy & Terms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">User Agreement</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">SKAFF INVEST R GROUP</h3>
            <p className="text-gray-300 mb-4">
              A global holding company driving innovation and investment across diverse sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          &copy; 2025 SKAFF INVEST R GROUP. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
