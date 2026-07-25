import React from 'react';
import ITHLogo from './ITHLogo';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const scrollToWaitlist = () => {
    const waitlistEl = document.getElementById('waitlist');
    if (waitlistEl) {
      waitlistEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="liquid-glass-pill px-5 py-3 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        
        {/* Left: Official ITH Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="p-1 bg-[#061329] border border-white/10 rounded-xl transition-all duration-300 group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
            <ITHLogo className="h-7 w-auto" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight leading-tight">
              InnoTech<span className="text-sky-400">-Hub</span>
            </span>
            <span className="font-sans text-[10px] text-slate-400 font-medium tracking-wide">
              Campus Innovation SaaS
            </span>
          </div>
        </div>

        {/* Center/Right Status & Action */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9D]"></span>
            </span>
            <span className="tracking-wider uppercase font-semibold text-[#00FF9D]">SYSTEM ONLINE</span>
          </div>

          <button
            onClick={scrollToWaitlist}
            className="liquid-glass-btn px-4 py-2 text-xs sm:text-sm flex items-center space-x-2 cursor-pointer"
          >
            <span>Early Access</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </nav>
    </header>
  );
}
