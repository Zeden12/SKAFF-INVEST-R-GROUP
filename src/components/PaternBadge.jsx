import React from 'react';
import { FaHandshake, FaGlobeAmericas, FaArrowRight } from 'react-icons/fa';

const PartnershipCallout = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-500"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <FaGlobeAmericas className="mr-2 text-blue-300" />
          GLOBAL BUSINESS SOLUTIONS
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Power Your Growth With <span className="text-blue-300">Strategic Partnerships</span>
        </h2>

        <p className="text-xl md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          Join forces with our global network of experts to unlock transformative solutions tailored to your business needs. 
          From concept to execution, we deliver world-class services across 25+ countries with local expertise.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-bold rounded-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300"
          >
            Start Your Partnership Journey <FaArrowRight className="ml-3" />
          </a>
          <a
            href="/services"
            className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            <FaHandshake className="mr-3" />
            Explore Collaboration Options
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            Trusted by 500+ global enterprises
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            24/7 dedicated support
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
            Industry-leading SLAs
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCallout;