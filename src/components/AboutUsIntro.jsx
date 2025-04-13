import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import EfficiencyImage from '../assets/efficiency.jpg';
import PartnerImage from '../assets/partner.jpg';
import SolutionsImage from '../assets/solutions.jpg';
import SupportImage from '../assets/support.jpg';

const AboutUsIntro = () => {
  const sections = [
    {
      title: "Business Operations Made Efficient",
      description: "Our expert services, with guaranteed quality and competitive pricing, offer substantial advantages in business process outsourcing. Most clients experience cost savings of 50% or more, making us a trusted partner for businesses worldwide.",
      image: EfficiencyImage,
      reverse: false
    },
    {
      title: "Trusted Global Partner For Outsourcing",
      description: "As a leader in global outsourcing, SKAFF INVEST R GROUP specializes in offering tailored solutions across various sectors. We focus on optimizing your business operations through industry expertise and cost-effective strategies, helping you scale with confidence and quality.",
      image: PartnerImage,
      reverse: true
    },
    {
      title: "Cost-Effective Solutions For Your Business",
      description: "Partnering with SKAFF INVEST R GROUP provides access to innovative outsourcing solutions that enhance efficiency and significantly reduce operational costs. Our dedication to delivering exceptional service ensures you receive maximum value at competitive rates.",
      image: SolutionsImage,
      reverse: false
    },
    {
      title: "End-to-End Support From Concept to Market",
      description: "Bring your ideas to life with SKAFF INVEST R GROUP's comprehensive support. We guide you through every stage - from initial design and branding to full implementation and market penetration. Our holistic approach ensures your vision becomes a successful reality with expert guidance at every step.",
      image: SupportImage,
      reverse: true
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SKAFF INVEST R GROUP</span>?
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl">
            Discover how our expertise transforms businesses through innovative solutions and strategic partnerships.
          </p>
        </motion.div>
        
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-24 gap-12`}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">{section.title}</h2>
              <p className="text-gray-600 text-lg mb-6 text-left">
                {section.description}
              </p>
              <div className="text-left">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
                >
                  Get in touch with us <FaArrowRight className="ml-2" />
                </motion.a>
              </div>
            </div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:w-1/2 rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src={section.image} 
                alt={section.title} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsIntro;