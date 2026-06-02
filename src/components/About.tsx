import { motion } from 'motion/react';
import { Target, Eye, Heart, Milestone, Award, Sparkles } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "Our Mission",
      desc: "To replace complex agency structures with agile, metrics-obsessed growth teams committed to maximizing clear ROI.",
      color: "from-blue-600 to-cyan-500",
      accent: "#00f2fe"
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To integrate stellar creativity with advanced data science, crafting the absolute standard for premium business scale-ups.",
      color: "from-[#4f46e5] to-purple-600",
      accent: "#4f46e5"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-slate-950/60 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3 h-3 text-[#00f2fe]" />
            <span>DISCOVER THE AGENCY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            We Help Leading Brands{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] bg-clip-text text-transparent">
              Outperform
            </span>{' '}
            Their Competition
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto">
            GrowthBoost Digital was built to eliminate bloated vanity metrics and replace them with pure revenue alignment. We operate as your dedicated external growth engineers.
          </p>
        </div>

        {/* Content Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Static illustration left with background glow */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/40 border border-slate-800 bg-slate-950">
              <img
                src="/src/assets/images/about_growth_team_1780370187749.png"
                alt="GrowthBoost Business Strategic Growth Panel"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant experience badge floating */}
            <div className="absolute -bottom-6 -right-2 glass-panel border-[#00f2fe]/40 rounded-2xl p-5 shadow-xl max-w-xs flex gap-4 items-center">
              <div className="font-display text-4xl font-black text-[#00f2fe] tracking-tight glow-text font-mono">
                8+
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight">Years Excellence</span>
                <span className="text-[10px] font-mono text-slate-400">GLOBAL CAMPAIGNS</span>
              </div>
            </div>
          </div>

          {/* Agency details right */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-slate-100 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-[#00f2fe]" /> Our Background Story
              </h3>
              <p className="text-slate-300 leading-relaxed font-light">
                Founded in 2018, we grew tired of seeing clients locked in retainer agreements receiving generic PDF decks with zero bottom-line growth. We assembled a premier squad of mathematicians, software developers, and copywriters to build premium search funnels that capture immediate intent.
              </p>
              <p className="text-slate-300 leading-relaxed font-light">
                Today, GrowthBoost Digital structures and automates paid search engines, social amplification, and authority link models for medium-to-enterprise level teams seeking scale.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel hover:bg-slate-900/50 rounded-xl p-5 border border-slate-800 transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-slate-800/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 mb-4 text-[#00f2fe] group-hover:bg-[#00f2fe]/10 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
