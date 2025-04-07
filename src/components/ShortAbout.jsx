// src/components/ShortAbout.jsx
import React from 'react';
import { BuildingOfficeIcon, LightBulbIcon, TrophyIcon, ChartBarIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline';

const ShortAbout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative bg-blue-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 py-10 bg-blue-800 sm:py-12 md:py-14 lg:max-w-2xl lg:w-full xl:py-16">
                        <div className="pt-4 sm:pt-10 lg:pt-6 lg:pb-8 lg:overflow-hidden">
                            <div className="mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                        <span className="block">Our Story</span>
                                        <span className="block text-blue-200">Who We Are</span>
                                    </h1>
                                    <p className="mt-4 text-base text-blue-100 sm:mt-6 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">
                                    SKAFF INVEST R GROUP is a diversified holding company with a portfolio of specialized subsidiaries across multiple industries. Founded in 2010, we've grown from a single business unit to a conglomerate with presence in technology, construction, media, and more. Our companies work synergistically to deliver comprehensive solutions to our clients worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            </div>
        </div>
    );
};

export default ShortAbout;
