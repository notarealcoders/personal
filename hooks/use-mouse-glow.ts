"use client";

import { useEffect, RefObject } from "react";

interface UseMouseGlowOptions {
  opacity?: number;
  size?: number;
}

export function useMouseGlow(
  ref: RefObject<HTMLElement>,
  options: UseMouseGlowOptions = {}
) {
  const { opacity = 0.3, size = 60 } = options;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      container.style.setProperty("--x", `${x * 100}%`);
      container.style.setProperty("--y", `${y * 100}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [ref, opacity, size]);

  return {
    style: {
      backgroundImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary)) 0%, transparent ${size}%)`,
      opacity,
      transition: "opacity 0.3s",
    },
  };
}