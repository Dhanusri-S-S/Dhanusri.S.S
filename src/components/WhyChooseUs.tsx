import { BarChart3, Users2, Eye, Cpu, Headphones, Coins, Sparkles, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Proven Results",
      description: "We focus completely on active customer conversions and direct pipelines, leaving standard vanity impressions in the dust.",
      icon: BarChart3,
      glow: "rgba(0, 242, 254, 0.15)"
    },
    {
      title: "Expert Team",
      description: "No junior interns managing your spend. Your campaigns are built and monitored by seasoned senior performance leaders.",
      icon: Users2,
      glow: "rgba(79, 70, 229, 0.15)"
    },
    {
      title: "Transparent Reporting",
      description: "Instant access to a live client console detailing every conversion down to the dollar, backed by weekly performance reviews.",
      icon: Eye,
      glow: "rgba(16, 185, 129, 0.15)"
    },
    {
      title: "Data-Driven Strategy",
      description: "We deploy statistical significance matrixes and continuous A/B multivariate splits to extract maximum margin.",
      icon: Cpu,
      glow: "rgba(244, 63, 94, 0.15)"
    },
    {
      title: "Dedicated Support",
      description: "A continuous, direct Slack connect channel with your personal technical marketing squad ready to pivot in minutes.",
      icon: Headphones,
      glow: "rgba(245, 158, 11, 0.15)"
    },
    {
      title: "Affordable Solutions",
      description: "Fully adaptive growth contracts and pricing models configured around your business segment limits, with zero hidden fees.",
      icon: Coins,
      glow: "rgba(6, 182, 212, 0.15)"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#040916]/80 relative overflow-hidden border-y border-slate-900">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row Header Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
              <Sparkles className="w-3 h-3 text-[#00f2fe]" />
              <span>THE GROWTHBOOST STANDARD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Why Forward-Thinking Leaders{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] bg-clip-text text-transparent">
                Partner
              </span>{' '}
              With Us
            </h2>
            <p className="text-slate-400 font-light text-base leading-relaxed">
              Most digital agencies treat customer budgets like a trial-and-error playground. We treat digital marketing as a exact data science of scale. Here is what makes our execution completely distinct from standard legacy models.
            </p>
          </div>

          {/* Quick core metrics list on the right side */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="p-1 rounded bg-[#00f2fe]/10 text-[#00f2fe]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">No Lock-in Retainers</h4>
                <p className="text-xs text-slate-400">Full month-to-month flexibility.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="p-1 rounded bg-[#00f2fe]/10 text-[#00f2fe]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Instant Slack Access</h4>
                <p className="text-xs text-slate-400">Reach performance leads in 5 min.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="p-1 rounded bg-[#00f2fe]/10 text-[#00f2fe]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Proprietary Tech stack</h4>
                <p className="text-xs text-slate-400">Custom link builders & split testing.</p>
              </div>
            </div>
            <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <div className="p-1 rounded bg-[#00f2fe]/10 text-[#00f2fe]">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">100% Owned Channels</h4>
                <p className="text-xs text-slate-400">Client owns all analytics property.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-panel hover:bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700/60 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Glowing accent circle in background of cards */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: reason.glow }}
              />

              <div className="flex gap-4 items-start">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 text-[#00f2fe] shrink-0 group-hover:scale-105 transition-all duration-300"
                  style={{ boxShadow: `0 4px 15px -3px ${reason.glow}` }}
                >
                  <reason.icon className="w-5.5 h-5.5" />
                </div>
                
                <div className="space-y-1.5 text-left">
                  <h3 className="font-display font-medium text-base text-slate-200 group-hover:text-white transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 font-light">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
