import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Calendar, Rocket, ShieldCheck, Activity, ChevronRight, Zap } from 'lucide-react';

const APP_TABS = [
  {
    id: 'ai',
    label: 'AI Copilot Engine',
    icon: Bot,
    color: '#38bdf8',
    headline: 'AI-Powered Campus Innovation',
    preview: {
      stat1: '98.4% Accuracy',
      stat2: 'Instant Hackathon Builder',
      desc: 'Generates automated project rubrics, AI pitch reviews, and campus event schedules in seconds.'
    }
  },
  {
    id: 'events',
    label: 'Smart Event OS',
    icon: Calendar,
    color: '#00FF9D',
    headline: 'End-to-End Event Management',
    preview: {
      stat1: '10k+ Attendees',
      stat2: 'Live QR Check-in',
      desc: 'Seamless ticketing, automated leaderboard updates, and instant digital credential minting.'
    }
  },
  {
    id: 'growth',
    label: 'Student Growth Ledger',
    icon: Rocket,
    color: '#a855f7',
    headline: 'Verified Student Portfolios',
    preview: {
      stat1: '100% On-Chain/Verified',
      stat2: 'Career Ready',
      desc: 'Transform club activities and hackathon victories into recruiter-ready digital credentials.'
    }
  }
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(APP_TABS[0]);

  return (
    <section className="relative z-10 pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      
      {/* 1. Apple Pill Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2 px-4 py-1.5 liquid-glass-pill mb-8 shadow-xl"
      >
        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
        <span className="font-sans text-xs sm:text-sm font-medium tracking-wide text-slate-200">
          ITH OS 1.0 <span className="text-slate-500">•</span> Refining Campus Innovation
        </span>
        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
      </motion.div>

      {/* 2. Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight leading-[1.05] mb-6"
      >
        <span className="text-liquid-gradient block">Crafting the Future.</span>
        <span className="text-emerald-gradient block mt-1">Launching Soon.</span>
      </motion.h1>

      {/* 3. Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto text-lg sm:text-2xl text-slate-300 font-sans font-light leading-relaxed mb-12"
      >
        Where events meet <span className="text-sky-400 font-normal">AI tools</span>, smart campus SaaS, and real-world student growth. We're forging something massive.
      </motion.p>

      {/* 4. Interactive Apple Liquid Glass UI Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="liquid-glass-card max-w-4xl mx-auto p-4 sm:p-8 text-left relative overflow-hidden group shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Top Window Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
              ith-platform-v1.0.app
            </span>
          </div>

          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-[#00FF9D]/30 text-xs font-mono text-[#00FF9D]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>92% Refined & Crafted</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {APP_TABS.map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-medium flex items-center space-x-2.5 transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-white/15 text-white border border-white/20 shadow-lg'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: tab.color }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-black/40 border border-white/10"
          >
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs text-sky-400 font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span>LIVE PREVIEW</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeTab.headline}
              </h3>
              
              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                {activeTab.preview.desc}
              </p>

              <div className="flex items-center space-x-4 pt-2 font-mono text-xs">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  <span className="text-sky-400 font-bold mr-1">Stat:</span> {activeTab.preview.stat1}
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  <span className="text-emerald-400 font-bold mr-1">Feature:</span> {activeTab.preview.stat2}
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3 shadow-2xl">
                <activeTab.icon className="w-8 h-8" style={{ color: activeTab.color }} />
              </div>
              <span className="font-display font-bold text-white text-lg text-center">
                {activeTab.label}
              </span>
              <span className="font-sans text-xs text-slate-400 text-center mt-1">
                Optimized for Indian Campus Ecosystems
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

      </motion.div>

    </section>
  );
}
