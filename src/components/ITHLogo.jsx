import React from 'react';

export default function ITHLogo({ className = "h-8 w-auto" }) {
  return (
    <div className={`inline-flex items-center overflow-hidden rounded-md ${className}`}>
      <img
        src="/ith-logo.png"
        alt="InnoTech-Hub Logo"
        className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
      />
    </div>
  );
}
