'use client';

import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      color: string;
    }> = [];

    const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'];

    // Create particles
    const createParticle = (x: number, y: number) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Geometric shapes for background
    const geometricShapes: Array<{
      x: number;
      y: number;
      rotation: number;
      size: number;
      speed: number;
      type: 'triangle' | 'hexagon' | 'diamond';
    }> = [];

    for (let i = 0; i < 20; i++) {
      geometricShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: 0,
        size: Math.random() * 50 + 20,
        speed: Math.random() * 0.02 + 0.01,
        type: ['triangle', 'hexagon', 'diamond'][Math.floor(Math.random() * 3)] as 'triangle' | 'hexagon' | 'diamond'
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric shapes
      geometricShapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.strokeStyle = `rgba(0, 255, 255, 0.1)`;
        ctx.lineWidth = 1;
        ctx.beginPath();

        switch (shape.type) {
          case 'triangle':
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size * 0.866, shape.size * 0.5);
            ctx.lineTo(-shape.size * 0.866, shape.size * 0.5);
            ctx.closePath();
            break;
          case 'hexagon':
            for (let i = 0; i < 6; i++) {
              const angle = (i * Math.PI) / 3;
              const x = Math.cos(angle) * shape.size;
              const y = Math.sin(angle) * shape.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.closePath();
            break;
          case 'diamond':
            ctx.moveTo(0, -shape.size);
            ctx.lineTo(shape.size, 0);
            ctx.lineTo(0, shape.size);
            ctx.lineTo(-shape.size, 0);
            ctx.closePath();
            break;
        }

        ctx.stroke();
        ctx.restore();

        shape.rotation += shape.speed;
        shape.x += Math.sin(shape.rotation) * 0.5;
        shape.y += Math.cos(shape.rotation) * 0.3;

        // Wrap around screen
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Fade effect
        const alpha = 1 - (particle.life / particle.maxLife);
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Remove dead particles
        if (particle.life >= particle.maxLife) {
          particles[index] = createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          );
        }

        // Wrap particles around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}