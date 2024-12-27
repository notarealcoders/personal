"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Web App 2023",
    description: "Winner of the annual Web Development Excellence Award",
    organization: "Tech Innovation Summit"
  },
  {
    icon: Star,
    title: "Top Developer",
    description: "Recognized as a top contributor in the developer community",
    organization: "Developer Community Awards"
  },
  {
    icon: Award,
    title: "Innovation Award",
    description: "For outstanding contribution to open source projects",
    organization: "Open Source Foundation"
  },
  {
    icon: Medal,
    title: "Excellence in Design",
    description: "Award for exceptional UI/UX design implementation",
    organization: "Design Excellence Awards"
  }
];

export function AchievementsSection() {
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
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and awards received throughout my professional journey.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organization}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
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