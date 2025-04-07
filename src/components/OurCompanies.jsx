import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import company logos
import DevnexLogo from '../assets/devnex.jpg';
import SkaffArchLogo from '../assets/skaffconstruction.jpg';
import InzoomLogo from '../assets/inzoomcapture.jpg';
import SkaffIndustryLogo from '../assets/skaffindustry.jpg';
import BlueprintLogo from '../assets/blueprintgraphics.jpg';
import MarketPlaceLogo from '../assets/skaffmarket.jpg';
import BrandNewLogo from '../assets/skaffbrandnew.jpg';
import RosMusicLogo from '../assets/rosmusic.jpg';
import SIELogo from '../assets/SIE.jpg';
import SavanaLogo from '../assets/savanafilms.jpg';
import SkaffTvLogo from '../assets/skafftv.jpg';
import SkaffSportLogo from '../assets/skaffsport.jpg';

const companies = [
  { 
    name: 'DEVNEX HiTech', 
    tagline: 'Technology Solutions',
    logo: DevnexLogo,
    website: 'https://devnex.com',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100'
  },
  { 
    name: 'Skaff Market Place', 
    tagline: 'E-Commerce Platform',
    logo: MarketPlaceLogo,
    website: 'https://skaffmarket.com',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100'
  },
  { 
    name: 'BluePrint Graphix Tech', 
    tagline: 'Design & Branding',
    logo: BlueprintLogo,
    website: 'https://blueprintgraphix.com',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-100'
  },
  { 
    name: 'INZOOM Capture', 
    tagline: 'Video and Photography',
    logo: InzoomLogo,
    website: 'https://inzoomcapture.com',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100'
  },
  { 
    name: 'Skaff Brand New', 
    tagline: 'Collection and fashion House',
    logo: BrandNewLogo,
    website: 'https://skaffbrandnew.com',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-100'
  },
  { 
    name: 'SIE Programme', 
    tagline: 'Education Programs',
    logo: SIELogo,
    website: 'https://sieprogramme.com',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100'
  },
  { 
    name: 'ROS Music', 
    tagline: 'Music Production',
    logo: RosMusicLogo,
    website: 'https://rosmusic.com',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-100'
  },
  { 
    name: 'Skaff Arch Construct', 
    tagline: 'Architectural Design',
    logo: SkaffArchLogo,
    website: 'https://skaffarch.com',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100'
  },
  { 
    name: 'Skaff Industry', 
    tagline: 'Industrial Solutions',
    logo: SkaffIndustryLogo,
    website: 'https://skaffindustry.com',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  { 
    name: 'SAVANA Films', 
    tagline: 'Film Production',
    logo: SavanaLogo,
    website: 'https://savanafilms.com',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100'
  },
  { 
    name: 'Skaff TV', 
    tagline: 'Broadcasting and Media Agency',
    logo: SkaffTvLogo,
    website: 'https://skafftv.com',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  },
  { 
    name: 'Skaff Sports Club', 
    tagline: 'Sports and Recreation',
    logo: SkaffSportLogo,
    website: 'https://skaffsports.com',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100'
  }
];

const OurCompanies = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCompanies = showAll ? companies : companies.slice(0, 10);

  const handleCompanyClick = (url) => {
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