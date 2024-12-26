'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTilt } from './use-tilt';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  shadowLayers?: number;
  shadowOpacity?: number;
  shadowDirection?: number;
  edgeHighlight?: boolean;
}

export function TiltCard({
  children,
  className,
  shadowLayers = 3,
  shadowOpacity = 0.3,
  shadowDirection = 315,
  edgeHighlight = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { style, tilt } = useTilt(cardRef, {
    max: 12,
    perspective: 1000,
    scale: 1.05,
  });

  const shadows = Array.from({ length: shadowLayers }).map((_, i) => {
    const opacity = shadowOpacity * ((shadowLayers - i) / shadowLayers);
    const offset = (i + 1) * 2;
    const angle = (shadowDirection * Math.PI) / 180;
    const x = Math.cos(angle) * offset;
    const y = Math.sin(angle) * offset;
    
    return `${x}px ${y}px ${offset * 2}px rgba(0, 0, 0, ${opacity})`;
  });

  return (
    <motion.div
      ref={cardRef}
      style={style}
      className={cn(
        'relative rounded-xl overflow-hidden',
        'before:absolute before:inset-0 before:z-10',
        edgeHighlight && 'before:bg-gradient-to-br before:from-white/20 before:to-transparent',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative z-20 h-full"
        style={{
          boxShadow: shadows.join(', '),
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}