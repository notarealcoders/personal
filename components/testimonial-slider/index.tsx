'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialCard } from './testimonial-card';

const TESTIMONIALS = [
  {
    content: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "Exceptional attention to detail and great communication throughout the project. Would definitely work with them again.",
    author: "Michael Chen",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "Their expertise in modern web technologies helped us create a fantastic user experience for our customers.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    content: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "Exceptional attention to detail and great communication throughout the project. Would definitely work with them again.",
    author: "Michael Chen",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "Their expertise in modern web technologies helped us create a fantastic user experience for our customers.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    content: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "Exceptional attention to detail and great communication throughout the project. Would definitely work with them again.",
    author: "Michael Chen",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "Their expertise in modern web technologies helped us create a fantastic user experience for our customers.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
  {
    content: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "Exceptional attention to detail and great communication throughout the project. Would definitely work with them again.",
    author: "Michael Chen",
    role: "CEO",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "Their expertise in modern web technologies helped us create a fantastic user experience for our customers.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
];

export function TestimonialSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {TESTIMONIALS.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}