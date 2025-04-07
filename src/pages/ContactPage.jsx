// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-md" rows="4"></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;