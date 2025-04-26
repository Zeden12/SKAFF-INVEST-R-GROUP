import React from 'react';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  LightBulbIcon,
  TrophyIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import CEOImage from '../assets/founder.jpg';
import OpsImage from '../assets/operations.jpg';
import MarketingImage from '../assets/marketing.jpg';
import ITImage from '../assets/ceo.jpg';
import COS from '../assets/cos.jpg';
import legal from '../assets/legal.jpg';
import HR from '../assets/hr.jpg';
import finance from '../assets/finance.jpg';

const AboutPage = () => {
  const leaders = [
    {
      name: 'Mr Reuben IRIHOSE',
      position: 'Founder & Chairman',
      bio: 'Visionary leader with 15+ years of experience in global investments and business strategy. Drives innovation and strategic direction across all SKAFF INVEST R GROUP subsidiaries.',
      image: CEOImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Mr James NKURUNZIZA',
      position: 'Chief Operations Officer',
      bio: 'Expert in operational excellence with a proven record of scaling businesses internationally. Leads operations to ensure efficiency and performance across all units.',
      image: OpsImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Phionah UWASE',
      position: 'Chief of Staff',
      bio: 'Coordinates executive functions and strategic initiatives while supporting smooth cross-departmental collaboration.',
      image: COS,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Mubaraka NIZEYIMANA',
      position: 'Chief Marketing Officer',
      bio: 'Creative brand strategist leading innovative marketing campaigns, digital growth, and customer engagement strategies.',
      image: MarketingImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'ICYEZA MIZERO Fortune',
      position: 'Human Resources Officer',
      bio: 'Passionate HR professional managing recruitment, employee well-being, and talent development across the group.',
      image: HR,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Ernest HAGUMA KWIZERA',
      position: 'IT Director',
      bio: 'Full-stack tech expert responsible for designing, implementing, and securing digital systems powering all SKAFF INVEST R GROUP companies.',
      image: ITImage,
      linkedin: 'https://www.linkedin.com/in/ernest-haguma-kwizera-709195241/',
      instagram: 'https://www.instagram.com/squach_cj_zeden/'
    },
    {
      name: 'Honorine MUTIMAWASE',
      position: 'Chief Financial Officer',
      bio: 'Finance leader overseeing budgeting, financial reporting, and investment strategies to ensure the group’s financial sustainability.',
      image: finance,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Schola MUTIMA',
      position: 'Legal Officer',
      bio: 'Legal advisor ensuring compliance with regulations, managing contracts, and protecting the legal interests of the organization.',
      image: legal,
      linkedin: '#',
      instagram: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">We Are</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We Build the future through innovation, integrity, and impactful solutions.
          </motion.p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-lg p-8 mb-16"
        >
          <div className="md:flex items-start">
            <div className="md:flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <BuildingOfficeIcon className="h-16 w-16 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <p className="text-lg text-gray-600">
                SKAFF INVEST R GROUP is a diversified holding company with a portfolio of specialized subsidiaries across multiple industries.
                Founded in 2019, we've grown from a single business unit to a conglomerate with presence in technology, construction,
                media, and more. Our companies work synergistically to deliver comprehensive solutions to our clients worldwide.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
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
          className="bg-gradient-to-r from-blue-800 to-purple-900 rounded-xl shadow-xl overflow-hidden mb-16"
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

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of combined experience in investments,
              technology, and global business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-5/12">
                    <div className="relative pb-[125%] overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-7/12">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold">
                          {leader.position}
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <a href={leader.linkedin} className="text-gray-500 hover:text-blue-700 transition">
                          <FaLinkedin size={20} />
                        </a>
                        <a href={leader.instagram} className="text-gray-500 hover:text-pink-600 transition">
                          <FaInstagram size={20} />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{leader.bio}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <a
                        href={`/about#${leader.name.toLowerCase().replace(' ', '-')}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Full profile <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Impact</h2>
              <p className="text-gray-600 mb-6">
                At SKAFF INVEST R GROUP, we believe in giving back to the communities where we operate.
                Our corporate social responsibility initiatives focus on:
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                {[
                  'Education and youth empowerment programs',
                  'Job Opportunities and skills training',
                  'Sustainable environmental initiatives',
                  'Support for local entrepreneurs and SMEs',
                  'Healthcare access improvement projects'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-gray-600 mb-6">
                We are committed to making a positive difference in the world, one community at a time.
              </p>
            </div>
            <div className="hidden md:block md:w-1/2 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center" />
          </div>
        </motion.div>
      </div>

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

export default AboutPage;