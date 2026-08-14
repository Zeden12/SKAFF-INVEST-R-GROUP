import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const OurCompanies = () => {
  const companies = [
    { 
      name: 'SKAFF DEVNEX', 
      description: 'Technology & Digital Innovation',
      logo: DevnexLogo
    },
    { 
      name: 'SKAFF CAPTURE', 
      description: 'Creative Production',
      logo: InzoomLogo
    },
    { 
      name: 'SKAFF INDUSTRY', 
      description: 'Manufacturing & Industrial Development',
      logo: SkaffIndustryLogo
    },
    { 
      name: 'SKAFF CORE GRAPHIX', 
      description: 'Design & Branding',
      logo: BlueprintLogo
    },
    { 
      name: 'SKAFF ARCHITECTURE', 
      description: 'Architecture & Construction Consultancy',
      logo: SkaffArchLogo
    },
    { 
      name: 'SKAFF MARKET PLACE', 
      description: 'E-Commerce & Digital Commerce',
      logo: MarketPlaceLogo
    },
    { 
      name: 'SKAFF LUXORA', 
      description: 'Luxury Fashion & Lifestyle',
      logo: BrandNewLogo
    },
    { 
      name: 'SKAFF GLOBAL MUSIC', 
      description: 'Music & Entertainment',
      logo: RosMusicLogo
    },
    { 
      name: 'SKAFF Academy', 
      description: 'Education & Professional Development',
      logo: SIELogo
    },
    { 
      name: 'SKAFF FILMS', 
      description: 'Film & Creative Entertainment',
      logo: SavanaLogo
    },
    { 
      name: 'SKAFF BROADCASTING AGENCY', 
      description: 'Media & Broadcasting',
      logo: SkaffTvLogo
    },
    { 
      name: 'SKAFF SPORTS CLUBS', 
      description: 'Sports Development & Management',
      logo: SkaffSportLogo
    },
    {
      name: 'SKAFF AGRI HUB',
      description: 'Agriculture & Agribusiness',
      logo: AgriHubLogo
    },
    {
      name: 'SKAFF MEDICAL HEALTH',
      description: 'Healthcare & Medical Services',
      logo: MedicalHealthLogo
    },
    {
      name: 'SKAFF MONEY HOST',
      description: 'Financial Technology & Digital Banking',
      logo: MoneyHostLogo
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Different Companies Trusts Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Parterners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We proudly collaborate with visionary partners and industry leaders who share our drive for excellence and innovation.
          </p>
        </div>

        <div className="company-slider">
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-48 flex flex-col items-center justify-center border border-gray-200">
                  <div className="mb-4 h-16 flex items-center">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 text-center">
                    {company.name}
                  </h3>
                  {company.description && (
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      {company.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style jsx>{`
          .company-slider :global(.slick-slide) {
            padding: 0 10px;
          }
          .company-slider :global(.slick-dots li button:before) {
            color: #3B82F6;
          }
          .company-slider :global(.slick-prev:before, .slick-next:before) {
            color: #3B82F6;
          }
        `}</style>
      </div>
    </section>
  );
};

export default OurCompanies;