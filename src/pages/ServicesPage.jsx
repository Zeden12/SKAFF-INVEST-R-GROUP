import React from 'react';
import { FaCode, FaPalette, FaShoppingCart, FaCamera, FaMobile, FaSearch, FaAd, FaPenFancy, FaRobot, FaCloud, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      id: 'web-dev',
      icon: <FaCode className="text-blue-500 text-4xl" />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your business needs with responsive design and cutting-edge technologies.",
      features: ["Responsive Design", "CMS Integration", "E-commerce", "Performance Optimization"],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 'mobile-dev',
      icon: <FaMobile className="text-indigo-500 text-4xl" />,
      title: "Mobile App Development",
      description: "High-performance iOS and Android applications that deliver seamless user experiences across all devices.",
      features: ["Native Apps", "Cross-Platform", "UI/UX Focused", "App Store Optimization"],
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      id: 'branding',
      icon: <FaPalette className="text-pink-500 text-4xl" />,
      title: "Branding & Identity",
      description: "Comprehensive brand development that tells your unique story and resonates with your target audience.",
      features: ["Logo Design", "Style Guides", "Brand Strategy", "Visual Identity"],
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      id: 'photography',
      icon: <FaCamera className="text-purple-500 text-4xl" />,
      title: "Photography & Videography",
      description: "Professional visual content creation that captures your brand's essence and engages your audience.",
      features: ["Product Shoots", "Corporate Videos", "Drone Footage", "Editing"],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      id: 'seo',
      icon: <FaSearch className="text-green-500 text-4xl" />,
      title: "SEO Services",
      description: "Data-driven search engine optimization strategies to increase your online visibility and organic traffic.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Analytics"],
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 'social-media',
      icon: <FaAd className="text-teal-500 text-4xl" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build brand awareness and drive meaningful engagement.",
      features: ["Content Creation", "Community Management", "Paid Ads", "Analytics"],
      color: 'bg-teal-100',
      iconColor: 'text-teal-600'
    },
    {
      id: 'content',
      icon: <FaPenFancy className="text-yellow-500 text-4xl" />,
      title: "Content Creation",
      description: "Compelling written and visual content that informs, entertains, and converts your audience.",
      features: ["Blog Writing", "Video Scripts", "Infographics", "Copywriting"],
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 'ai',
      icon: <FaRobot className="text-red-500 text-4xl" />,
      title: "AI Solutions",
      description: "Artificial intelligence integration that automates processes and provides intelligent insights.",
      features: ["Machine Learning", "Chatbots", "Predictive Analytics", "Automation"],
      color: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      id: 'cloud',
      icon: <FaCloud className="text-sky-500 text-4xl" />,
      title: "Cloud Services",
      description: "Scalable cloud computing solutions that enhance your business agility and reduce costs.",
      features: ["Migration", "Management", "Security", "Optimization"],
      color: 'bg-sky-100',
      iconColor: 'text-sky-600'
    },
    {
      id: 'cyber',
      icon: <FaShieldAlt className="text-amber-500 text-4xl" />,
      title: "Cybersecurity",
      description: "Comprehensive protection for your digital assets against evolving threats and vulnerabilities.",
      features: ["Risk Assessment", "Penetration Testing", "Compliance", "Monitoring"],
      color: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      id: 'ecommerce',
      icon: <FaShoppingCart className="text-emerald-500 text-4xl" />,
      title: "E-commerce Solutions",
      description: "Complete online store development that drives sales and enhances customer experiences.",
      features: ["Platform Setup", "Payment Integration", "Inventory Systems", "Checkout Optimization"],
      color: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      id: 'web-design',
      icon: <FaGlobe className="text-violet-500 text-4xl" />,
      title: "UI/UX Design",
      description: "User-centered interface design that improves engagement and conversion rates.",
      features: ["Wireframing", "Prototyping", "User Testing", "Accessibility"],
      color: 'bg-violet-100',
      iconColor: 'text-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-28 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Expert Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive solutions designed to elevate your business and drive measurable results
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our range of professional services tailored to meet your specific business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${service.color} p-6 flex justify-center`}>
                <div className={`${service.iconColor} bg-white p-4 rounded-full shadow-md`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures quality and efficiency in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Consultation",
                description: "We begin by understanding your unique needs and goals through in-depth discussions.",
                icon: "💬"
              },
              {
                title: "Planning",
                description: "Our team develops a customized strategy tailored to your specific requirements.",
                icon: "📝"
              },
              {
                title: "Execution",
                description: "We implement the solution with precision, keeping you informed at every stage.",
                icon: "🛠️"
              },
              {
                title: "Delivery",
                description: "We provide ongoing support to ensure your continued success and satisfaction.",
                icon: "🚀"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Their web development team delivered an exceptional e-commerce platform that doubled our online sales within three months.",
                author: "Sarah Johnson",
                role: "CEO, Fashion Boutique",
                rating: 5
              },
              {
                quote: "The branding strategy completely transformed our market presence and helped us secure key partnerships.",
                author: "Michael Chen",
                role: "Marketing Director, Tech Startup",
                rating: 5
              },
              {
                quote: "Their digital marketing campaigns generated 3x more qualified leads than our previous agency at half the cost.",
                author: "David Wilson",
                role: "VP Sales, Software Company",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss how our professional services can drive your success and help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </a>
            <a 
              href="/services" 
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;