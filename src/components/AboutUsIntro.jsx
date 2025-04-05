import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import EfficiencyImage from '../assets/efficiency.jpg';
import PartnerImage from '../assets/partner.jpg';
import SolutionsImage from '../assets/solutions.jpg';
import SupportImage from '../assets/support.jpg';

const AboutUsIntro = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Why Choose SKAFF INVEST R GROUP?</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl">
            Discover how our expertise transforms businesses through innovative solutions and strategic partnerships.
          </p>
        </div>
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Business Operations Made Efficient</h2>
            <p className="text-gray-600 text-lg mb-6 text-left">
              Our expert services, with guaranteed quality and competitive pricing, offer substantial advantages in business process outsourcing. Most clients experience cost savings of 50% or more, making us a trusted partner for businesses worldwide.
            </p>
            <div className="text-left">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Get in touch with us <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={EfficiencyImage} 
              alt="Efficient business operations" 
              className="rounded-xl w-full h-auto shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-24 gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Trusted Global Partner For Outsourcing</h2>
            <p className="text-gray-600 text-lg mb-6 text-left">
              As a leader in global outsourcing, SKAFF INVEST R GROUP specializes in offering tailored solutions across various sectors. We focus on optimizing your business operations through industry expertise and cost-effective strategies, helping you scale with confidence and quality.
            </p>
            <div className="text-left">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Get in touch with us <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={PartnerImage} 
              alt="Global partnership" 
              className="rounded-xl w-full h-auto shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center mb-24 gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Cost-Effective Solutions For Your Business</h2>
            <p className="text-gray-600 text-lg mb-6 text-left">
              Partnering with SKAFF INVEST R GROUP provides access to innovative outsourcing solutions that enhance efficiency and significantly reduce operational costs. Our dedication to delivering exceptional service ensures you receive maximum value at competitive rates.
            </p>
            <div className="text-left">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Get in touch with us <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={SolutionsImage} 
              alt="Cost-effective solutions" 
              className="rounded-xl w-full h-auto shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">End-to-End Support From Concept to Market</h2>
            <p className="text-gray-600 text-lg mb-6 text-left">
              Bring your ideas to life with SKAFF INVEST R GROUP's comprehensive support. We guide you through every stage - from initial design and branding to full implementation and market penetration. Our holistic approach ensures your vision becomes a successful reality with expert guidance at every step.
            </p>
            <div className="text-left">
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
              >
                Get in touch with us <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={SupportImage} 
              alt="End-to-end business support" 
              className="rounded-xl w-full h-auto shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntro;