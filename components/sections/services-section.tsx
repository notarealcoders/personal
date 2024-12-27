"use client";

import { motion } from "framer-motion";
import { AppWindow, MonitorCog, MonitorSmartphone, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Web Development",
    icon: <AppWindow />,
    description: "Build fast, scalable, and secure web applications with modern frameworks.",
    techStack: ["React", "Next.js", "Node.js"],
  },
  {
    title: "Mobile Development",
    icon: <MonitorSmartphone />,
    description: "Create responsive and performant mobile apps for iOS and Android.",
    techStack: ["React Native", "Flutter"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette />,
    description: "Design beautiful, user-friendly interfaces with intuitive user experiences.",
    techStack: ["Figma", "Sketch", "Adobe XD"],
  },
  {
    title: "SEO Optimization",
    icon: <MonitorCog />,
    description: "Improve website visibility and ranking with cutting-edge SEO strategies.",
    techStack: ["Google Analytics", "SEO Tools"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions tailored to your needs, from web development to digital optimization.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-4">
                <div className="w-12 h-12 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {service.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}