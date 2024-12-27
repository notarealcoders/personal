"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient",
      className
    )}>
      {children}
    </span>
  );
}