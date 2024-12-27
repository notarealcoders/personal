"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Cloud, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design"],
  },
  {
    icon: Terminal,
    title: "DevOps",
    skills: ["CI/CD", "Git", "Linux", "Shell Scripting"],
  },
  // {
  //   icon: Mobile,
  //   title: "Mobile Development",
  //   skills: ["React Native", "Flutter", "iOS", "Android"],
  // },
];

export function SkillsSection() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {skill.skills.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-muted-foreground bg-background/50 rounded-md px-2 py-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}