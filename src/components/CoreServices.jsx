import React, { useState } from 'react';
import { FaCode, FaBuilding, FaCamera, FaIndustry, FaPalette, FaShoppingCart, FaMusic, FaGraduationCap, FaFilm, FaChartLine } from 'react-icons/fa';

const services = [
  { 
    icon: <FaCode className="text-blue-500" size={24} />, 
    title: 'Technology Solutions', 
    desc: 'End-to-end digital transformation services including custom software development, cloud solutions, and AI integration through DEVNEX HiTech.',
    benefits: ['Scalable systems', 'Future-proof tech', '24/7 support']
  },
  { 
    icon: <FaBuilding className="text-green-500" size={24} />, 
    title: 'Architecture & Engineering', 
    desc: 'Comprehensive design and structural engineering solutions from concept to completion with Skaff Arch Struct.',
    benefits: ['Innovative designs', 'Sustainable solutions', 'Precision engineering']
  },
  { 
    icon: <FaCamera className="text-purple-500" size={24} />, 
    title: 'Media Production', 
    desc: 'Full-service content creation including 4K videography, professional photography, and digital media through INZOOM Capture.',
    benefits: ['Studio quality', 'Creative storytelling', 'Multi-platform content']
  },
  { 
    icon: <FaPalette className="text-pink-500" size={24} />, 
    title: 'Design & Branding', 
    desc: 'Strategic visual identity development and graphic design solutions crafted by BluePrint Graphix.',
    benefits: ['Brand consistency', 'Market research', 'Visual storytelling']
  },
  { 
    icon: <FaShoppingCart className="text-red-500" size={24} />, 
    title: 'E-Commerce Solutions', 
    desc: 'Complete online marketplace development and retail optimization via Skaff Market Place.',
    benefits: ['Conversion optimization', 'Secure payments', 'Omnichannel integration']
  },
  { 
    icon: <FaGraduationCap className="text-teal-500" size={24} />, 
    title: 'Education Programs', 
    desc: 'Cutting-edge vocational training and skill development initiatives under SKAFF Academy.',
    benefits: ['Industry-aligned curriculum', 'Expert instructors', 'Practical training']
  },
  { 
    icon: <FaChartLine className="text-indigo-500" size={24} />, 
    title: 'Brand Strategy', 
    desc: 'Comprehensive market positioning and growth strategies developed by Skaff Brand New.',
    benefits: ['Competitive analysis', 'Audience targeting', 'Performance metrics']
  },
  { 
    icon: <FaMusic className="text-yellow-500" size={24} />, 
    title: 'Audio Production', 
    desc: 'Professional recording, mixing, and artist development services through SKAFF RECORDS.',
    benefits: ['State-of-the-art studios', 'Talent scouting', 'Distribution networks']
  },
  { 
    icon: <FaIndustry className="text-orange-500" size={24} />, 
    title: 'Industrial Innovation', 
    desc: 'Advanced manufacturing and industrial automation solutions from Skaff Industry.',
    benefits: ['Process optimization', 'Quality control', 'Supply chain integration']
  },
  { 
    icon: <FaFilm className="text-amber-500" size={24} />, 
    title: 'Film Production', 
    desc: 'Feature film and commercial production services including post-production at SAVANA Films.',
    benefits: ['Award-winning crews', '4K/8K capabilities', 'Global distribution']
  },
  { 
    icon: <FaCode className="text-blue-500" size={24} />, 
    title: 'Broadcasting Solutions',
    desc: 'Comprehensive media broadcasting and streaming services through Skaff TV.', 
    benefits: ['Advertisement','Live streaming', 'Content syndication', 'Multi-platform reach']
  },
  { 
    icon: <FaBuilding className="text-green-500" size={24} />, 
    title: 'Empowering sports',
    desc: 'Comprehensive sports management and event organization services.',
    benefits: ['Event management', 'Athlete representation', 'Sponsorship acquisition']
  },
];

const WhatWeOffer = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Comprehensive Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-blue-600">We Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our ecosystem of specialized services designed to propel your business forward. 
            Each solution is crafted with industry expertise and tailored to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-3 bg-blue-50 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {services.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white border border-gray-200 text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
            >
              {showAll ? 'Show Less' : `Explore All ${services.length} Services`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhatWeOffer;