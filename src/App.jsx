import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InsightsSection from './components/InsightsSection';
import CollaborateSection from './components/CollaborateSection';
import Footer from './components/Footer';
import Contact from './components/ContactSection'
import ScrollToTop from './components/ScrollToTop';
import HowItWorksSection from './components/HowItWorks'; 

function App() {
  return (
    <>
      <div>

      <Navbar />
      <Hero />
      <InsightsSection />
      <CollaborateSection />
      <HowItWorksSection />
      <Contact />
      <ScrollToTop />
      <Footer />
      </div>
    </>
  );
}

export default App;



