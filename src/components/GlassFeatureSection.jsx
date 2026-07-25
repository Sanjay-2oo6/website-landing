import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Building2, Rocket, ArrowUpRight, Sparkles, Shield, Cpu, Zap } from 'lucide-react';

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Tools & Copilot Suite',
    tag: 'INTELLIGENCE',
    color: '#38bdf8',
    glow: 'from-sky-500/20 to-blue-600/5',
    desc: 'Empowering students and event hosts with automated AI pitch generators, smart event schedule optimization, and intelligent hackathon rubrics.',
  },
  {
    icon: Calendar,
    title: 'Smart Campus Events OS',
    tag: 'OPERATIONS',
    color: '#00FF9D',
    glow: 'from-emerald-500/20 to-teal-600/5',
    desc: 'End-to-end event management platform, instant QR ticketing, live leaderboard updates, and automated digital certificate distribution.',
  },
  {
    icon: Building2,
    title: 'Unified Campus SaaS Hub',
    tag: 'PLATFORM',
    color: '#a855f7',
    glow: 'from-purple-500/20 to-indigo-600/5',
    desc: 'Centralized administrative console for college clubs, innovation cells, and tech communities to run activities effortlessly.',
  },
  {
    icon: Rocket,
    title: 'Student Growth & Portfolio',
    tag: 'CAREER',
    color: '#f97316',
    glow: 'from-orange-500/20 to-amber-600/5',
    desc: 'Transform raw project builds, hackathon wins, and event leadership into a verified, recruiter-ready digital tech portfolio.',
  },
];

export default function GlassFeatureSection() {
  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-sky-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FOUR ESSENTIAL PILLARS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Engineered for Peak Performance.
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-sans font-light mt-3">
          A harmonious blend of AI intelligence, streamlined campus operations, and student career empowerment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="liquid-glass-card p-8 relative group hover:border-white/25 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feat.glow} rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

              <div className="flex items-center justify-between mb-6">
                <div 
                  className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ color: feat.color }}
                >
                  <Icon className="w-7 h-7" />
                </div>
                
                <span className="font-mono text-[11px] font-bold text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10">
                  {feat.tag}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-sky-300 transition-colors flex items-center justify-between">
                <span>{feat.title}</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                {feat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
