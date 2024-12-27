"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FEATURED_WORKS = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and analytics platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["React", "D3.js", "TypeScript"],
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of selected projects demonstrating technical expertise and creativity.
          </p>
        </motion.div>

        <div className="space-y-24">
          {FEATURED_WORKS.map((work, index) => (
            <ParallaxScroll key={work.title} offset={100}>
              <Spotlight className="group">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative aspect-video md:aspect-auto">
                        <Image
                          src={work.image}
                          alt={work.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                        <p className="text-muted-foreground mb-4">
                          {work.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {work.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Spotlight>
            </ParallaxScroll>
          ))}
        </div>
      </div>
    </section>
  );
}