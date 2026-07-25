import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Key } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [craftToken, setCraftToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid college or personal email address.');
      return;
    }

    setError('');
    const randomToken = 'ITH-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setCraftToken(randomToken);
    setSubmitted(true);

    // Confetti celebration blast
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00FF9D', '#00E5FF', '#FF5500', '#FFFFFF']
    });
  };

  return (
    <section id="waitlist" className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      
      <div className="bg-[#14171d] border-2 border-[#00FF9D]/60 p-8 sm:p-12 relative shadow-[0_0_40px_rgba(0,255,157,0.15)]">
        
        {/* Glow corner accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#00FF9D]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FF9D]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#00FF9D]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#00FF9D]" />

        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0d0f12] border border-[#00FF9D]/40 font-mono text-xs text-[#00FF9D] font-bold uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>EARLY ACCESS INVENTORY SLOT</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-4">
          Claim Your Early Access Pass
        </h2>

        <p className="text-slate-300 font-sans text-sm sm:text-base max-w-lg mx-auto mb-8">
          Join the exclusive waitlist of campus leaders, builders, and innovators. Get priority access when ITH crafts live.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college or personal email..."
                className="w-full pl-12 pr-4 py-3.5 bg-[#0d0f12] border-2 border-[#232833] text-white placeholder-slate-500 font-mono text-sm focus:outline-none focus:border-[#00FF9D] transition-colors"
                required
              />
            </div>

            {error && (
              <p className="text-red-400 font-mono text-xs text-left pl-1">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 pixel-btn-neon flex items-center justify-center space-x-3 text-base uppercase tracking-wider cursor-pointer"
            >
              <span>Get Early Access / Craft Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center space-x-4 font-mono text-xs text-slate-400 pt-2">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00FF9D]" />
                <span>Zero Spam</span>
              </span>
              <span>•</span>
              <span>Exclusive Beta Perks</span>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-[#0d0f12] border-2 border-[#00FF9D] space-y-4"
          >
            <div className="w-12 h-12 bg-[#00FF9D]/20 border border-[#00FF9D] text-[#00FF9D] mx-auto flex items-center justify-center rounded-none">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-display font-bold text-white">
              Account Craft Token Minted!
            </h3>

            <p className="text-slate-300 font-sans text-sm">
              We've reserved your early access spot for <span className="text-[#00FF9D] font-mono font-bold">{email}</span>.
            </p>

            <div className="p-3 bg-[#14171d] border border-[#232833] max-w-xs mx-auto flex items-center justify-between font-mono">
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <Key className="w-4 h-4 text-[#FF5500]" />
                <span>PASS KEY:</span>
              </div>
              <span className="text-[#00FF9D] font-bold text-sm tracking-wider">
                {craftToken}
              </span>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono text-slate-400 hover:text-white underline pt-2 block mx-auto"
            >
              Submit another email address
            </button>
          </motion.div>
        )}

      </div>

    </section>
  );
}
