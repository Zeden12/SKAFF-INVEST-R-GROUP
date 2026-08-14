import React, { useState } from 'react';
import { FaCode, FaBuilding, FaCamera, FaIndustry, FaPalette, FaShoppingCart, FaMusic, FaGraduationCap, FaFilm, FaChartLine, FaLeaf, FaHeartbeat, FaMoneyBillWave } from 'react-icons/fa';

const services = [
  { 
    icon: <FaCode className="text-blue-500" size={24} />, 
    title: 'Technology & Digital Innovation', 
    desc: 'Modern software, digital platforms and IT solutions helping businesses improve efficiency, connectivity and growth through SKAFF DEVNEX.',
    benefits: ['Software Development', 'Cloud Solutions', 'IT Consulting', 'Digital Transformation']
  },
  { 
    icon: <FaBuilding className="text-green-500" size={24} />, 
    title: 'Architecture & Construction Consultancy', 
    desc: 'Innovative, functional and sustainable solutions for residential, commercial and institutional developments with SKAFF ARCHITECTURE.',
    benefits: ['Architectural Design', 'Engineering Consultancy', 'Sustainable Solutions', 'Project Management']
  },
  { 
    icon: <FaCamera className="text-purple-500" size={24} />, 
    title: 'Creative Production', 
    desc: 'Professional photography, cinematography and visual storytelling for businesses, brands and creative projects through SKAFF CAPTURE.',
    benefits: ['Professional Photography', 'Cinematography', 'Visual Storytelling', 'Creative Consultation']
  },
  { 
    icon: <FaPalette className="text-pink-500" size={24} />, 
    title: 'Design & Branding', 
    desc: 'Strategic visual identity development and graphic design solutions crafted by SKAFF CORE GRAPHIX.',
    benefits: ['Corporate Identity', 'Branding Strategy', 'Creative Design', 'Visual Communication']
  },
  { 
    icon: <FaShoppingCart className="text-red-500" size={24} />, 
    title: 'E-Commerce & Digital Commerce', 
    desc: 'Online marketplace solutions connecting businesses, entrepreneurs and consumers through secure digital platforms via SKAFF MARKET PLACE.',
    benefits: ['Online Marketplaces', 'Digital Payment Integration', 'Secure Platforms', 'Commerce Solutions']
  },
  { 
    icon: <FaGraduationCap className="text-teal-500" size={24} />, 
    title: 'Education & Professional Development', 
    desc: 'Practical knowledge, technical expertise, leadership and entrepreneurship training for students and professionals through SKAFF Academy.',
    benefits: ['Professional Certification', 'Executive Education', 'Technical Training', 'Entrepreneurship Programs']
  },
  { 
    icon: <FaChartLine className="text-indigo-500" size={24} />, 
    title: 'Luxury Fashion & Lifestyle', 
    desc: 'Premium products and experiences combining contemporary design, quality craftsmanship and modern African elegance through SKAFF LUXORA.',
    benefits: ['Luxury Fashion', 'Premium Accessories', 'Designer Collaborations', 'Lifestyle Products']
  },
  { 
    icon: <FaMusic className="text-yellow-500" size={24} />, 
    title: 'Music & Entertainment', 
    desc: 'Artist development from talent discovery to publishing, distribution and career management through SKAFF GLOBAL MUSIC.',
    benefits: ['Artist Development', 'Music Production', 'Digital Distribution', 'Business Management']
  },
  { 
    icon: <FaIndustry className="text-orange-500" size={24} />, 
    title: 'Manufacturing & Industrial Development', 
    desc: 'Modern manufacturing, processing, engineering and technology-driven industrial solutions from SKAFF INDUSTRY.',
    benefits: ['Manufacturing Operations', 'Industrial Processing', 'Product Development', 'Quality Management']
  },
  { 
    icon: <FaFilm className="text-amber-500" size={24} />, 
    title: 'Film & Creative Entertainment', 
    desc: 'Visual storytelling through feature films, television, documentaries and digital content from SKAFF FILMS.',
    benefits: ['Feature Film Production', 'Television', 'Documentaries', 'Digital Productions']
  },
  { 
    icon: <FaCode className="text-blue-500" size={24} />, 
    title: 'Media & Broadcasting',
    desc: 'Television, digital media and creative communication platforms that inform, educate and entertain through SKAFF BROADCASTING AGENCY.', 
    benefits: ['Television Broadcasting', 'Digital Media', 'Journalism', 'Content Production']
  },
  { 
    icon: <FaBuilding className="text-green-500" size={24} />, 
    title: 'Sports Development & Management',
    desc: 'Athletic excellence, talent development and professional sports organizations through SKAFF SPORTS CLUBS.',
    benefits: ['Professional Sports Clubs', 'Sports Academies', 'Athlete Management', 'Talent Development']
  },
  {
    icon: <FaLeaf className="text-green-500" size={24} />,
    title: 'Agriculture & Agribusiness',
    desc: 'Sustainable farming solutions, agro-processing, and market linkages delivered through SKAFF AGRI HUB.',
    benefits: ['Farm input supply', 'Agro-processing', 'Farmer training', 'Market access']
  },
  {
    icon: <FaHeartbeat className="text-rose-500" size={24} />,
    title: 'Healthcare & Medical Services',
    desc: 'Accessible, reliable patient-centered healthcare through medical services, pharmaceutical care and digital innovation from SKAFF MEDICAL HEALTH.',
    benefits: ['Medical Services', 'Diagnostic Solutions', 'Preventive Healthcare', 'Digital Health']
  },
  {
    icon: <FaMoneyBillWave className="text-emerald-500" size={24} />,
    title: 'Financial Technology & Digital Banking',
    desc: 'Secure digital financial solutions improving accessibility and inclusion through SKAFF MONEY HOST. Services are being developed and subject to regulatory requirements.',
    benefits: ['Digital Banking', 'Payment Solutions', 'Financial Management', 'Cross-Border Solutions']
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