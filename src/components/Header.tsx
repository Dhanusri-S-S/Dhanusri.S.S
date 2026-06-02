import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

interface HeaderProps {
  onOpenConsultationModal: () => void;
}

export default function Header({ onOpenConsultationModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background scroll shadow toggle
      setIsScrolled(window.scrollY > 30);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/92 backdrop-blur-md border-b border-slate-800/60 py-4 shadow-lg'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#4f46e5] flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-5.5 h-5.5 text-[#030712] stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#00f2fe] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                GrowthBoost
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-slate-400">
                DIGITAL AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-200 relative py-1.5 ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#00f2fe] font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] rounded-full shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
                )}
              </a>
            ))}
          </nav>

          {/* Consultation CTA Header Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenConsultationModal}
              id="cta-nav-button"
              className="glow-btn bg-gradient-to-r from-[#00f2fe] to-[#12c2e9] text-[#030712] px-5 py-2.5 rounded-full font-semibold text-xs tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] cursor-pointer"
            >
              Book Free Consultation
            </button>
          </div>

          {/* Mobile Menu Open Icon Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            id="mobile-menu-trigger"
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer-overlay"
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm glass-panel border-l border-slate-800 shadow-2xl p-6 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col justify-between`}
        style={{ top: '0', height: '100vh' }}
      >
        <div>
          <div className="flex items-center justify-between mb-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#4f46e5] flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#030712]" />
              </div>
              <span className="font-display font-bold text-lg text-white">GrowthBoost</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5" id="mobile-navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#00f2fe]/10 text-[#00f2fe]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mb-12">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenConsultationModal();
            }}
            id="mobile-drawer-cta"
            className="w-full text-center bg-gradient-to-r from-[#00f2fe] to-[#12c2e9] text-[#030712] py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
