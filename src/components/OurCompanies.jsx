import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import DevnexLogo from '../assets/skaffdevnex.jpeg';
import SkaffArchLogo from '../assets/skaffarchitecture.jpeg';
import InzoomLogo from '../assets/skaffcapture.jpeg';
import SkaffIndustryLogo from '../assets/skaffindustry.jpeg';
import BlueprintLogo from '../assets/skaffcoregraphix.jpeg';
import MarketPlaceLogo from '../assets/skaffmarket.jpg';
import BrandNewLogo from '../assets/skaffluxizora.jpeg';
import RosMusicLogo from '../assets/skaffglobalmusic.jpeg';
import SIELogo from '../assets/SIE.jpg';
import SavanaLogo from '../assets/skafffilms.jpeg';
import SkaffTvLogo from '../assets/skaffbroadcasting.jpeg';
import SkaffSportLogo from '../assets/skaffsport.jpeg';
import AgriHubLogo from '../assets/agrihub.jpeg';
import MedicalHealthLogo from '../assets/medicalhealth.jpeg';
import MoneyHostLogo from '../assets/skaffmoneyhost.jpeg';

const companies = [
  { 
    name: 'SKAFF DEVNEX', 
    tagline: 'Technology & Digital Innovation',
    logo: DevnexLogo,
    website: 'https://devnexhitech.vercel.app/',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    name: 'SKAFF Academy', 
    tagline: 'Education & Professional Development',
    logo: SIELogo,
    website: 'https://sie-programme.vercel.app/',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100'
  },
  { 
    name: 'SKAFF GLOBAL MUSIC', 
    tagline: 'Music & Entertainment',
    logo: RosMusicLogo,
    website: 'https://www.instagram.com/ros_music__?igsh=OGhldnFvY2NqY20x',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-100'
  },
  { 
    name: 'SKAFF INDUSTRY', 
    tagline: 'Manufacturing & Industrial Development',
    logo: SkaffIndustryLogo,
    website: 'https://www.instagram.com/skaff__industry/profilecard/?igsh=c3ZjMjNoNW40Mjc4',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  { 
    name: 'SKAFF MARKET PLACE', 
    tagline: 'E-Commerce & Digital Commerce',
    logo: MarketPlaceLogo,
    website: 'https://skaffmarket.com',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  { 
    name: 'SKAFF BROADCASTING AGENCY', 
    tagline: 'Media & Broadcasting',
    logo: SkaffTvLogo,
    website: 'https://youtube.com/@skafftvrda?si=xxG2Z85N7ei8JQP4',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  { 
    name: 'SKAFF CAPTURE', 
    tagline: 'Creative Production',
    logo: InzoomLogo,
    website: 'https://www.instagram.com/inzoom_capture?igsh=Mm52M2prbzgwYm1l',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  { 
    name: 'SKAFF CORE GRAPHIX', 
    tagline: 'Design & Branding',
    logo: BlueprintLogo,
    website: 'https://www.instagram.com/blueprintgraphixtechnology?igsh=aGZ2NHZkM3J0OXBp',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  },
  { 
    name: 'SKAFF LUXORA', 
    tagline: 'Luxury Fashion & Lifestyle',
    logo: BrandNewLogo,
    website: 'https://www.instagram.com/skaff_brand_new?igsh=aTZmcWMxZDk0ajU0',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100'
  },
  { 
    name: 'SKAFF ARCHITECTURE', 
    tagline: 'Architecture & Construction Consultancy',
    logo: SkaffArchLogo,
    website: 'https://www.instagram.com/skaff_arch_construct?igsh=YXh4a2swY2UyeGwx',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    name: 'SKAFF FILMS', 
    tagline: 'Film & Creative Entertainment',
    logo: SavanaLogo,
    website: 'https://www.instagram.com/savana_film?igsh=MXNhbGdhMXZpa2poNA==',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },  {
    name: 'SKAFF SPORTS CLUBS',
    tagline: 'Sports Development & Management',
    logo: SkaffSportLogo,
    website: 'https://skaffsports.com',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  {
    name: 'SKAFF AGRI HUB',
    tagline: 'Agriculture & Agribusiness',
    logo: AgriHubLogo,
    website: '#',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  {
    name: 'SKAFF MEDICAL HEALTH',
    tagline: 'Healthcare & Medical Services',
    logo: MedicalHealthLogo,
    website: '#',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100'
  },
  {
    name: 'SKAFF MONEY HOST',
    tagline: 'Financial Technology & Digital Banking',
    logo: MoneyHostLogo,
    website: '#',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100'
  }
];

const OurCompanies = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? companies : companies.slice(0, 10);

  const handleCompanyClick = (url) => {
    if (!url || url === '#') return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          {displayedCompanies.map((company, index) => (
            <div 
              key={index} 
              className={`${company.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center cursor-pointer group`}
              onClick={() => handleCompanyClick(company.website)}
            >
              <div className={`mb-4 w-24 h-24 rounded-full bg-white shadow-xs overflow-hidden flex items-center justify-center p-2 border-4 ${company.borderColor} transition-transform group-hover:scale-105`}>
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="w-full h-full object-contain p-1"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                {company.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{company.tagline}</p>
              <div className="flex items-center text-blue-500 text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Visit website <FaExternalLinkAlt className="ml-1" size={10} />
              </div>
            </div>
          ))}
        </div>

        {!showAll && companies.length > 10 ? (
          <div className="mt-12 text-center">
            <Link 
              to="/companies" 
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-blue-600 font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
            >
              Explore All {companies.length} Subsidiaries
              <FaChevronRight className="ml-2" size={14} />
            </Link>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <Link 
              to="/companies" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-blue-700 transition-all"
            >
              View Full Companies Directory
              <FaChevronRight className="ml-2" size={14} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurCompanies;