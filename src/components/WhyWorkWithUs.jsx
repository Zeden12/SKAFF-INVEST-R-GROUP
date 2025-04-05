// WhyWorkWithUs.jsx
import React from 'react';
import { FaHandshake, FaLightbulb, FaAward, FaRocket } from 'react-icons/fa';

const values = [
  { icon: <FaHandshake size={28} />, title: 'Reliable Partnership', desc: 'We value long-term, trustworthy collaborations that grow businesses and people alike.' },
  { icon: <FaLightbulb size={28} />, title: 'Innovative Mindset', desc: 'Each brand under SKAFF thrives on creativity, new ideas, and solutions tailored to client goals.' },
  { icon: <FaAward size={28} />, title: 'Quality First', desc: 'We deliver top-tier products, designs, and services that meet global standards.' },
  { icon: <FaRocket size={28} />, title: 'Growth Driven', desc: 'Our core mission is to scale impact and deliver results that go beyond expectations.' },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Work With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-blue-500 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;