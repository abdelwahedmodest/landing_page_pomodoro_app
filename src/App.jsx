import { useContext } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import { LanguageContext } from './context/LanguageContext.jsx';

function App() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div className={`app ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      
      <style>{`
        .app {
          direction: ltr;
        }
        
        .app.rtl {
          direction: rtl;
        }
        
        /* RTL specific adjustments */
        .rtl .container {
          text-align: right;
        }
        
        .rtl .text-center {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default App;