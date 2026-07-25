import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Liquid Ambient Gradient Blob 1 - Top Center Electric Cyan/Blue */}
      <div className="absolute top-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0284c7]/20 via-[#0ea5e9]/15 to-[#38bdf8]/10 blur-[130px] animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Liquid Ambient Gradient Blob 2 - Mid Left Deep Violet/Indigo */}
      <div className="absolute top-[35%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#6366f1]/15 via-[#4f46e5]/10 to-[#a855f7]/10 blur-[140px]" />

      {/* Liquid Ambient Gradient Blob 3 - Right Emerald/Cyan Glow */}
      <div className="absolute top-[60%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#00FF9D]/10 via-[#06b6d4]/10 to-[#0284c7]/5 blur-[150px]" />

      {/* Subtle Specular Top Beam Glow (Apple style light beam) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-[#38bdf8]/10 via-[#0284c7]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Glass Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
}
