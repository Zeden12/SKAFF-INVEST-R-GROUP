import React, { useState, useEffect } from 'react';
import { FaSearch, FaEnvelope, FaUserTie, FaLightbulb, FaHandshake, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: '',
    resume: null,
    consent: false
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isError: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
      title: "Innovative Projects",
      description: "Work on cutting-edge technologies across multiple industries"
    },
    {
      icon: <FaHandshake className="text-green-500 text-3xl" />,
      title: "Growth Opportunities",
      description: "Move between our companies as your career evolves"
    },
    {
      icon: <FaUsers className="text-blue-500 text-3xl" />,
      title: "Collaborative Culture",
      description: "Join a network of passionate professionals"
    }
  ];

  const companies = [
    {
      name: "Technology",
      description: "Software development, AI, and cloud solutions"
    },
    {
      name: "Creative",
      description: "Design, media production, and branding"
    },
    {
      name: "Industrial",
      description: "Manufacturing, architecture, and engineering"
    },
    {
      name: "Lifestyle",
      description: "Entertainment, education, and e-commerce"
    }
  ];

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ message: '', isSuccess: false, isError: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', isSuccess: false, isError: false });
    
    if (!formData.consent) {
      setFormStatus({
        message: 'You must agree to the terms',
        isSuccess: false,
        isError: true
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('interests', formData.interests);
      formDataToSend.append('resume', formData.resume);
      formDataToSend.append('consent', formData.consent);

      console.log('Form data being sent:', {
        name: formData.name,
        email: formData.email,
        interests: formData.interests,
        resume: formData.resume?.name,
        consent: formData.consent
      });

      const response = await axios.post(
        'https://skaff-invest-r-group-b.onrender.com/api/careers/submit',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      console.log('Response from server:', response);

      if (response.status === 201) {
        setFormStatus({
          message: 'Thank you! Your application has been submitted successfully.',
          isSuccess: true,
          isError: false
        });
        setFormData({
          name: '',
          email: '',
          interests: '',
          resume: null,
          consent: false
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = 'Failed to submit application. Please try again later.';
      
      if (error.response) {
        console.error('Server responded with:', error.response.data);
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.map(err => err.msg).join(', ');
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
        errorMessage = 'No response from server. Please check your connection.';
      } else {
        console.error('Request setup error:', error.message);
      }

      setFormStatus({
        message: errorMessage,
        isSuccess: false,
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Join Our Talent Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
          >
            While we don't have open positions right now, we're always looking for exceptional talent across our companies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#future-opportunities" 
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Submit Your Resume
            </a>
            <a 
              href="#our-companies" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Explore Our Companies
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaSearch className="text-blue-600 text-3xl" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              No Current Open Positions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don't have any active job openings at the moment, but we're constantly growing. 
              Submit your resume below to be considered for future opportunities across all our companies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#future-opportunities" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md"
              >
                Join Our Talent Pool
              </a>
              <a 
                href="/companies" 
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
              >
                Learn About Our Companies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Our Network?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When opportunities arise, you'll want to be first in line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="our-companies" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Family of Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Future opportunities may be available in any of these sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
              <p className="text-gray-600">{company.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="future-opportunities" className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 text-gray-900">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Get Notified About Future Opportunities</h2>
              <p className="text-gray-600">
                Submit your resume and we'll contact you when matching positions become available
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
                <input
                  type="text"
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Software Development, UX Design, Marketing"
                  required
                />
                <p className="mt-1 text-sm text-gray-500">Describe your skills and interests</p>
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I agree to have my information stored for future opportunities
                </label>
              </div>

              {formStatus.message && (
                <div className={`p-3 rounded-lg ${
                  formStatus.isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-md ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit for Future Consideration'}
                </button>
              </div>
            </form>
          </div>
        </div>
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

export default CareersPage;