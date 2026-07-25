import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Calendar, Building2, Rocket, ArrowUpRight } from 'lucide-react';

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Tools & Copilot',
    badge: 'SLOT 01',
    color: '#00E5FF',
    desc: 'Empowering students and event hosts with AI generators, smart scheduling, automated check-ins, and hackathon assistants.',
  },
  {
    icon: Calendar,
    title: 'Smart Campus Events',
    badge: 'SLOT 02',
    color: '#FF5500',
    desc: 'Seamless end-to-end event management, gamified ticketing, leaderboards, and instant certificate issuing.',
  },
  {
    icon: Building2,
    title: 'Campus SaaS Infrastructure',
    badge: 'SLOT 03',
    color: '#00FF9D',
    desc: 'Centralized dashboard for college clubs, innovation cells, and tech communities to manage operations effortlessly.',
  },
  {
    icon: Rocket,
    title: 'Student Growth & Portfolio',
    badge: 'SLOT 04',
    color: '#A855F7',
    desc: 'Turn event participation, hackathon wins, and project builds into a verified, high-impact digital tech portfolio.',
  },
];

export default function FeatureBlocks() {
  return (
    <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="font-mono text-xs text-[#00FF9D] font-bold uppercase tracking-widest block mb-2">
          SYSTEM CORE PILLARS
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          What We're Crafting Behind the Curtain
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-[#14171d] border-2 border-[#232833] relative group hover:border-[#00FF9D] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              {/* Top Slot Badge */}
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#232833] bg-[#0d0f12] group-hover:border-[#00FF9D] transition-colors"
                  style={{ color: feat.color }}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <span className="font-mono text-xs font-bold text-slate-500 bg-[#0d0f12] px-2.5 py-1 border border-[#232833] group-hover:text-[#00FF9D] group-hover:border-[#00FF9D]/40 transition-colors">
                  {feat.badge}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#00FF9D] transition-colors flex items-center justify-between">
                <span>{feat.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#00FF9D]" />
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {feat.desc}
              </p>

              {/* Bottom decorative corner glow */}
              <div 
                className="absolute bottom-0 right-0 w-8 h-8 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none"
                style={{ backgroundColor: feat.color }}
              />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
