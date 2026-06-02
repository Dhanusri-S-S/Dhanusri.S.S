import { Search, Share2, MousePointerClick, FileText, Mail, Code2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description: "Secure organic dominance for the queries that define your company's revenue. We specialize in technical audits, intent-gap models, and premium backlink acquisition.",
      icon: Search,
      badge: "Organic Authority",
      color: "from-blue-500/10 to-transparent",
      accent: "#00f2fe"
    },
    {
      id: "smm",
      title: "Social Media Marketing",
      description: "Establish authentic, conversion-focused community presence. From brand-aligned creative templates to optimized campaign delivery across LinkedIn, Meta, and modern platforms.",
      icon: Share2,
      badge: "Brand Engagement",
      color: "from-purple-500/10 to-transparent",
      accent: "#c084fc"
    },
    {
      id: "ppc",
      title: "Google Ads / PPC",
      description: "High-intent paid acquisition targeting active buyers. We design and monitor surgical keyword groups, custom lookalike groups, and negative bidding patterns to lower cost-per-lead.",
      icon: MousePointerClick,
      badge: "Instant Traffic",
      color: "from-rose-500/10 to-transparent",
      accent: "#f43f5e"
    },
    {
      id: "content",
      title: "Content Marketing",
      description: "Position your management team as definitive industry authorities. We script technical blogs, high-converting copy, informative whitepapers, and customer success templates.",
      icon: FileText,
      badge: "Authority Content",
      color: "from-emerald-500/10 to-transparent",
      accent: "#10b981"
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Nurture subscriber databases with segmented lifecycle automations, abandoned-cart triggers, custom personalizations, and hyper-targeted corporate newsletters.",
      icon: Mail,
      badge: "Lifecycle Conversion",
      color: "from-amber-500/10 to-transparent",
      accent: "#f59e0b"
    },
    {
      id: "web-dev",
      title: "Website Development",
      description: "Engineered ultra-fast React and headless setups designed to capture leads. Lightweight, semantic structure optimized for perfect load times and stellar Core Web Vitals.",
      icon: Code2,
      badge: "Supercharged Speed",
      color: "from-cyan-500/10 to-transparent",
      accent: "#06b6d4"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative animated-grid">
      {/* Absolute Glow Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3 h-3 text-[#00f2fe]" />
            <span>RESULT-DRIVEN CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Grow Your Digital Footprint with{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#12c2e9] to-[#4f46e5] bg-clip-text text-transparent">
              Elite Services
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto">
            We reject standard cookie-cutter bundles. Our specialized marketers construct dedicated solutions configured explicitly to make your pipeline scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group glass-panel glass-panel-hover rounded-2xl p-8 border border-slate-800/80 hover:border-slate-700 relative flex flex-col justify-between overflow-hidden"
              id={`service-card-${svc.id}`}
            >
              {/* Subtle service specific corner gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${svc.color} blur-2xl opacity-40 group-hover:scale-150 transition-all duration-500`} />
              
              <div>
                {/* Header Row: Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-[rgba(0,242,254,0.3)] transition-all duration-300 shadow-inner"
                    style={{ textShadow: `0 0 10px ${svc.accent}1a` }}
                  >
                    <svc.icon className="w-6 h-6 transition-transform group-hover:rotate-6" style={{ color: svc.accent }} />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/60">
                    {svc.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-slate-100 group-hover:text-[#00f2fe] transition-colors mb-3">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                  {svc.description}
                </p>
              </div>

              {/* Action Interactive CTA */}
              <button
                onClick={() => onSelectService(svc.title)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#00f2fe]/80 group-hover:text-white transition-colors cursor-pointer text-left self-start"
              >
                Inquire Service
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#00f2fe]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
