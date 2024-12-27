"use client";

import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/project-grid";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore some of my recent work and the technologies used to build them.
        </p>
      </motion.div>
      <ProjectGrid featured />
    </section>
  );
}