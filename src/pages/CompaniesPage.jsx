import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChartLine, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DevnexLogo from '../assets/devnex.jpg';
import SkaffArchLogo from '../assets/skaffconstruction1.jpg';
import InzoomLogo from '../assets/inzoomcapture.jpg';
import SkaffIndustryLogo from '../assets/skaffindustry.jpg';
import BlueprintLogo from '../assets/blueprintgraphics.jpg';
import MarketPlaceLogo from '../assets/skaffmarket.jpg';
import BrandNewLogo from '../assets/skaffbrandnew.jpg';
import RosMusicLogo from '../assets/rosmusic.jpg';
import SIELogo from '../assets/SIE.jpg';
import SavanaLogo from '../assets/savanafilms.jpg';
import SkaffTvLogo from '../assets/skafftv.jpg';
import SkaffSportLogo from '../assets/sport.jpg';

const companies = [
  { 
    name: 'DEVNEX HiTech', 
    tagline: 'Technology Solutions',
    logo: DevnexLogo,
    website: 'https://devnexhitech.vercel.app/',
    bgColor: 'bg-blue-50',
    description: 'Cutting-edge software development, SaaS solutions, and IT infrastructure services for businesses of all sizes.',
    stats: {
      clients: '10+',
      projects: '20+',
      years: '3'
    },
    services: ['Custom Software', 'Cloud Solutions', 'SaaS Solutions', 'Cybersecurity', 'AI Integration', 'IT Consulting', 'Support Services']
  },
  { 
    name: 'SKAFF Academy', 
    tagline: 'Education Programs',
    logo: SIELogo,
    website: 'https://sie-programme.vercel.app/',
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
    name: 'SKAFF RECORDS', 
    tagline: 'Music Production',
    logo: RosMusicLogo,
    website: 'https://www.instagram.com/ros_music__?igsh=OGhldnFvY2NqY20x',
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
    name: 'INZOOM Capture', 
    tagline: 'Video and Photography',
    logo: InzoomLogo,
    website: 'https://www.instagram.com/inzoom_capture?igsh=Mm52M2prbzgwYm1l',
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
    name: 'Skaff TV', 
    tagline: 'Broadcasting Agency and Media',
    logo: SkaffTvLogo,
    website: 'https://youtube.com/@skafftvrda?si=xxG2Z85N7ei8JQP4',
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
    name: 'Skaff Industry', 
    tagline: 'Industrial Solutions',
    logo: SkaffIndustryLogo,
    website: 'https://www.instagram.com/skaff__industry/profilecard/?igsh=c3ZjMjNoNW40Mjc4',
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
    name: 'Skaff Brand New', 
    tagline: 'Fashion House',
    logo: BrandNewLogo,
    website: 'https://www.instagram.com/skaff_brand_new?igsh=aTZmcWMxZDk0ajU0',
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
    name: 'BluePrint Graphix Tech', 
    tagline: 'Design & Branding',
    logo: BlueprintLogo,
    website: 'https://www.instagram.com/blueprintgraphixtechnology?igsh=aGZ2NHZkM3J0OXBp ',
    bgColor: 'bg-pink-50',
    description: 'Full-service creative agency specializing in brand identity, digital design, and marketing collateral.',
    stats: {
      brands: '800+',
      campaigns: '100+',
      awards: '5'
    },
    services: ['Logo Design','Banner Design', 'Brand Strategy', 'Print Media', 'Digital Advertising Boards', 'Social Media Graphics']
  },
  { 
    name: 'Skaff Arch Construct', 
    tagline: 'Architectural Design and Construction',
    logo: SkaffArchLogo,
    website: 'https://www.instagram.com/skaff_arch_construct?igsh=YXh4a2swY2UyeGwx',
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
    name: 'SAVANA Films', 
    tagline: 'Film Production',
    logo: SavanaLogo,
    website: 'https://www.instagram.com/savana_film?igsh=MXNhbGdhMXZpa2poNA==',
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

  const toggleExpand = (index) => {
    setExpandedCompany(expandedCompany === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative py-28 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SKAFF INVEST R GROUP</span> Ecosystem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            A synergistic network of specialized companies delivering comprehensive solutions across industries
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#companies" 
              className="px-6 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition shadow-lg"
            >
              Explore Companies
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition shadow-lg"
            >
              Partner With Us
            </a>
          </motion.div>
        </div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: <FaChartLine className="h-10 w-10 text-blue-600 mx-auto mb-3" />, value: '12+', label: 'Specialized Companies' },
            { icon: <FaUsers className="h-10 w-10 text-blue-600 mx-auto mb-3" />, value: '50+', label: 'Dedicated Employees' },
            { icon: <FaGlobeAmericas className="h-10 w-10 text-blue-600 mx-auto mb-3" />, value: '3+', label: 'Countries Served' },
            { icon: <FaHandshake className="h-10 w-10 text-blue-600 mx-auto mb-3" />, value: '100+', label: 'Satisfied Clients' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {stat.icon}
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div id="companies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`${company.bgColor} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className="w-16 h-16 rounded-full bg-white p-1 shadow-md mr-4"
                  >
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
                      {company.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{company.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(company.stats).map(([key, value]) => (
                    <motion.div 
                      key={key}
                      whileHover={{ y: -3 }}
                      className="bg-white bg-opacity-70 p-2 rounded-lg text-center shadow-sm"
                    >
                      <p className="font-bold text-gray-900">{value}</p>
                      <p className="text-xs text-gray-600 capitalize">{key}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-blue-600 font-medium w-full justify-between py-2"
                >
                  <span>{expandedCompany === index ? 'Hide Services' : 'View Services'}</span>
                  {expandedCompany === index ? <FiChevronUp /> : <FiChevronDown />}
                </motion.button>

                {expandedCompany === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">Key Services:</h4>
                    <ul className="space-y-2">
                      {company.services.map((service, i) => (
                        <motion.li 
                          key={i}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start"
                        >
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Visit Website <FaExternalLinkAlt className="ml-2" size={12} />
                    </motion.a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Partner With Our Ecosystem?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Whether you need one service or multiple solutions across our companies, we provide seamless integration and exceptional results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="px-8 py-3 bg-white text-blue-800 font-medium rounded-lg hover:bg-blue-100 transition shadow-lg"
            >
              Get In Touch
            </a>
            <a 
              href="/services" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-800 transition shadow-lg"
            >
              Explore All Services
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default CompaniesPage;