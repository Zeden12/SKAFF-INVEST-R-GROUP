import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import CEOImage from '../assets/ceo.jpg';
import OpsImage from '../assets/operations.jpg';
import MarketingImage from '../assets/marketing.jpg';
import ITImage from '../assets/it.jpg';

const LeadershipSection = () => {
  const leaders = [
    {
      name: 'Mr Reuben IRIHOSE',
      position: 'Founder & Chairman',
      bio: 'Visionary leader with 15+ years experience in global investments and business strategy. Driving innovation across all SKAFF INVEST R GROUP subsidiaries.',
      image: CEOImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Mr James NKURUNZIZA',
      position: 'Chief Operations Officer',
      bio: 'Operational excellence expert with a track record of scaling businesses internationally. Oversees all operational functions across the group.',
      image: OpsImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Mubaraka NIZEYIMANA',
      position: 'Chief Marketing Officer',
      bio: 'Brand strategist leading all marketing initiatives. Specializes in digital transformation and customer experience innovation.',
      image: MarketingImage,
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Ernest HAGUMA KWIZERA',
      position: 'IT Director',
      bio: 'Technology architect overseeing digital infrastructure and cybersecurity across all company divisions.',
      image: ITImage,
      linkedin: '#',
      instagram: '#'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Executive <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings together decades of combined experience in investments, 
            technology, and global business strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-5/12 lg:w-4/12">
                <div className="relative pb-[125%] overflow-hidden rounded-xl shadow-xl">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 lg:w-8/12">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                    <p className="text-blue-600 font-semibold">{leader.position}</p>
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
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/about"
            className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-50"
          >
            More About SKAFF INVEST R GROUP
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;