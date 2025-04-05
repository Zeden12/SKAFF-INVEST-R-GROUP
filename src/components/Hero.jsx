import React from 'react';
import HeroImage from '../assets/hero-image.jpg'; 

const Hero = () => {
  return (
    <section className="py-15 md:py-15 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-left">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Over 100 successful deals, it's your time to work with us
            </span>
          </div>
          
          <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight text-blue-900">
            We Are A Global Holding Company Driving Innovation, Creativity, and Investment Across Diverse Sectors
          </h1>
          
          <p className="text-lg text-blue-900 mb-10">
          At SKAFF INVEST R GROUP, we go beyond investment—we ignite innovation, drive creativity, and build strategic partnerships. With a strong presence in technology, industrial manufacturing, advanced investment and entertainment,  we empower businesses and individuals to thrive in a rapidly evolving world. Partner with us to shape the future and grow easily. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Let's get started
            </button>
            <button className="px-6 py-3 rounded-md border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors">
              Contact Us →
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img 
            src={HeroImage} 
            alt="Startup growth illustration" 
            className="rounded-xl w-full h-auto shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;