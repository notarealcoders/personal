'use client';

import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export function MouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      pointsRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      pointsRef.current = pointsRef.current
        .filter(point => point.age < 25)
        .map(point => ({
          ...point,
          age: point.age + 1,
        }));

      // Draw trail
      ctx.beginPath();
      ctx.strokeStyle = `hsla(var(--primary), 0.2)`;
      ctx.lineWidth = 2;

      pointsRef.current.forEach((point, i) => {
        const opacity = 1 - point.age / 25;
        ctx.strokeStyle = `hsla(var(--primary), ${opacity})`;
        
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          const xc = (point.x + pointsRef.current[i - 1].x) / 2;
          const yc = (point.y + pointsRef.current[i - 1].y) / 2;
          ctx.quadraticCurveTo(point.x, point.y, xc, yc);
        }
      });
      
      ctx.stroke();

      rafRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: 'soft-light' }}
    />
  );
}