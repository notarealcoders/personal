"use client";

import { motion } from "framer-motion";
import { GradientText } from "./gradient-text";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  gradient?: boolean;
}

export function SectionHeader({ title, subtitle, gradient = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold mb-4">
        {gradient ? <GradientText>{title}</GradientText> : title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}