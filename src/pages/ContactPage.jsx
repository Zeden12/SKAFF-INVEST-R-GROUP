import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isError: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ message: '', isSuccess: false, isError: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', isSuccess: false, isError: false });

    try {
      const response = await axios.post(
        'https://skaff-invest-r-group-b.onrender.com/api/contact/submit',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status === 201) {
        setFormStatus({
          message: 'Thank you! Your message has been sent successfully.',
          isSuccess: true,
          isError: false
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.response) {
        if (error.response.data.errors) {
          errorMessage = error.response.data.errors.map(err => err.msg).join(', ');
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }
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
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Whether you have questions about our services, need support, or want to explore partnership opportunities, our team is here to help.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours. For urgent matters, please call us directly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FaUser className="mr-2 text-blue-600" /> First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FaUser className="mr-2 text-blue-600" /> Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter Your last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FaEnvelope className="mr-2 text-blue-600" /> Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <FaPhone className="mr-2 text-blue-600" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                {/* Message display positioned above submit button */}
                <div className="mb-4">
                  {formStatus.message && (
                    <div className={`p-4 rounded-lg ${
                      formStatus.isSuccess 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                    >
                      <p className="font-medium">
                        {formStatus.isSuccess ? 'Successful!' : 'Error!'}
                      </p>
                      <p>{formStatus.message}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl cursor-pointer ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    <FaPaperPlane className="mr-3" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. We're available during business hours and will respond to after-hours messages the next business day.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600 mt-1">
                      KG 123 St, Gisozi Sector<br />
                      Gasabo District, Kigali<br />
                      Rwanda
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone Numbers</h3>
                    <p className="text-gray-600 mt-1">
                      Main: +250 788 33 88 77<br />
                      Support: +250 726 12 97 79
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email Addresses</h3>
                    <p className="text-gray-600 mt-1">
                      General: info@skaffinvestrgroup.com<br />
                      Support: support@skaffinvestrgroup.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 mt-1">
                      <span className="font-medium">Monday - Friday:</span> 8:00 AM - 5:00 PM<br />
                      <span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM<br />
                      <span className="font-medium">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.490146381062!2d30.11003041475389!3d-1.953537998570855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca76b5e3d0a6d%3A0x1e3e1e3e1e3e1e3e!2sGisozi%20Sector%20Office%2C%20KG%20123%20St%2C%20Kigali!5e0!3m2!1sen!2srw!4v1620000000000!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Gisozi Sector Office Location"
            ></iframe>
          </div>
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <FaMapMarkerAlt className="inline-block text-red-500 mr-1" />
              <span className="font-medium">Our Headquarters:</span> Gisozi Sector, Gasabo District, Kigali, Rwanda
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start a Conversation?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Whether you're interested in our services, have questions about our solutions, or want to explore partnership opportunities, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+250788338877"
              className="px-8 py-4 bg-white text-blue-800 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <FaPhone className="mr-2" /> Call Us Now
            </a>
            <a
              href="mailto:info@skaffinvestrgroup.com"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Email Our Team
            </a>
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

export default ContactPage;