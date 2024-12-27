"use client";

import { motion } from "framer-motion";
import { TestimonialSlider } from "@/components/testimonial-slider";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          What clients say about working with me.
        </p>
      </motion.div>
      <TestimonialSlider />
    </section>
  );
}