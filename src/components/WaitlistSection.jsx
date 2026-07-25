import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Key, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [passKey, setPassKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    const randomKey = 'ITH-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setPassKey(randomKey);
    setSubmitted(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#00FF9D', '#a855f7', '#ffffff']
    });
  };

  return (
    <section id="waitlist" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      
      <div className="liquid-glass-card p-8 sm:p-14 relative shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/15 font-mono text-xs text-sky-400 font-semibold uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EXCLUSIVE BETA ACCESS</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
          Be First to Experience ITH.
        </h2>

        <p className="text-slate-300 font-sans text-base sm:text-lg max-w-xl mx-auto mb-10 font-light">
          Join campus leaders, developers, and innovators on the early access priority list.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto relative z-10">
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college or personal email..."
                className="w-full pl-14 pr-5 py-4 liquid-glass-input text-white placeholder-slate-400 font-sans text-sm focus:outline-none"
                required
              />
            </div>

            {error && (
              <p className="text-red-400 font-mono text-xs text-left pl-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 liquid-glass-btn flex items-center justify-center space-x-2 text-base tracking-wide cursor-pointer"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center space-x-4 font-sans text-xs text-slate-400 pt-3">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Spam</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>Priority Beta Key</span>
              </span>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-white/[0.04] border border-white/15 max-w-md mx-auto space-y-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-[#00FF9D] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-white">
              Access Pass Reserved!
            </h3>

            <p className="text-slate-300 font-sans text-sm font-light">
              We've reserved your early access spot for <span className="text-sky-300 font-semibold">{email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between font-mono">
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <Key className="w-4 h-4 text-amber-400" />
                <span>PASS KEY:</span>
              </div>
              <span className="text-[#00FF9D] font-bold text-base tracking-wider">
                {passKey}
              </span>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono text-slate-400 hover:text-white underline pt-2 block mx-auto cursor-pointer"
            >
              Submit another email address
            </button>
          </motion.div>
        )}

      </div>

    </section>
  );
}
