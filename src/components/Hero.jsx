import React from 'react';
import HeroImage from '../assets/hero-image.jpg';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Hero = () => {
  const corporateFacts = [
    { year: "2019", label: "Established" },
    { city: "Kigali, Rwanda", label: "Head Office" },
    { companies: "15", label: "Specialized Subsidiaries" }
  ];

  return (
    <section className="relative py-10 md:py-12 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="lg:w-1/2 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
              <span className="h-2 w-2 bg-white rounded-full mr-2 animate-pulse"></span>
              <span>15 Specialized Subsidiaries</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent"
          >
            Building Powerful Brands. Creating the Future.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 mb-10 max-w-2xl"
          >
            <span className="font-semibold text-blue-700">SKAFF INVEST R GROUP</span> is a diversified investment holding corporation building, investing in and managing innovative businesses across strategic industries. Through our integrated ecosystem of specialized companies, we combine investment, technology, creativity and entrepreneurship to create sustainable value across Africa and beyond.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/companies">
              <a className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                Explore Our Companies <FaArrowRight className="ml-2" />
              </a>
            </Link>
            
            <Link href="/contact">
              <a className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all flex items-center group">
                <span className="mr-3 flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full group-hover:bg-blue-200 transition">
                  <FaPlay className="text-blue-600 text-xs" />
                </span>
                Partner With Us
              </a>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">2019</div>
              <p className="text-sm text-gray-600 font-medium">Established</p>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-lg font-bold text-blue-700 mb-1">Kigali, Rwanda</div>
              <p className="text-sm text-gray-600 font-medium">Head Office</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-1">15</div>
              <p className="text-sm text-gray-600 font-medium">Subsidiaries</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-1/2 relative"
        >
          <img 
            src={HeroImage} 
            alt="Digital innovation illustration" 
            className="rounded-2xl w-full h-auto shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-blob {
          animation: move 25s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes move {
          from {
            transform: translate(0px, 0px) rotate(0deg);
          }
          to {
            transform: translate(20px, 50px) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;