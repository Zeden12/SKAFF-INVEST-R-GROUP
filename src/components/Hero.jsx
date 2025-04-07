import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/hero-image.jpg';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { value: "100+", label: "Successful Deals" },
    { value: "12", label: "Subsidiary Companies" },
    { value: "8", label: "Countries Operating" },
    { value: "500+", label: "Team Members" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative py-20 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background elements */}
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
              <span>Over {stats[currentStat].value} {stats[currentStat].label}</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent"
          >
            Digital Innovation Meets Strategic Investment
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-700 mb-10 max-w-2xl"
          >
            At <span className="font-semibold text-blue-700">SKAFF INVEST R GROUP</span>, we fuse cutting-edge technology with visionary investments to create transformative growth opportunities across global markets.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
              Let's get started <FaArrowRight className="ml-2" />
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all flex items-center group">
              <span className="mr-3 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full group-hover:bg-blue-200 transition">
                <FaPlay className="text-blue-600 text-xs" />
              </span>
              Watch Showreel
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img 
                    key={item}
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`}
                    alt="Client"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-700">Trusted by 500+ clients</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">5.0</span>
                </div>
              </div>
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
          
          {/* Floating card elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-10">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Annual Growth</p>
                <p className="font-bold text-blue-700">+42%</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-10">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Verified</p>
                <p className="font-bold text-green-700">Top 5%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient border */}
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