import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const INGREDIENTS = [
  { id: 'ai', name: 'AI Tools', icon: '⚡', color: '#00E5FF', desc: 'Smart AI assistants for campus project building' },
  { id: 'events', name: 'Events SaaS', icon: '🎪', color: '#FF5500', desc: 'Hackathons, workshops & ticketing platform' },
  { id: 'saas', name: 'Campus Hub', icon: '🏢', color: '#00FF9D', desc: 'Centralized college innovation ecosystem' },
  { id: 'growth', name: 'Growth Ledger', icon: '🚀', color: '#A855F7', desc: 'Verified student achievements & portfolios' },
];

export default function CraftingGrid() {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isCrafted, setIsCrafted] = useState(false);

  const handleSelectIngredient = (ing) => {
    const emptyIndex = grid.findIndex((slot) => slot === null);
    if (emptyIndex !== -1) {
      const nextGrid = [...grid];
      nextGrid[emptyIndex] = ing;
      setGrid(nextGrid);
      checkCrafting(nextGrid);
    }
  };

  const handleClearSlot = (index) => {
    const nextGrid = [...grid];
    nextGrid[index] = null;
    setGrid(nextGrid);
    setIsCrafted(false);
  };

  const handleReset = () => {
    setGrid(Array(9).fill(null));
    setIsCrafted(false);
  };

  const checkCrafting = (currentGrid) => {
    const filledCount = currentGrid.filter(Boolean).length;
    if (filledCount >= 3) {
      setIsCrafted(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00FF9D', '#00E5FF', '#FF5500']
      });
    }
  };

  const filledCount = grid.filter(Boolean).length;

  return (
    <section className="relative z-10 my-12 max-w-4xl mx-auto px-4">
      <div className="bg-[#14171d] border-2 border-[#232833] p-6 sm:p-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#232833] pb-6 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-[#00FF9D] font-pixel text-xs mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE BENCH</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Forge Your Campus Innovation Platform
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
              Click elements below to populate the 3x3 Crafting Table & synthesize ITH.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-3 py-1.5 bg-[#0d0f12] border border-[#232833] text-slate-300 font-mono text-xs hover:border-[#00FF9D] hover:text-[#00FF9D] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Bench</span>
          </button>
        </div>

        {/* Crafting Grid Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Ingredient Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-bold block mb-2">
              Available Modules (Click to Add):
            </span>
            <div className="grid grid-cols-2 gap-2">
              {INGREDIENTS.map((ing) => (
                <button
                  key={ing.id}
                  onClick={() => handleSelectIngredient(ing)}
                  className="p-3 bg-[#0d0f12] border border-[#232833] hover:border-[#00FF9D] text-left transition-all hover:translate-x-1 group flex flex-col justify-between"
                >
                  <div className="text-2xl mb-1">{ing.icon}</div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#00FF9D] block">
                      {ing.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-sans line-clamp-1">
                      {ing.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Center: 3x3 Crafting Table */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <span className="font-mono text-xs text-[#00FF9D] uppercase tracking-widest font-bold mb-3">
              3x3 Crafting Grid ({filledCount}/9)
            </span>
            
            <div className="grid grid-cols-3 gap-2 p-3 bg-[#0d0f12] border-2 border-[#232833] shadow-inner">
              {grid.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => item && handleClearSlot(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 border-2 ${
                    item ? 'border-[#00FF9D] bg-[#14171d] cursor-pointer shadow-[0_0_10px_rgba(0,255,157,0.2)]' : 'border-[#232833] bg-[#0d0f12]/50'
                  } flex items-center justify-center relative transition-all group`}
                >
                  {item ? (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center"
                    >
                      <span className="text-2xl sm:text-3xl">{item.icon}</span>
                      <span className="block font-mono text-[9px] text-[#00FF9D] font-bold">
                        {item.name}
                      </span>
                    </motion.div>
                  ) : (
                    <span className="text-slate-700 font-pixel text-xs">+</span>
                  )}

                  {item && (
                    <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-red-400 font-mono text-[9px] font-bold">
                      REMOVE
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Output Slot */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <ArrowRight className="w-6 h-6 text-[#00FF9D] mb-3 animate-pulse hidden lg:block" />
            <div className="font-mono text-xs text-slate-400 uppercase font-bold mb-2">
              Result Product:
            </div>

            <div className={`w-28 h-28 border-2 ${
              isCrafted ? 'border-[#00FF9D] bg-[#00FF9D]/10 shadow-[0_0_25px_rgba(0,255,157,0.4)]' : 'border-[#232833] bg-[#0d0f12]'
            } flex flex-col items-center justify-center p-2 text-center transition-all duration-300`}>
              {isCrafted ? (
                <motion.div
                  initial={{ scale: 0.5, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-[#00FF9D] text-black font-pixel font-bold flex items-center justify-center text-lg mb-1 shadow-md">
                    ITH
                  </div>
                  <span className="font-pixel text-[10px] text-[#00FF9D] font-bold">
                    ITH PLATFORM
                  </span>
                  <span className="font-mono text-[9px] text-white font-semibold">
                    READY!
                  </span>
                </motion.div>
              ) : (
                <span className="font-mono text-xs text-slate-600 font-semibold text-center">
                  Fill 3+ Slots to Craft
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
