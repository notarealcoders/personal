"use client";

import { useRef } from "react";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import {
  AboutSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
  ContactSection,
  SkillsSection,
  TimelineSection,
} from "@/components/sections";
import { BlogPreview } from "@/components/sections/blog-preview";
import { AchievementsSection } from "@/components/sections/achievements";
import { FeaturedWork } from "@/components/sections/featured-work";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseGlow = useMouseGlow(containerRef);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute inset-0" style={mouseGlow.style} />
      <div className="container mx-auto px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <FeaturedWork />
        <TimelineSection />
        <StatsSection />
        <ProjectsSection />
        <AchievementsSection />
        <BlogPreview />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}