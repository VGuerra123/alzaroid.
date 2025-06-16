'use client';

import React, { useRef, useEffect } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;

    let W = window.innerWidth;
    let H = window.innerHeight;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);
    resize();

    // Paleta gris-blanco del Hero
    const colors = [
      { r: 243, g: 244, b: 246 }, // gray-100
      { r: 249, g: 250, b: 251 }, // gray-50
      { r: 255, g: 255, b: 255 }, // white
    ];

    let t = 0;
    const PARTICLE_COUNT = Math.max(18, Math.floor((W * H) / 37000));
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * (H * 0.78) + H * 0.18,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.05 + 0.02,
      alpha: Math.random() * 0.15 + 0.05,
      direction: Math.random() < 0.5 ? 1 : -1,
    }));

    function drawGradient() {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      colors.forEach((col, i) => {
        const pos = i / (colors.length - 1);
        grad.addColorStop(pos, `rgb(${col.r},${col.g},${col.b})`);
      });
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    function drawParticles() {
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();

        p.x += p.speed * p.direction;
        if (p.x > W + p.radius) p.x = -p.radius;
        if (p.x < -p.radius) p.x = W + p.radius;
      }
    }

    function drawOverlay() {
      ctx.save();
      // Capa de cristal muy sutil
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.fillRect(0, 0, W, H);

      // Glow inferior blanco-gris
      const gradBot = ctx.createLinearGradient(0, H * 0.9, 0, H);
      gradBot.addColorStop(0, 'rgba(249,250,251,0)');
      gradBot.addColorStop(1, 'rgba(243,244,246,0.18)');
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = gradBot;
      ctx.fillRect(0, H * 0.9, W, H * 0.1);
      ctx.restore();
      ctx.globalAlpha = 1;
    }

    function animate() {
      t += 0.005;
      ctx.clearRect(0, 0, W, H);
      drawGradient();
      drawParticles();
      drawOverlay();
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
