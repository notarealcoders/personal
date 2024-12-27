"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./skill-card";
import { skillsData } from "./skills-data";

export function SkillsSection() {
  return (
    <section className="py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies across various domains.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}