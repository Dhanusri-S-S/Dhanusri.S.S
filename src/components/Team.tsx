import { Sparkles, Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { TeamMember } from '../types';

export default function Team() {
  const members: TeamMember[] = [
    {
      name: "Marcus Vance",
      role: "CEO & Founder",
      photoUrl: "https://picsum.photos/seed/agency_ceo/400/400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Evelyn Sterling",
      role: "Marketing Strategist",
      photoUrl: "https://picsum.photos/seed/agency_strategist/400/400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Devon Chen",
      role: "SEO Specialist",
      photoUrl: "https://picsum.photos/seed/agency_seo/400/400",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "Sarah Jenkins",
      role: "PPC Expert",
      photoUrl: "https://picsum.photos/seed/agency_ppc/400/400",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 lg:py-28 relative animated-grid border-b border-slate-900">
      {/* Background blurs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3 h-3 text-[#00f2fe]" />
            <span>SQUAD EXPERTISE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Meet the{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] via-[#12c2e9] to-[#4f46e5] bg-clip-text text-transparent">
              Growth Engineers
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Our certified specialists have collectively managed over $15M in ad spend and scaled organic frameworks across competitive sectors.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="glass-panel hover:bg-slate-900/40 rounded-2xl p-5 border border-slate-850 hover:border-slate-700/50 transition-all duration-300 group text-center flex flex-col justify-between"
              id={`team-member-${index}`}
            >
              <div className="space-y-4">
                {/* Image Avatar */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover select-none filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Bio text */}
                <div className="space-y-1 text-center">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00f2fe] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social links bar */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-900">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="mailto:contact@growthboost.digital"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-[#00f2fe] hover:bg-slate-800 transition-all"
                  aria-label="Contact Coordinator Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
