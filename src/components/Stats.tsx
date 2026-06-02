import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, ThumbsUp, Activity } from 'lucide-react';

interface StatElementProps {
  key?: any;
  target: number;
  suffix: string;
  label: string;
  icon: any;
  duration?: number;
}

function CounterItem({ target, suffix, label, icon: Icon, duration = 1500 }: StatElementProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalFrames = 60;
    const frameDuration = duration / totalFrames;
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out circle expression
      const easeValue = Math.sqrt(1 - Math.pow(progress - 1, 2));
      const currentCount = Math.floor(easeValue * end);

      if (currentCount >= end) {
        setCount(end);
        clearInterval(counterInterval);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);

    return () => clearInterval(counterInterval);
  }, [hasStarted, target, duration]);

  return (
    <div
      ref={elementRef}
      className="glass-panel hover:bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800 text-center flex flex-col items-center relative group overflow-hidden"
    >
      {/* Background neon border ray */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent opacity-40" />

      <div className="w-12 h-12 rounded-xl bg-[#00f2fe]/5 border border-[#00f2fe]/20 text-[#00f2fe] mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono glow-text">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="text-sm font-semibold text-slate-400 mt-2 tracking-wide font-display">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const statsList = [
    {
      target: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: Target
    },
    {
      target: 250,
      suffix: "+",
      label: "Happy Clients",
      icon: Users
    },
    {
      target: 98,
      suffix: "%",
      label: "Client Retention Rate",
      icon: ThumbsUp
    },
    {
      target: 10,
      suffix: "M+",
      label: "Ad Impressions Generated",
      icon: Activity
    }
  ];

  return (
    <section className="py-16 bg-[#030712] relative overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsList.map((stat, idx) => (
            <CounterItem
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
