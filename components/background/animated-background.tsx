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
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);
    resize();

    // Paleta top-tier
    const colors = [
      { r: 17, g: 23, b: 56 },    // Azul profundo
      { r: 38, g: 112, b: 236 },  // Azul brillante
      { r: 23, g: 244, b: 255 },  // Celeste neón
      { r: 210, g: 210, b: 255 }, // Blanco azulado
    ];

    // Animación
    let t = 0;

    // Partículas pro, sólo zonas de baja interferencia visual
    const PARTICLE_COUNT = Math.max(18, Math.floor((W * H) / 37000));
    const particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * (H * 0.78) + H * 0.18, // Nunca bajo navbar, ni muy arriba
      radius: Math.random() * 1.7 + 0.8,
      speed: Math.random() * 0.07 + 0.025,
      alpha: Math.random() * 0.22 + 0.08,
      direction: Math.random() < 0.5 ? 1 : -1,
    }));

    function drawGradient() {
      // Gradiente diagonal animado
      const grad = ctx.createLinearGradient(0, 0, W, H * 1.07);
      for (let i = 0; i < colors.length; i++) {
        // Animación ondulada de los stops (efecto "vivo", pero armónico)
        const base = i / (colors.length - 1);
        const offset = base + 0.16 * Math.sin(t + i * 1.3);
        const col = colors[i];
        grad.addColorStop(Math.max(0, Math.min(1, offset)), `rgb(${col.r},${col.g},${col.b})`);
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Gradiente radial suave central para armonizar
      const rGrad = ctx.createRadialGradient(W/2, H*0.58, Math.max(W, H)*0.05, W/2, H*0.58, Math.max(W, H)*0.7);
      rGrad.addColorStop(0, 'rgba(80,230,255,0.09)');
      rGrad.addColorStop(1, 'rgba(24,29,66,0.02)');
      ctx.globalAlpha = 0.86;
      ctx.fillStyle = rGrad;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = 1.0;
    }

    function drawParticles() {
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#7bfff3';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();

        // Movimiento horizontal suave y rebote
        p.x += p.speed * p.direction;
        if (p.x > W + p.radius) p.x = -p.radius;
        if (p.x < -p.radius) p.x = W + p.radius;
      }
    }

    function drawOverlay() {
      // Overlay glass/azulado muy suave (pro trick para visibilidad uniforme)
      ctx.save();
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = 'rgba(17,28,38,0.98)';
      ctx.fillRect(0, 0, W, H);

      // Glow inferior para separar sección hero/contenido
      const gradBottom = ctx.createLinearGradient(0, H * 0.92, 0, H);
      gradBottom.addColorStop(0, 'rgba(0,255,255,0)');
      gradBottom.addColorStop(1, 'rgba(16, 220, 255, 0.17)');
      ctx.globalAlpha = 0.56;
      ctx.fillStyle = gradBottom;
      ctx.fillRect(0, H * 0.91, W, H * 0.09);

      ctx.globalAlpha = 1.0;
      ctx.restore();
    }

    function animate() {
      t += 0.0068;
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
