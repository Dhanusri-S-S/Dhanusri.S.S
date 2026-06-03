import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: "t1",
      name: "Samantha Harris",
      role: "VP of Marketing",
      company: "Dermacare DTC",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "The digital team at GrowthBoost completely restructured our landing page mechanics and key search coordinates. Our e-commerce inbounds shot up by 180% within three quarters, while our paid marketing overhead decreased by nearly half. They are exceptional, technically proficient growth engineers.",
      rating: 5
    },
    {
      id: "t2",
      name: "David Miller",
      role: "Executive Director",
      company: "Prime Steakhouse Group",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "Prior to partnering with GrowthBoost, we were operating blind with three separate local vendors delivering vague metrics. GrowthBoost synchronized our reservation tracking and designed beautiful geo-targeted social runs. Weekday dine-in bookings spiked by 94% instantly. True professionals.",
      rating: 5
    },
    {
      id: "t3",
      name: "Claire Peterson",
      role: "Chief Growth Officer",
      company: "Ascent Residential Brokerage",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      quote: "We had high expectations but incredibly tight timelines to scale lead qualities for our new downtown residences. The pre-screening interactive tools and lookalike target audiences delivered precise results. Direct customer inquiries jumped by 210%. Highly recommend this team.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(autoPlayInterval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    triggerAnimation();
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    triggerAnimation();
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400); // match transition speed
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-slate-950/60 overflow-hidden border-b border-slate-900">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-700/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3 h-3 text-[#00f2fe]" />
            <span>CLIENT VERDICTS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Our Partners{' '}
            <span className="bg-gradient-to-r from-[#00f2fe] to-[#4f46e5] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-xl mx-auto">
            From emerging startups to multi-location enterprises, we maintain clear, authentic partnership values.
          </p>
        </div>

        {/* Testimonials Slider Main Box */}
        <div className="relative" id="testimonial-slider-container">
          
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-6 text-slate-800 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1] fill-current opacity-10" />
          </div>

          <div
            className={`glass-panel border-slate-850 p-8 sm:p-12 rounded-3xl transition-transform duration-400 relative z-10 ${
              isAnimating ? 'opacity-85 scale-[0.99] blur-[1px]' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center text-left">
              
              {/* User Avatar & Rating block */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left md:shrink-0 gap-3">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-slate-700/80 p-0.5 bg-gradient-to-br from-[#00f2fe] to-[#4f46e5]">
                  <img
                    src={reviews[currentIndex].avatarUrl}
                    alt={reviews[currentIndex].name}
                    className="w-full h-full object-cover rounded-[14px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* 5-Star Ratings */}
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
              </div>

              {/* Quote details */}
              <div className="space-y-4 flex-1">
                <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed italic">
                  "{reviews[currentIndex].quote}"
                </p>
                
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {reviews[currentIndex].name}
                  </div>
                  <div className="text-xs text-[#00f2fe] font-mono tracking-wider">
                    {reviews[currentIndex].role} — <span className="text-slate-400 font-sans">{reviews[currentIndex].company}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-4 mt-8 relative z-20">
            {/* Carousel Dots Indicators */}
            <div className="flex items-center gap-2.5 sm:mr-auto">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (currentIndex === idx || isAnimating) return;
                    triggerAnimation();
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#00f2fe]' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                  }`}
                  aria-label={`Testimonial slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider back/forward buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
