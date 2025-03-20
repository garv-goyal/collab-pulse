import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsightsSection from './components/InsightsSection';
import CollaborateSection from './components/CollaborateSection';
import HowitWorks from './components/HowItWorks';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const MainPage = () => (
  <>
    <Navbar />
    <Hero />
    <InsightsSection />
    <CollaborateSection />
    <HowitWorks />
    <ContactSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
