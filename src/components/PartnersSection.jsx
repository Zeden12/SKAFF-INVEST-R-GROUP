import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your company logos (adjust paths as needed)
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

const OurCompanies = () => {
  const companies = [
    { 
      name: 'DEVNEX HiTech', 
      description: 'Technology Solutions',
      logo: DevnexLogo
    },
    { 
      name: 'INZOOM Capture', 
      description: 'Media Production',
      logo: InzoomLogo
    },
    { 
      name: 'Skaff Industry', 
      description: 'Industrial Solutions',
      logo: SkaffIndustryLogo
    },
    { 
      name: 'BluePrint Graphix', 
      description: 'Design & Branding',
      logo: BlueprintLogo
    },
    {
      name: 'Skaff Arch Construct', 
      description: 'Architectural Design',
      logo: SkaffArchLogo
    },
    { 
      name: 'Skaff Construction', 
      description: 'Construction Services',
      logo: SkaffArchLogo
    },
    { 
      name: 'Skaff Media', 
      description: 'Media & Broadcasting',
      logo: SkaffTvLogo
    },
    { 
      name: 'Skaff Market Place', 
      description: 'E-Commerce Platform',
      logo: MarketPlaceLogo
    },
    { 
      name: 'Skaff Brand New', 
      description: 'Brand Development',
      logo: BrandNewLogo
    },
    { 
      name: 'ROS Music', 
      description: 'Music Production',
      logo: RosMusicLogo
    },
    { 
      name: 'SIE Programme', 
      description: 'Education Programs',
      logo: SIELogo
    },
    { 
      name: 'SAVANA Films', 
      description: 'Film Production',
      logo: SavanaLogo
    },
    { 
      name: 'SKAFF TV', 
      description: 'Broadcasting & Media',
      logo: SkaffTvLogo
    },
    { 
      name: 'Skaff Sport Club', 
      description: 'Sports & Entertainment',
      logo: SkaffSportLogo
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