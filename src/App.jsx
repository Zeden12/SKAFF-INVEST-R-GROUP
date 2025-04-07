// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CompaniesPage from './pages/CompaniesPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;