import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ITHLogo from './components/ITHLogo';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const SOCIALS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/innotechhub-official/',
    svg: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/innotechhub.official/',
    svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/CMegRgSgM',
    svg: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z'
  },
];

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#00FF9D', '#ffffff', '#0066cc']
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-between p-6 sm:p-8 bg-[#06090e] select-none">
      
      {/* Top Left: Official ITH Logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center space-x-3 cursor-pointer group">
        <ITHLogo className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Background Image: full image, no cropping */}
      <img
        src="/character_coding_minecraft_v5_hd.png"
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
        style={{ objectPosition: 'center center' }}
      />

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/50 pointer-events-none z-0" />

      {/* Centered Hero Content Block */}
      <main className="relative z-10 my-auto text-center max-w-4xl px-4 flex flex-col items-center justify-center">
        
        {/* Headline: Fixed padding & leading to ensure ZERO text cut off */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-2 pt-2"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.25] py-2 px-6 bg-gradient-to-r from-[#7dd3fc] via-white to-[#7dd3fc] bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] inline-block">
            Launching Soon
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-xs sm:text-base text-slate-300/90 font-normal tracking-wide max-w-lg mx-auto mb-8 drop-shadow-md"
        >
          Currently editing the software range edit. We are crafting.
        </motion.p>

        {/* Interactive Notify Me Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full max-w-md"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex items-center space-x-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your college email..."
                className="flex-1 px-5 py-3.5 apple-glass-input text-sm text-white placeholder-slate-400 font-sans focus:outline-none shadow-xl"
                required
              />
              <button
                type="submit"
                className="apple-btn-primary px-6 py-3.5 text-sm font-medium tracking-wide flex items-center space-x-2 whitespace-nowrap cursor-pointer shadow-xl"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-[#00FF9D]/40 text-[#00FF9D] font-sans text-xs flex items-center justify-center space-x-2 shadow-2xl">
              <CheckCircle2 className="w-4 h-4" />
              <span>You're on the priority list. We'll notify you first!</span>
            </div>
          )}
        </motion.div>

      </main>

      {/* Social Media Links in Bottom Right Corner */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 flex items-center space-x-3 sm:space-x-4">
        {SOCIALS.map((soc) => (
          <a
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`InnoTech-Hub on ${soc.name}`}
            className="text-slate-300 hover:text-white transition-all duration-200 p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 hover:border-sky-400 hover:scale-110 shadow-xl"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d={soc.svg} />
            </svg>
          </a>
        ))}
      </div>

    </div>
  );
}
