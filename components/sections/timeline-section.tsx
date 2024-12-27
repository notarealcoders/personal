"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of enterprise-scale applications",
    technologies: ["Next.js", "Node.js", "AWS"],
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained multiple client projects",
    technologies: ["React", "Express", "MongoDB"],
  },
  {
    year: "2020",
    title: "Frontend Developer",
    company: "Creative Agency",
    description: "Created responsive web applications",
    technologies: ["React", "TypeScript", "SCSS"],
  },
  {
    year: "2018",
    title: "Junior Developer",
    company: "StartUp Hub",
    description: "Started career in web development",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export function TimelineSection() {
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
          <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My career progression and key milestones in the tech industry.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 ${
                index % 2 === 0 ? "pr-12 md:ml-auto md:pl-12 md:pr-0" : "pl-12"
              } md:w-1/2`}
            >
              <Card className="relative">
                <div
                  className={`absolute top-1/2 -mt-2 w-4 h-4 rounded-full bg-primary ${
                    index % 2 === 0
                      ? "-left-10 md:-right-10 md:left-auto"
                      : "-left-10"
                  }`}
                />
                <CardHeader>
                  <Badge className="w-fit mb-2">{item.year}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}