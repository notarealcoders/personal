'use client';

import { useState, useEffect, RefObject } from 'react';

interface TiltOptions {
  max: number;
  perspective: number;
  scale: number;
  speed: number;
  easing: string;
}

interface TiltValues {
  tiltX: number;
  tiltY: number;
  rotateX: number;
  rotateY: number;
}

const defaultOptions: TiltOptions = {
  max: 12,
  perspective: 1000,
  scale: 1.05,
  speed: 500,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

export const useTilt = (ref: RefObject<HTMLElement>, options: Partial<TiltOptions> = {}) => {
  const [tilt, setTilt] = useState<TiltValues>({
    tiltX: 0,
    tiltY: 0,
    rotateX: 0,
    rotateY: 0,
  });

  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let updateCall: number | null = null;
    let bounds: DOMRect;

    const onMouseEnter = () => {
      bounds = element.getBoundingClientRect();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) return;

      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;

      const xRotate = (opts.max * (y - bounds.height / 2)) / (bounds.height / 2);
      const yRotate = -(opts.max * (x - bounds.width / 2)) / (bounds.width / 2);

      const values = {
        tiltX: x,
        tiltY: y,
        rotateX: xRotate,
        rotateY: yRotate,
      };

      if (updateCall !== null) {
        cancelAnimationFrame(updateCall);
      }

      updateCall = requestAnimationFrame(() => setTilt(values));
    };

    const onMouseLeave = () => {
      if (updateCall !== null) {
        cancelAnimationFrame(updateCall);
      }
      
      setTilt({
        tiltX: 0,
        tiltY: 0,
        rotateX: 0,
        rotateY: 0,
      });
    };

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mousemove', onMouseMove);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, opts.max]);

  return {
    style: {
      transform: `perspective(${opts.perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(${opts.scale}, ${opts.scale}, ${opts.scale})`,
      transition: `transform ${opts.speed}ms ${opts.easing}`,
    },
    tilt,
  };
};