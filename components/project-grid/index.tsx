'use client';

import { useState } from 'react';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';

const PROJECTS = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    slug: 'ecommerce-platform',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with dynamic charts',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'D3.js', 'TypeScript'],
    slug: 'analytics-dashboard',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social media application',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    tags: ['React Native', 'Firebase', 'Redux'],
    slug: 'social-media-app',
  },
    {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with dynamic charts',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'D3.js', 'TypeScript'],
    slug: 'analytics-dashboard',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    slug: 'ecommerce-platform',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with dynamic charts',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'D3.js', 'TypeScript'],
    slug: 'analytics-dashboard',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social media application',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    tags: ['React Native', 'Firebase', 'Redux'],
    slug: 'social-media-app',
  },
    {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with dynamic charts',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'D3.js', 'TypeScript'],
    slug: 'analytics-dashboard',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social media application',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
    tags: ['React Native', 'Firebase', 'Redux'],
    slug: 'social-media-app',
  },
];

interface ProjectGridProps {
  featured?: boolean;
}

export function ProjectGrid({ featured = false }: ProjectGridProps) {
  const [filter, setFilter] = useState('all');
  const projects = featured ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <div className="space-y-8">
      {!featured && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button
            variant={filter === 'web' ? 'default' : 'outline'}
            onClick={() => setFilter('web')}
          >
            Web
          </Button>
          <Button
            variant={filter === 'mobile' ? 'default' : 'outline'}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </Button>
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}