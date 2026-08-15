import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChartLine, FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
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
    description: 'Technology and digital innovation company developing modern software, digital platforms and IT solutions that help businesses and organizations improve efficiency, connectivity and growth.',
    services: ['Software Development', 'Web & Mobile Solutions', 'IT Consulting', 'Digital Transformation', 'Cloud & Digital Infrastructure', 'Cybersecurity Solutions', 'Automation & Smart Solutions', 'Technical Support Services']
  },
  { 
    name: 'SKAFF Academy', 
    tagline: 'Education & Professional Development',
    logo: SIELogo,
    website: 'https://sie-programme.vercel.app/',
    bgColor: 'bg-indigo-50',
    description: 'Education and professional development institution focused on practical knowledge, technical expertise, leadership, entrepreneurship and future-ready skills for students, professionals, entrepreneurs and organizations.',
    services: ['Professional Certification Programs', 'Executive Education', 'Technical & Vocational Training', 'Digital Learning', 'Entrepreneurship Development', 'Research & Innovation', 'Corporate Training Solutions']
  },
  { 
    name: 'SKAFF GLOBAL MUSIC', 
    tagline: 'Music & Entertainment',
    logo: RosMusicLogo,
    website: 'https://www.instagram.com/ros_music__?igsh=OGhldnFvY2NqY20x',
    bgColor: 'bg-blue-50',
    description: 'Integrated music entertainment company supporting artists throughout their professional journey, from talent discovery and music production to publishing, distribution, branding and long-term career development.',
    services: ['Artist Development', 'Music Production', 'Music Publishing', 'Digital Distribution', 'Artist Branding', 'Entertainment Marketing', 'Business Management']
  },
  { 
    name: 'SKAFF CAPTURE', 
    tagline: 'Creative Production',
    logo: InzoomLogo,
    website: 'https://www.instagram.com/inzoom_capture?igsh=Mm52M2prbzgwYm1l',
    bgColor: 'bg-indigo-50',
    description: 'Creative production company specializing in professional photography, cinematography and visual storytelling for businesses, brands, individuals and creative projects.',
    services: ['Professional Photography', 'Cinematography', 'Visual Storytelling', 'Commercial Production', 'Documentary Production', 'Post-Production Services', 'Creative Consultation']
  },
  { 
    name: 'SKAFF BROADCASTING AGENCY', 
    tagline: 'Media & Broadcasting',
    logo: SkaffTvLogo,
    website: 'https://youtube.com/@skafftvrda?si=xxG2Z85N7ei8JQP4',
    bgColor: 'bg-blue-50',
    description: 'Media and broadcasting company developing television, digital media, journalism and creative communication platforms that inform, educate, entertain and connect audiences.',
    services: ['Television Broadcasting', 'Digital Media Production', 'Journalism & Storytelling', 'Content Production', 'Brand Media Solutions', 'Entertainment Networks', 'Event Coverage']
  },
  { 
    name: 'SKAFF MARKET PLACE', 
    tagline: 'E-Commerce & Digital Commerce',
    logo: MarketPlaceLogo,
    website: 'https://skaffmarket.com',
    bgColor: 'bg-indigo-50',
    description: 'Digital commerce company developing online marketplace solutions that connect businesses, entrepreneurs, service providers and consumers through secure and accessible digital platforms.',
    services: ['Online Marketplace Solutions', 'Merchant Marketplace Participation', 'Digital Commerce Infrastructure', 'Enterprise Commerce Solutions', 'Digital Payment Integration', 'Logistics & Supply Chain Integration', 'Technology-Driven Commerce Solutions']
  },
  { 
    name: 'SKAFF INDUSTRY', 
    tagline: 'Manufacturing & Industrial Development',
    logo: SkaffIndustryLogo,
    website: 'https://www.instagram.com/skaff__industry/profilecard/?igsh=c3ZjMjNoNW40Mjc4',
    bgColor: 'bg-blue-50',
    description: 'Industrial and manufacturing company focused on developing productive capacity through modern manufacturing, processing, engineering, product innovation and technology-driven industrial solutions.',
    services: ['Manufacturing Operations', 'Industrial Processing', 'Product Development', 'Engineering Support', 'Industrial Automation', 'Quality Management', 'Supply Chain Support']
  },
  { 
    name: 'SKAFF LUXORA', 
    tagline: 'Luxury Fashion & Lifestyle',
    logo: BrandNewLogo,
    website: 'https://www.instagram.com/skaff_brand_new?igsh=aTZmcWMxZDk0ajU0',
    bgColor: 'bg-indigo-50',
    description: 'Luxury fashion and lifestyle brand developing premium products and experiences that combine contemporary design, quality craftsmanship, creativity, innovation and modern African elegance.',
    services: ['Luxury Fashion Collections', 'Footwear', 'Accessories', 'Lifestyle Products', 'Designer Collaborations', 'Limited-Edition Collections', 'Premium Retail Experiences']
  },
  { 
    name: 'SKAFF CORE GRAPHIX', 
    tagline: 'Branding & Design',
    logo: BlueprintLogo,
    website: 'https://www.instagram.com/blueprintgraphixtechnology?igsh=aGZ2NHZkM3J0OXBp',
    bgColor: 'bg-blue-50',
    description: 'Creative branding and design company helping organizations build strong identities and communicate effectively through strategic branding, professional design and innovative visual communication.',
    services: ['Corporate Identity', 'Branding Strategy', 'Creative Design', 'Visual Identity Systems', 'Communication Materials', 'Brand Communication', 'Logo Design', 'Visual Communication']
  },
  { 
    name: 'SKAFF ARCHITECTURE', 
    tagline: 'Architecture & Construction Consultancy',
    logo: SkaffArchLogo,
    website: 'https://www.instagram.com/skaff_arch_construct?igsh=YXh4a2swY2UyeGwx',
    bgColor: 'bg-indigo-50',
    description: 'Architecture and construction consultancy delivering innovative, functional and sustainable solutions for residential, commercial, institutional and mixed-use developments through design, engineering and strategic project planning.',
    services: ['Architectural Design', 'Engineering Consultancy', 'Construction Consultancy', 'Interior Design', 'Urban Planning', 'Project Management']
  },
  { 
    name: 'SKAFF FILMS', 
    tagline: 'Film & Creative Entertainment',
    logo: SavanaLogo,
    website: 'https://www.instagram.com/savana_film?igsh=MXNhbGdhMXZpa2poNA==',
    bgColor: 'bg-blue-50',
    description: 'Film production and creative entertainment company developing visual storytelling through feature films, television, documentaries, digital content and cinematic productions for local, regional and international audiences.',
    services: ['Feature Film Production', 'Television Productions', 'Documentaries', 'Animation', 'Digital Productions', 'Commercial Content', 'International Co-Productions', 'Corporate/Branded Visual Productions']
  },
  { 
    name: 'SKAFF SPORTS CLUBS', 
    tagline: 'Sports Development & Management',
    logo: SkaffSportLogo,
    website: 'https://skaffsports.com',
    bgColor: 'bg-indigo-50',
    description: 'Sports development and management organization focused on athletic excellence, emerging talent, professional sports organizations, sports education, events and sustainable sports development.',
    services: ['Professional Sports Clubs', 'Sports Academies', 'Talent Identification & Development', 'Athlete Management', 'Sports Events & Competitions', 'Sports Business & Marketing']
  },
  {
    name: 'SKAFF AGRI HUB',
    tagline: 'Agriculture & Agribusiness',
    logo: AgriHubLogo,
    website: '#',
    bgColor: 'bg-blue-50',
    description: 'Agriculture and agribusiness company advancing modern agriculture through sustainable farming, agribusiness development, agricultural technology, food value chains and responsible resource management.',
    services: ['Integrated Farming Systems', 'Crop Production', 'Livestock Development', 'Research & Innovation', 'Food Processing & Value Addition', 'Food Value Chains', 'Agricultural Technology/AgriTech', 'Smart & Precision Farming', 'Storage & Logistics', 'Market Access', 'Climate-Smart Agriculture']
  },
  {
    name: 'SKAFF MEDICAL HEALTH',
    tagline: 'Healthcare & Medical Services',
    logo: MedicalHealthLogo,
    website: '#',
    bgColor: 'bg-indigo-50',
    description: 'Healthcare and medical services company focused on accessible, reliable and patient-centered healthcare through medical services, pharmaceutical care, preventive healthcare, digital health innovation and community wellness.',
    services: ['Medical/Clinical Services', 'Pharmaceutical Services', 'Diagnostic Solutions', 'Preventive Healthcare', 'Digital Health & Innovation', 'Telemedicine', 'Community Health Programs']
  },
  {
    name: 'SKAFF MONEY HOST',
    tagline: 'Financial Technology & Digital Banking',
    logo: MoneyHostLogo,
    website: '#',
    bgColor: 'bg-blue-50',
    description: 'Financial technology company developing secure and intelligent digital financial solutions designed to improve accessibility, efficiency and inclusion for individuals, businesses and institutions. Services are being developed and subject to applicable regulatory requirements.',
    services: ['Digital Banking', 'Digital Wallets', 'Payment Infrastructure', 'Business Banking Solutions', 'Investment Technology', 'Lending Technologies', 'Financial Management Solutions', 'Cross-Border Financial Solutions']
  }
];

const CompaniesPage = () => {
  const [expandedCompany, setExpandedCompany] = useState(null);

  const toggleExpand = (companyName) => {
    // If clicking the same company, close it. Otherwise, open the new one
    if (expandedCompany === companyName) {
      setExpandedCompany(null);
    } else {
      setExpandedCompany(companyName);
    }
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
            { icon: <FaChartLine className="h-10 w-10 text-blue-600 mx-auto mb-3" />, value: '15+', label: 'Specialized Companies' },
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
              key={company.name}
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
                
                {company.stats && Object.keys(company.stats).length > 0 && (
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
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleExpand(company.name)}
                  className="flex items-center text-blue-600 font-medium w-full justify-between py-2"
                >
                  <span>{expandedCompany === company.name ? 'Hide Services' : 'View Services'}</span>
                  {expandedCompany === company.name ? <FiChevronUp /> : <FiChevronDown />}
                </motion.button>

                <AnimatePresence mode="wait">
                  {expandedCompany === company.name && (
                    <motion.div 
                      key="services"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
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
                    {company.website && company.website !== '#' && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Visit Website <FaExternalLinkAlt className="ml-2" size={12} />
                      </motion.a>
                    )}
                    </motion.div>
                  )}
                </AnimatePresence>
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