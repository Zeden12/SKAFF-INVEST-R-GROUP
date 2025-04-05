import React from 'react';
import Hero from '../components/Hero';
import OurCompanies from '../components/OurCompanies';
import AboutUsIntro from '../components/AboutUsIntro';
import CoreServices from '../components/CoreServices';  
import PartnershipCallout from '../components/PaternBadge';
import PartnersSection from '../components/PartnersSection'; 
import LeadershipSection from '../components/LeadershipSection';
const HomePage = () => {
  return (
    <>
      <Hero />
      <OurCompanies />
      <AboutUsIntro />
      <CoreServices />
      <LeadershipSection />
      <PartnersSection />
      <PartnershipCallout />
      
    </>
  );
};

export default HomePage;