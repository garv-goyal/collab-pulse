// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsightsSection from './components/InsightsSection';
import CollaborateSection from './components/CollaborateSection';
import HowitWorks from './components/HowItWorks';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import SurveyPage from './components/SurveyPage';

const MainPage = () => (
  <>
    <Navbar />
    <Hero />
    <InsightsSection />
    <CollaborateSection />
    <HowitWorks />
    <ContactSection />
    <ScrollToTop />
    <Footer />
  </>
);

function App() {
  const [, setAuthToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const savedToken = localStorage.getItem('authToken');
      if (savedToken) {
        setAuthToken(savedToken);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/survey" element={<SurveyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
