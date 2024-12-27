"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  progress: number;
}

export function SkillBar({ name, progress }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span>{progress}%</span>
      </div>
      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </div>
  );
}