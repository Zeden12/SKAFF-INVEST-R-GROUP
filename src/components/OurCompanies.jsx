import React from 'react';
import { FaCode, FaBuilding, FaCamera, FaIndustry, FaPalette, FaShoppingCart, FaMusic, FaGraduationCap, FaFilm } from 'react-icons/fa';

const companies = [
  { 
    icon: <FaCode className="text-blue-500" size={28} />, 
    name: 'DEVNEX HiTech', 
    tagline: 'Technology Solutions',
    bgColor: 'bg-blue-50'
  },
  { 
    icon: <FaShoppingCart className="text-red-500" size={28} />, 
    name: 'Skaff Market Place', 
    tagline: 'E-Commerce Platform',
    bgColor: 'bg-red-50'
  },
  { 
    icon: <FaPalette className="text-pink-500" size={28} />, 
    name: 'BluePrint Graphix', 
    tagline: 'Design & Branding',
    bgColor: 'bg-pink-50'
  },
  { 
    icon: <FaCamera className="text-purple-500" size={28} />, 
    name: 'INZOOM Capture', 
    tagline: 'Media Production',
    bgColor: 'bg-purple-50'
  },
  { 
    icon: <FaBuilding className="text-indigo-500" size={28} />, 
    name: 'Skaff Brand New', 
    tagline: 'Brand Development',
    bgColor: 'bg-indigo-50'
  },
  { 
    icon: <FaGraduationCap className="text-teal-500" size={28} />, 
    name: 'SIE Programme', 
    tagline: 'Education Programs',
    bgColor: 'bg-teal-50'
  },
  { 
    icon: <FaMusic className="text-yellow-500" size={28} />, 
    name: 'ROS Music', 
    tagline: 'Music Production',
    bgColor: 'bg-yellow-50'
  },
  { 
    icon: <FaBuilding className="text-green-500" size={28} />, 
    name: 'Skaff Arch Struct', 
    tagline: 'Architectural Design',
    bgColor: 'bg-green-50'
  },

  { 
    icon: <FaIndustry className="text-orange-500" size={28} />, 
    name: 'Skaff Industry', 
    tagline: 'Industrial Solutions',
    bgColor: 'bg-orange-50'
  },
  { 
    icon: <FaFilm className="text-amber-500" size={28} />, 
    name: 'SAVANA Films', 
    tagline: 'Film Production',
    bgColor: 'bg-amber-50'
  }
];

const OurCompanies = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Companies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse portfolio of specialized companies working together to deliver comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className={`${company.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center`}
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-xs">
                {company.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{company.name}</h3>
              <p className="text-sm text-gray-500">{company.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-white border border-gray-200 text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all">
            Explore All Subsidiaries
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurCompanies;