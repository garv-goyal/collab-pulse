import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsightsSection from './components/InsightsSection';
import CollaborateSection from './components/CollaborateSection';
import HowitWorks from './components/HowItWorks';
import ContactSection from './components/ContactSection';
import SurveyPage from './components/SurveyPage';
import Dashboard from './components/Dashboard';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import LivePulseSection from './components/LivePulseSection';
import Chatbot from './components/Chatbot';
import { Analytics } from "@vercel/analytics/react"

const MainPage = () => (
  <>
    <Navbar />
    <Hero />
    <InsightsSection />
    <CollaborateSection />
    <LivePulseSection />
    <HowitWorks />
    <ContactSection />
    {/* <ScrollToTop /> */}
    <Footer />
    {/* <Chatbot /> */}
    <Analytics />
  </>
);

function App() {
  const [, setAuthToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('authToken', token);
      setAuthToken(token);
      setUserInfo({ name: "Test User", email: "test@example.com" });
      window.history.replaceState({}, document.title, window.location.pathname);
    } else {
      const savedToken = localStorage.getItem('authToken');
      if (savedToken) {
        setAuthToken(savedToken);
        setUserInfo({ name: "Test User", email: "test@example.com" });
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/dashboard" element={<Dashboard userInfo={userInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;
