import React from 'react';

const OurCompanies = () => {
  const companies = ['DEVNEX HiTech', 'Skaff Arch Struct', 'INZOOM Capture', 'Skaff Industry', 'BluePrint Graphix', 'Skaff Market Place', 'Skaff Brand New', 'ROS Music', 'SIE Programme', 'SAVANA Flims'];
  
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <p className="text-center text-gray-500 mb-8">Our companies</p>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {companies.map((company, index) => (
          <div key={index} className="text-2xl font-bold text-gray-700 opacity-70 hover:opacity-100 transition">
            {company}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCompanies;