// src/pages/ServicesPage.jsx
import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Technology Solutions</h2>
            <p className="text-gray-600">Cutting-edge software and IT services</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Construction Services</h2>
            <p className="text-gray-600">Quality architectural and construction solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;