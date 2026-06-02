import { motion } from 'motion/react';
import { Sparkles, TrendingUp, ChevronRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function CaseStudies({ onOpenConsultation }: CaseStudiesProps) {
  const cases: CaseStudy[] = [
    {
      id: "ecommerce-growth",
      tag: "E-Commerce",
      industry: "Direct-to-Consumer Cosmetics",
      title: "E-commerce Growth Campaign",
      challenge: "High cost-per-acquisition (CPA) on social media, combined with a stagnant organic search rank and cart abandonment rates above 74%.",
      solution: "Engineered full-funnel keyword grouping models, created optimized custom landing pages mapped to buyer intent, and instituted robust SMS / email cart auto-recovery funnels.",
      results: "Substantially decreased paid acquisitions costs while increasing continuous digital storefront visibility.",
      metrics: [
        { label: "Revenue Grow", value: "+180%" },
        { label: "CPA Reduction", value: "-42%" },
        { label: "Conversion Rate", value: "x3.1" }
      ]
    },
    {
      id: "restaurant-marketing",
      tag: "Food & Beverage",
      industry: "Premium Multi-Location Steakhouse Group",
      title: "Restaurant Marketing Campaign",
      challenge: "Inconsistent weekday reservation traffic and highly fragmented customer database targeting local catchments.",
      solution: "Implemented targeted localized SEO, launched highly visual geo-fenced Instagram ads with click-to-book integrations, and initiated custom weekday VIP dining club database campaigns.",
      results: "Reconstructed booking profiles, flattening weekend-to-weekday customer retention disparities.",
      metrics: [
        { label: "Weekday Bookings", value: "+94%" },
        { label: "Email Database", value: "+3,200" },
        { label: "PPC Reservation ROI", value: "x5.8" }
      ]
    },
    {
      id: "realestate-lead-gen",
      tag: "Real Estate",
      industry: "High-Rise Luxury Residential Brokerage",
      title: "Real Estate Lead Generation Campaign",
      challenge: "High ratio of unqualified leads and manual follow-up processes draining broker time on prestige developments.",
      solution: "Constructed pre-qualification interactive calculators, executed precise PPC custom lookalike audiences targeting high-net-worth brackets, and deployed direct booking auto-schedulers.",
      results: "Automated standard property broker funnels, delivering highly motivated upscale buyers.",
      metrics: [
        { label: "Qualified Leads", value: "+210%" },
        { label: "Cost Per Lead", value: "-35%" },
        { label: "Broker Bookings", value: "+148%" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-[#040916]/55 relative overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3 h-3 text-[#00f2fe]" />
            <span>CASE ARCHIVES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white animate-fade-in">
            Proven Campaigns that{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#12c2e9] to-[#4f46e5] bg-clip-text text-transparent glow-text">
              Transform
            </span>{' '}
            Businesses
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto">
            We let our statistics tell the true story. Read how we transformed challenging scenarios into multi-channel scalable revenue streams.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="glass-panel hover:bg-slate-900/60 rounded-2xl border border-slate-800/80 hover:border-slate-700/50 transition-all duration-400 flex flex-col justify-between group overflow-hidden"
              id={`case-card-${cs.id}`}
            >
              <div className="p-6 sm:p-8 space-y-6 text-left">
                {/* Header Tag and Industry */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#00f2fe] uppercase bg-[#00f2fe]/5 border border-[#00f2fe]/20 px-3 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 tracking-tight">
                    {cs.industry}
                  </span>
                </div>

                {/* Case Title */}
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#00f2fe] transition-colors line-clamp-2">
                  {cs.title}
                </h3>

                {/* Challenge & Solution details */}
                <div className="space-y-4 pt-2 border-t border-slate-800/50">
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                      CHALLENGE
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                      SOLUTION
                    </h4>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics block - always high contrast and highlighted */}
              <div className="bg-slate-950/80 border-t border-slate-850 p-6 flex flex-col gap-5 justify-between">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-mono text-lg sm:text-xl font-black text-[#00f2fe] tracking-tight glow-text-sm">
                        {m.value}
                      </div>
                      <div className="text-[9px] text-slate-500 font-medium tracking-tight uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full flex items-center justify-center gap-1 bg-slate-900 hover:bg-[#00f2fe]/10 border border-slate-800 hover:border-[#00f2fe]/30 rounded-xl py-3 text-xs font-bold text-slate-300 hover:text-white uppercase tracking-wider transition-all cursor-pointer"
                >
                  Request Similar Results
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
