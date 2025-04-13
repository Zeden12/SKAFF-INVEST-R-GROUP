import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  LightBulbIcon, 
  TrophyIcon, 
  ChartBarIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline';

const ShortAbout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-28 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Who We Are
            </p>
            <p className="text-lg text-blue-100">
              SKAFF INVEST R GROUP is a diversified holding company with a portfolio of specialized subsidiaries across multiple industries. Founded in 2019, we've grown from a single business unit to a conglomerate with presence in technology, construction, media, and more. Our companies work synergistically to deliver comprehensive solutions to our clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <LightBulbIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To drive transformation through creativity, innovation, and strategic partnerships that foster socio-economic development, deliver competitive business solutions, and improve quality of life in the communities we serve.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <TrophyIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To become Africa's most influential and dependable investment powerhouse transforming lives, reshaping industries, and igniting sustainable prosperity through forward-thinking business leadership.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-4">
              <HeartIcon className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Integrity & transparency in every decision</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Relentless pursuit of innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>People-first, impact-driven culture</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Commitment to sustainable growth</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-800 to-purple-900 rounded-xl shadow-xl overflow-hidden mb-12"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <ChartBarIcon className="h-12 w-12 text-white mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Our Success Story</h2>
              <p className="text-blue-100 mb-8">
                SKAFF INVEST R GROUP began with a simple idea: to build value through vision and collaboration. Over the years, our resilience and dedication to quality have seen us expand into a group of 12 active companies across sectors, each playing a unique role in delivering integrated, future-ready solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '12+', label: 'Companies' },
                  { value: '100+', label: 'Employees' },
                  { value: '9+', label: 'Countries' },
                  { value: '1000+', label: 'Clients Served' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg"
                  >
                    <p className="text-2xl font-bold text-blue-700">{stat.value}</p>
                    <p className="text-blue-700">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
          </div>
        </motion.div>
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

export default ShortAbout;