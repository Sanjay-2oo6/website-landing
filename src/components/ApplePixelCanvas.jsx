import React, { useEffect, useRef } from 'react';

export default function ApplePixelCanvas() {
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

    // Mouse tracking for subtle interactive repulsion & light parallax
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Apple-themed Pixel Particles (Glowing tech dust)
    const particleColors = ['#38bdf8', '#00FF9D', '#ffffff', '#2997ff', '#60a5fa'];
    const particles = Array.from({ length: 65 }, () => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() > 0.8 ? 4 : (Math.random() > 0.5 ? 3 : 2),
        speedY: (Math.random() - 0.5) * 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        baseAlpha: Math.random() * 0.6 + 0.2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    });

    // Subtly floating 3D Isometric Pixel Cubes (Apple Glass Voxel accent)
    const voxelBlocks = Array.from({ length: 12 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.floor(Math.random() * 12 + 10),
      speedY: Math.random() * 0.2 + 0.05,
      offset: Math.random() * Math.PI * 2,
      colorTop: '#ffffff',
      colorLeft: '#2997ff',
      colorRight: '#0066cc',
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Draw Subtle Faint Tech Grid (Apple Precision Grid)
      const gridSize = 40;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Floating Pixel Dust Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Boundary wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let pushX = 0;
        let pushY = 0;

        if (dist < 120) {
          const force = (120 - dist) / 120;
          pushX = -(dx / dist) * force * 2;
          pushY = -(dy / dist) * force * 2;
        }

        const renderX = Math.floor(p.x + pushX);
        const renderY = Math.floor(p.y + pushY);

        const currentAlpha = p.baseAlpha + Math.sin(time * p.pulseSpeed * 50 + p.pulseOffset) * 0.3;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, currentAlpha));

        // Glow shadow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size > 2 ? 8 : 4;

        // Draw crisp pixel square
        ctx.fillRect(renderX, renderY, p.size, p.size);
      });

      // 3. Draw Isometric Glass Voxel Cubes
      voxelBlocks.forEach((v) => {
        v.y -= v.speedY;
        if (v.y < -30) v.y = height + 30;

        const floatX = v.x + Math.sin(time + v.offset) * 8;
        const floatY = v.y + Math.cos(time + v.offset) * 5;
        const s = v.size;
        const h = s * 0.577; // tan(30deg)

        ctx.globalAlpha = 0.25;
        ctx.shadowColor = '#2997ff';
        ctx.shadowBlur = 10;

        // Top Face
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.moveTo(floatX, floatY - h);
        ctx.lineTo(floatX + s, floatY);
        ctx.lineTo(floatX, floatY + h);
        ctx.lineTo(floatX - s, floatY);
        ctx.closePath();
        ctx.fill();

        // Left Face
        ctx.fillStyle = 'rgba(41, 151, 255, 0.6)';
        ctx.beginPath();
        ctx.moveTo(floatX - s, floatY);
        ctx.lineTo(floatX, floatY + h);
        ctx.lineTo(floatX, floatY + h + s);
        ctx.lineTo(floatX - s, floatY + s);
        ctx.closePath();
        ctx.fill();

        // Right Face
        ctx.fillStyle = 'rgba(0, 102, 204, 0.6)';
        ctx.beginPath();
        ctx.moveTo(floatX, floatY + h);
        ctx.lineTo(floatX + s, floatY);
        ctx.lineTo(floatX + s, floatY + s);
        ctx.lineTo(floatX, floatY + h + s);
        ctx.closePath();
        ctx.fill();
      });

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

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
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
