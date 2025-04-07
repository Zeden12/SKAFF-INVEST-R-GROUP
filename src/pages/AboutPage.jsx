// src/pages/AboutPage.jsx
import React from 'react';
import {
    BuildingOfficeIcon,
    LightBulbIcon,
    TrophyIcon,
    ChartBarIcon,
    HeartIcon
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import CEOImage from '../assets/ceo.jpg';
import OpsImage from '../assets/operations.jpg';
import MarketingImage from '../assets/marketing.jpg';
import ITImage from '../assets/it.jpg';

const AboutPage = () => {
    const leaders = [
        {
            name: 'Mr Reuben Skaff',
            position: 'Founder & CEO',
            bio: 'Visionary leader with 15+ years experience in global investments and business strategy. Driving innovation across all SKAFF INVEST R GROUP subsidiaries.',
            image: CEOImage,
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'Mr GATANAZI Amin',
            position: 'Operations Director',
            bio: 'Operational excellence expert with a track record of scaling businesses internationally. Oversees all operational functions across the group.',
            image: OpsImage,
            linkedin: '#',
            instagram: '#'
        },
        {
            name: 'IRADUKUNDA Ella Herve',
            position: 'Marketing Director',
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
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative bg-blue-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-blue-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        <span className="block">Our Story</span>
                                        <span className="block text-blue-200">Who We Are</span>
                                    </h1>
                                    <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                        Building the future through innovation, integrity, and impactful solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white shadow rounded-lg p-6 mb-12">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <BuildingOfficeIcon className="h-16 w-16 text-blue-600" />
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <h2 className="text-2xl font-bold text-gray-900">Company Overview</h2>
                            <p className="mt-2 text-gray-600">
                                SKAFF INVEST R GROUP is a diversified holding company with a portfolio of specialized subsidiaries across multiple industries.
                                Founded in 2010, we've grown from a single business unit to a conglomerate with presence in technology, construction,
                                media, and more. Our companies work synergistically to deliver comprehensive solutions to our clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <LightBulbIcon className="h-8 w-8 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-gray-600">
                            To drive transformation through creativity, innovation, and strategic partnerships that foster socio-economic development, deliver competitive business solutions, and improve quality of life in the communities we serve.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <TrophyIcon className="h-8 w-8 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-gray-600">
                            To become Africa’s most influential and dependable investment powerhouse transforming lives, reshaping industries, and igniting sustainable prosperity through forward-thinking business leadership.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <HeartIcon className="h-8 w-8 text-blue-600 mr-3" />
                            <h3 className="text-xl font-bold text-gray-900">Our Values</h3>
                        </div>
                        <ul className="space-y-2 text-gray-600">
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
                    </div>
                </div>

                <div className="bg-blue-700 rounded-lg shadow-lg overflow-hidden mb-12">
                    <div className="md:flex">
                        <div className="md:flex-1 p-8 md:p-12">
                            <ChartBarIcon className="h-12 w-12 text-white mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">Our Success Story</h2>
                            <p className="text-blue-100 mb-6">
                                SKAFF INVEST R GROUP began with a simple idea: to build value through vision and collaboration. Over the years, our resilience and dedication to quality have seen us expand into a group of 12 active companies across sectors, each playing a unique role in delivering integrated, future-ready solutions. With 50+ passionate team members and growing presence in 3 countries, we've impacted 100+ businesses and individual clients through our services, projects, and innovations.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-600 bg-opacity-30 p-4 rounded-lg">
                                    <p className="text-2xl font-bold text-white">12+</p>
                                    <p className="text-blue-100">Companies</p>
                                </div>
                                <div className="bg-blue-600 bg-opacity-30 p-4 rounded-lg">
                                    <p className="text-2xl font-bold text-white">50+</p>
                                    <p className="text-blue-100">Employees</p>
                                </div>
                                <div className="bg-blue-600 bg-opacity-30 p-4 rounded-lg">
                                    <p className="text-2xl font-bold text-white">3</p>
                                    <p className="text-blue-100">Countries</p>
                                </div>
                                <div className="bg-blue-600 bg-opacity-30 p-4 rounded-lg">
                                    <p className="text-2xl font-bold text-white">100+</p>
                                    <p className="text-blue-100">Clients Served</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 hidden md:block bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
                    </div>
                </div>

                {/* Leadership Section */}
                <section className="py-12 mb-12">
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
                </section>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex flex-row-reverse">
                        <div className="md:flex-1 p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Impact</h2>
                            <p className="text-gray-600 mb-6">
                                At SKAFF INVEST R GROUP, we believe in giving back to the communities where we operate.
                                Our corporate social responsibility initiatives focus on:
                            </p>
                            <ul className="space-y-3 text-gray-600 mb-6">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Education and youth empowerment programs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Sustainable environmental initiatives</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Support for local entrepreneurs and SMEs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-2">•</span>
                                    <span>Healthcare access improvement projects</span>
                                </li>
                            </ul>
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Learn About Our CSR Programs
                            </button>
                        </div>
                        <div className="md:flex-1 hidden md:block bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;