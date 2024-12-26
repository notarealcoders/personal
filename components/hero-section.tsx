"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { motion } from "framer-motion";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = heroRef.current;
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
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-background to-background/50"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), hsl(var(--primary)) 0%, transparent 60%)",
          transition: "opacity 0.3s",
        }}
      />
      <div className="container mx-auto relative flex min-h-[90vh] flex-col items-center justify-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypewriterEffect
            words={[{ text: "Crafting Digital" }, { text: "Experiences" }]}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Full-stack developer specializing in building exceptional digital
          experiences that combine beautiful design with powerful functionality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button size="lg" asChild>
            <a href="/projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
