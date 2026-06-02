import { TrendingUp, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';
import React from 'react';

interface FooterProps {
  onOpenConsultationModal: () => void;
}

export default function Footer({ onOpenConsultationModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer id="site-footer" className="bg-[#02050d] border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Logo Column */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#4f46e5] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#030712] stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">GrowthBoost</span>
                <span className="text-[8px] font-mono tracking-[0.2em] text-slate-500">DIGITAL AGENCY</span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Surgical performance marketing explicitly engineered for high-intent B2B and SaaS growth. No guesswork, fully owned pipelines, clear analytics.
            </p>
            {/* Social Icons inside Footer */}
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/30 flex items-center justify-center transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/30 flex items-center justify-center transition-all" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/30 flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2.5 text-left md:ml-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xs text-slate-400 hover:text-white transition-colors">Home Landing</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-xs text-slate-400 hover:text-white transition-colors">About Story</a></li>
              <li><a href="#case-studies" onClick={(e) => handleLinkClick(e, '#case-studies')} className="text-xs text-slate-400 hover:text-white transition-colors">Case Archives</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')} className="text-xs text-slate-400 hover:text-white transition-colors">Specialist Squad</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="text-xs text-slate-400 hover:text-white transition-colors">Get Connect</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe] mb-5">Agency Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors">Social CRM Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors">Google Ads & PPC Runs</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors">Corporate Content Scripts</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="text-xs text-slate-400 hover:text-white transition-colors">Email Campaign Systems</a></li>
            </ul>
          </div>

          {/* Quick Contact Info */}
          <div className="lg:col-span-2.5 text-left md:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe] mb-5">Advisory Hours</h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <p>Monday — Friday</p>
              <p className="font-semibold text-slate-200">08:00 AM — 06:00 PM PST</p>
              <button
                onClick={onOpenConsultationModal}
                className="text-xs font-mono text-[#00f2fe] hover:text-white font-bold transition-colors cursor-pointer text-left block underline pt-2"
              >
                Schedule Direct Audit
              </button>
            </div>
          </div>

        </div>

        {/* Footer Base bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-slate-500 text-[11px] leading-none font-mono">
            &copy; {currentYear} GrowthBoost Digital. All rights reserved. Made for growth.
          </p>
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 hover:text-[#00f2fe] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
