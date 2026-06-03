import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: () => void;
  onViewCaseStudies: () => void;
}

export default function Hero({ onOpenConsultationModal, onViewCaseStudies }: HeroProps) {
  // Let's create high quality SVG logo components for the client trust section
  const clientLogos = [
    { name: 'Stripe', path: 'M4 12V6m2 6v-3m2 3V8m4 4v-4m3 4V7' },
    { name: 'HubSpot', path: 'M3 13V10m3 3V8' },
    { name: 'Shopify', path: 'M5 12V5m10 7V9' },
    { name: 'Figma', path: 'M4 14V6m10 8V8' },
    { name: 'Airtable', path: 'M4 11V5m10 10V6' }
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden animated-grid"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-[#4f46e5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Context Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-[#00f2fe]/20 text-xs text-[#00f2fe]"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#00f2fe]" />
              <span className="font-mono uppercase tracking-wider font-semibold">
                #1 Growth & Conversion Agency
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
              >
                Scale Your Business with{' '}
                <span className="bg-gradient-to-r from-[#00f2fe] via-[#12c2e9] to-[#34a0a4] bg-clip-text text-transparent glow-text">
                  Data-Driven
                </span>{' '}
                Digital Marketing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-xl"
              >
                We build hyper-growth pipelines that convert passive browsers into loyal corporate clients. Get transparent analytics, expert execution, and zero guesswork.
              </motion.p>
            </div>

            {/* Micro value points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm"
            >
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00f2fe]" />
                <span>ROI-Guaranteed Strategies</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00f2fe]" />
                <span>Dedicated Marketing Squad</span>
              </div>
            </motion.div>

            {/* Lead Gen CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenConsultationModal}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] hover:to-[#12c2e9] text-[#030712] font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#00f2fe]/10 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onViewCaseStudies}
                className="flex items-center justify-center gap-2 glass-panel hover:bg-slate-800/40 border border-slate-700 hover:border-[#00f2fe]/40 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:text-[#00f2fe]"
              >
                <Play className="w-4 h-4 fill-current text-[#00f2fe]" />
                View Case Studies
              </button>
            </motion.div>
          </div>

          {/* Marketing Illustration Right */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-[480px] aspect-[4/3] sm:aspect-[16/9] lg:aspect-square bg-slate-950 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-800"
            >
              {/* Futuristic Cyber Overlay Grid and Lights */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-50 z-20" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="GrowthBoost Digital Marketing Visualization"
                className="w-full h-full object-cover pointer-events-none transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Glowing accents behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] rounded-3xl opacity-20 blur-2xl -z-10 animate-pulse duration-[8000ms]" />
          </div>
        </div>

        {/* Brand Logos / Badges Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-slate-800/60"
        >
          <p className="text-center text-xs font-mono tracking-widest uppercase text-slate-500 mb-8">
            TRUSTED BY FORWARD-THINKING ENTERPRISES WORLDCHECK
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-slate-300 group cursor-default">
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-[#00f2fe] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={logo.path} />
                </svg>
                <span className="font-display font-medium text-sm tracking-tight text-slate-300 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
