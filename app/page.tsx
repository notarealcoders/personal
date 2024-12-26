'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { ProjectGrid } from '@/components/project-grid';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    title: 'Web Development',
    icon: '/icons/web-development.svg',
    description: 'Build fast, scalable, and secure web applications with modern frameworks.',
    techStack: ['React', 'Next.js', 'Node.js'],
  },
  {
    title: 'Mobile Development',
    icon: '/icons/mobile-development.svg',
    description: 'Create responsive and performant mobile apps for iOS and Android.',
    techStack: ['React Native', 'Flutter'],
  },
  {
    title: 'UI/UX Design',
    icon: '/icons/design.svg',
    description: 'Design beautiful, user-friendly interfaces with intuitive user experiences.',
    techStack: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    title: 'SEO Optimization',
    icon: '/icons/seo.svg',
    description: 'Improve website visibility and ranking with cutting-edge SEO strategies.',
    techStack: ['Google Analytics', 'SEO Tools'],
  },
];

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section - Enhanced with animations */}
      <HeroSection />

      {/* About Section - Improved layout and animations */}
      <section id="about" className="section-spacing gradient-primary">
        <div className="container mx-auto px-6">
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
                I'm a full-stack developer passionate about creating exceptional digital experiences.
                With expertise in modern web technologies, I bring ideas to life through clean code
                and intuitive design.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Core Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill="React" progress={90} />
                  <SkillBar skill="Node.js" progress={85} />
                  <SkillBar skill="TypeScript" progress={88} />
                  <SkillBar skill="UI/UX" progress={82} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced cards and hover effects */}
      <section id="services" className="section-spacing gradient-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs, from web development
              to digital optimization.
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
                <Card className="card-hover h-full">
                  <div className="p-6 space-y-4">
                    <div className="w-12 h-12 mb-4 relative">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {service.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Projects Section - Enhanced grid and animations */}
      <section id="projects" className="section-spacing gradient-primary">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing gradient-secondary">
        <div className="container mx-auto px-6">
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
        </div>
      </section>

      {/* Contact Section - Enhanced form and accessibility */}
      <section id="contact" className="section-spacing gradient-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 rounded-lg border focus-ring"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 rounded-lg border focus-ring"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 rounded-lg border focus-ring min-h-[150px]"
                    placeholder="Your message"
                    required
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const SkillBar = ({ skill, progress }: { skill: string; progress: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{skill}</span>
      <span>{progress}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-full bg-primary"
      />
    </div>
  </div>
);

export default Home;