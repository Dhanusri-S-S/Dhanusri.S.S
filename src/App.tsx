import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Sections & Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial premium splash loader simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Back to top indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquireService = (serviceName: string) => {
    setSelectedService(serviceName);
    
    // Smooth scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-[#00f2fe]/30 selection:text-white">
      
      {/* 1. Splendid Ambient Loader Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-100 bg-[#030712] flex flex-col items-center justify-center gap-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-14 h-14 bg-gradient-to-br from-[#00f2fe] to-[#4f46e5] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,242,254,0.4)]"
            >
              <TrendingUp className="w-7 h-7 text-[#030712] stroke-[2.5]" />
            </motion.div>
            
            <div className="flex flex-col items-center space-y-1">
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                GrowthBoost <span className="text-[#00f2fe]">Digital</span>
              </span>
              <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.25em] text-slate-500">
                <Sparkles className="w-3 h-3 text-[#00f2fe] animate-pulse" />
                <span>Calibrating Pipelines</span>
              </div>
            </div>

            {/* Simulated progress wire bar */}
            <div className="w-32 h-[2px] bg-slate-900 rounded-full overflow-hidden mt-3 relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-[#00f2fe] rounded-full shadow-[0_0_8px_#00f2fe]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container Layer (Only rendering if loaded or fading out) */}
      {!isLoading && (
        <>
          {/* Header */}
          <Header onOpenConsultationModal={() => setIsModalOpen(true)} />

          {/* Core Storyline Landing Blocks Grid */}
          <main className="relative">
            {/* Ambient Background Grid Overlay */}
            <div className="absolute inset-0 -z-30 pointer-events-none opacity-40 mix-blend-color-dodge">
              <div className="sticky top-0 h-screen w-full bg-[#030712]/5 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Sections */}
            <Hero
              onOpenConsultationModal={() => setIsModalOpen(true)}
              onViewCaseStudies={() => {
                const element = document.getElementById('case-studies');
                if (element) {
                  const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: topOffset, behavior: 'smooth' });
                }
              }}
            />
            
            <About />
            
            <Services onSelectService={handleInquireService} />
            
            <WhyChooseUs />
            
            <Stats />
            
            <CaseStudies onOpenConsultation={() => setIsModalOpen(true)} />
            
            <Team />
            
            <Testimonials />
            
            <Contact
              selectedService={selectedService}
              onClearSelectedService={() => setSelectedService('')}
            />
          </main>

          {/* Footer */}
          <Footer onOpenConsultationModal={() => setIsModalOpen(true)} />

          {/* Global Floating Back-to-Top Action */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                key="back-to-top"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#00f2fe]/40 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xl hover:shadow-[#00f2fe]/10"
                aria-label="Scroll immediately back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Consultation Lead Modal Popup */}
          <ConsultationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
