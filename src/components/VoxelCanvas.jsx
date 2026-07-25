import React, { useEffect, useRef } from 'react';

export default function VoxelCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for parallax tilt
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Draw Isometric Voxel Block
    const drawVoxelBlock = (x, y, size, topColor, leftColor, rightColor, glowColor = null) => {
      const h = size * 0.577; // ~tan(30deg)
      
      // Glow if specified
      if (glowColor) {
        ctx.save();
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 15;
      }

      // Top Face
      ctx.fillStyle = topColor;
      ctx.beginPath();
      ctx.moveTo(x, y - h);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x - size, y);
      ctx.closePath();
      ctx.fill();

      // Left Face
      ctx.fillStyle = leftColor;
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x, y + h + size);
      ctx.lineTo(x - size, y + size);
      ctx.closePath();
      ctx.fill();

      // Right Face
      ctx.fillStyle = rightColor;
      ctx.beginPath();
      ctx.moveTo(x, y + h);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x + size, y + size);
      ctx.lineTo(x, y + h + size);
      ctx.closePath();
      ctx.fill();

      // Pixel Grid Lines outline
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      if (glowColor) {
        ctx.restore();
      }
    };

    // Voxel Blocks Data
    const blockTypes = [
      { top: '#00FF9D', left: '#00cc7d', right: '#00995e', glow: '#00FF9D' }, // Emerald / Neon Green
      { top: '#00E5FF', left: '#00b8cc', right: '#008b99', glow: '#00E5FF' }, // Cyan Tech
      { top: '#FF5500', left: '#cc4400', right: '#993300', glow: '#FF5500' }, // Redstone / Orange
      { top: '#A855F7', left: '#86198f', right: '#701a75', glow: '#A855F7' }, // Obsidian Purple
      { top: '#222733', left: '#191d26', right: '#11141a', glow: null },      // Dark Slate Block
    ];

    const voxels = Array.from({ length: 18 }, (_, i) => {
      const type = blockTypes[i % blockTypes.length];
      return {
        x: (Math.random() * 0.9 + 0.05) * width,
        y: (Math.random() * 0.8 + 0.1) * height,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 16 + 18,
        speedY: Math.random() * 0.4 + 0.1,
        floatOffset: Math.random() * Math.PI * 2,
        type,
        parallaxFactor: (Math.random() * 0.03) + 0.01
      };
    });

    // Floating Ember/Pixel Particles
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      color: Math.random() > 0.4 ? '#00FF9D' : '#00E5FF'
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffsetX = (mouse.x - width / 2);
      const mouseOffsetY = (mouse.y - height / 2);

      // Render Floating Embers
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time * 2 + p.x) * 0.4);
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      });
      ctx.globalAlpha = 1.0;

      // Render Voxel Blocks
      voxels.forEach((v) => {
        const floatY = Math.sin(time + v.floatOffset) * 12;
        const renderX = v.x + mouseOffsetX * v.parallaxFactor;
        const renderY = v.y + floatY + mouseOffsetY * v.parallaxFactor;

        drawVoxelBlock(
          renderX,
          renderY,
          v.size,
          v.type.top,
          v.type.left,
          v.type.right,
          v.type.glow
        );
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
