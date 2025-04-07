import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChartLine, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
    description: 'Cutting-edge software development, SaaS solutions, and IT infrastructure services for businesses of all sizes.',
    stats: {
      clients: '10+',
      projects: '20+',
      years: '3'
    },
    services: ['Custom Software', 'Cloud Solutions', 'SaaS Solutions', 'Cybersecurity', 'AI Integration', 'IT Consulting', 'Support Services', ]
  },
  { 
    name: 'Skaff Market Place', 
    tagline: 'E-Commerce Platform',
    logo: MarketPlaceLogo,
    website: 'https://skaffmarket.com',
    bgColor: 'bg-red-50',
    description: 'Comprehensive e-commerce solutions with integrated logistics and payment systems for seamless online shopping.',
    stats: {
      merchants: '1,000+',
      products: '100,000+',
      users: '1M+'
    },
    services: ['Online Storefronts', 'Buy Products & Services', 'Sell your Products & Services', 'Payment Processing', 'Inventory Management', 'Marketplace Solutions']
  },
  { 
    name: 'BluePrint Graphix Tech', 
    tagline: 'Design & Branding',
    logo: BlueprintLogo,
    website: 'https://blueprintgraphix.com',
    bgColor: 'bg-pink-50',
    description: 'Full-service creative agency specializing in brand identity, digital design, and marketing collateral.',
    stats: {
      brands: '800+',
      campaigns: '100+',
      awards: '5'
    },
    services: ['Logo Design','banner design', 'Brand Strategy', 'Print Media', 'Digital Advertising boards', 'Social Media Graphics']
  },
  { 
    name: 'INZOOM Capture', 
    tagline: 'Video and Photography',
    logo: InzoomLogo,
    website: 'https://inzoomcapture.com',
    bgColor: 'bg-purple-50',
    description: 'Professional media production services for commercials, documentaries, and corporate content.',
    stats: {
      projects: '900+',
      clients: '300+',
      hours: '10,000+'
    },
    services: ['Video Production', 'Photography', 'Post-Production', 'Live Streaming']
  },
  { 
    name: 'Skaff Brand New', 
    tagline: 'Fashion House',
    logo: BrandNewLogo,
    website: 'https://skaffbrandnew.com',
    bgColor: 'bg-indigo-50',
    description: 'Trendsetting fashion brand offering premium apparel and accessories for modern consumers.',
    stats: {
      collections: '15+',
      stores: '25',
      countries: '8'
    },
    services: ['Apparel Design', 'Retail Solutions', 'Brand Licensing', 'Fashion Consulting']
  },
  { 
    name: 'SIE Programme', 
    tagline: 'Education Programs',
    logo: SIELogo,
    website: 'https://sieprogramme.com',
    bgColor: 'bg-teal-50',
    description: 'Innovative educational programs and vocational training for skills development and career advancement.',
    stats: {
      students: '50,000+',
      courses: '120+',
      partners: '200+'
    },
    services: ['Vocational Training', 'Online Courses', 'Corporate Workshops', 'Career Counseling']
  },
  { 
    name: 'ROS Music', 
    tagline: 'Music Production',
    logo: RosMusicLogo,
    website: 'https://rosmusic.com',
    bgColor: 'bg-yellow-50',
    description: 'Full-service music production company specializing in recording, publishing, and artist development.',
    stats: {
      artists: '300+',
      albums: '500+',
      awards: '40+'
    },
    services: ['Recording Studio', 'Music Publishing', 'Artist Management', 'Event Production']
  },
  { 
    name: 'Skaff Arch Construct', 
    tagline: 'Architectural Design and construction',
    logo: SkaffArchLogo,
    website: 'https://skaffarch.com',
    bgColor: 'bg-green-50',
    description: 'Award-winning architectural firm specializing in sustainable and innovative building designs.',
    stats: {
      projects: '400+',
      countries: '12',
      awards: '18'
    },
    services: ['Architectural Design', 'Interior Design', 'Urban Planning', 'Project Management']
  },
  { 
    name: 'Skaff Industry', 
    tagline: 'Industrial Solutions',
    logo: SkaffIndustryLogo,
    website: 'https://skaffindustry.com',
    bgColor: 'bg-orange-50',
    description: 'Comprehensive industrial services including manufacturing, logistics, and equipment solutions.',
    stats: {
      facilities: '8',
      clients: '250+',
      countries: '5'
    },
    services: ['Manufacturing', 'Industrial Automation', 'Equipment Supply', 'Maintenance Services']
  },
  { 
    name: 'SAVANA Films', 
    tagline: 'Film Production',
    logo: SavanaLogo,
    website: 'https://savanafilms.com',
    bgColor: 'bg-amber-50',
    description: 'Feature film and television production company creating compelling content for global audiences.',
    stats: {
      films: '30+',
      awards: '15',
      platforms: '10+'
    },
    services: ['Film Production', 'Script Development', 'Distribution', 'Film Financing']
  },
  { 
    name: 'Skaff TV', 
    tagline: 'Broadcasting Agency and Media',
    logo: SkaffTvLogo,
    website: 'https://skafftv.com',
    bgColor: 'bg-orange-50',
    description: 'Leading media broadcasting network delivering news, entertainment, and educational content.',
    stats: {
      channels: '5',
      viewers: '20M+',
      programs: '100+'
    },
    services: ['TV Production', 'Content Distribution', 'Media Buying', 'Broadcast Solutions']
  },
  { 
    name: 'Skaff Sports Club', 
    tagline: 'Sports and Recreation',
    logo: SkaffSportLogo,
    website: 'https://skaffsports.com',
    bgColor: 'bg-orange-50',
    description: 'Premier sports management and facilities offering training programs and professional development.',
    stats: {
      athletes: '200+',
      facilities: '10',
      events: '50+'
    },
    services: ['Athlete Management', 'Sports Facilities', 'Event Organization', 'Talent Development']
  }
];

