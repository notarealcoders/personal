"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

const BLOG_POSTS = [
  {
    title: "Building Scalable Web Applications",
    excerpt: "Learn the best practices for building scalable and maintainable web applications.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["Web Development", "Architecture"],
    slug: "building-scalable-web-applications"
  },
  {
    title: "Modern State Management in React",
    excerpt: "An in-depth look at modern state management solutions in React applications.",
    date: "2024-03-10",
    readTime: "6 min read",
    tags: ["React", "State Management"],
    slug: "modern-state-management-react"
  },
  {
    title: "Optimizing Website Performance",
    excerpt: "Essential techniques for improving your website's loading speed and performance.",
    date: "2024-03-05",
    readTime: "7 min read",
    tags: ["Performance", "Optimization"],
    slug: "optimizing-website-performance"
  }
];

export function BlogPreview() {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials about web development, design, and technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}