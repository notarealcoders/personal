"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";

const skills = [
  { name: "React", progress: 90 },
  { name: "Node.js", progress: 85 },
  { name: "TypeScript", progress: 88 },
  { name: "UI/UX", progress: 82 },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <Image
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4"
              alt="Professional headshot"
              fill
              className="rounded-2xl object-cover shadow-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a full-stack developer passionate about creating exceptional
            digital experiences. With expertise in modern web technologies,
            I bring ideas to life through clean code and intuitive design.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}