const CompaniesPage = () => {
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleExpand = (index) => {
    setExpandedCompany(expandedCompany === index ? null : index);
  };

  const filteredCompanies = activeFilter === 'all' 
    ? companies 
    : companies.filter(company => company.tagline.toLowerCase().includes(activeFilter));

  const industryFilters = [
    { id: 'all', label: 'All Industries' },
    { id: 'technology', label: 'Technology' },
    { id: 'platform', label: 'E-commerce' },
    { id: 'design', label: 'Design' },
    { id: 'education', label: 'Education' },
    { id: 'construction', label: 'Construction' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'media', label: 'Entertainment' },
    { id: 'sports', label: 'Sports' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The SKAFF INVEST R GROUP Ecosystem</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            A synergistic network of specialized companies delivering comprehensive solutions across industries
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#companies" 
              className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition"
            >
              Explore Companies
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaChartLine className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">12+</p>
            <p className="text-gray-600">Specialized Companies</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaUsers className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">50+</p>
            <p className="text-gray-600">Dedicated Employees</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaGlobeAmericas className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">3+</p>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaHandshake className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <p className="text-3xl font-bold text-gray-900">100+</p>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {industryFilters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div id="companies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company, index) => (
            <div 
              key={index} 
              className={`${company.bgColor} rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-sm mr-4">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-blue-600 font-medium">{company.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{company.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(company.stats).map(([key, value]) => (
                    <div key={key} className="bg-white bg-opacity-50 p-2 rounded text-center">
                      <p className="font-bold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-blue-600 font-medium w-full justify-between py-2"
                >
                  <span>{expandedCompany === index ? 'Hide Services' : 'View Services'}</span>
                  {expandedCompany === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>

                {expandedCompany === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Key Services:</h4>
                    <ul className="space-y-2">
                      {company.services.map((service, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Visit Website <FaExternalLinkAlt className="ml-2" size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Our Ecosystem?</h2>
          <p className="text-xl mb-8">
            Whether you need one service or multiple solutions across our companies, we provide seamless integration and exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition"
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
              className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;