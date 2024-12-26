"use client";

import { motion } from "framer-motion";
import { Code2, Users, Award, Coffee } from "lucide-react";

const stats = [
  { icon: Code2, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Award, value: "12+", label: "Awards Won" },
  { icon: Coffee, value: "∞", label: "Coffee Consumed" },
];

export function StatsSection() {
  return (
    <section className="border-y bg-muted/50">
      <div className="container py-12 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon className="h-8 w-8 text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
