import { Code2, Palette, Database, Cloud, Terminal, Mobile } from "lucide-react";

export const skillsData = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    icon: Palette,
    title: "Design",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "UI Design", level: 85 },
      { name: "Responsive", level: 95 },
    ],
  },
  {
    icon: Terminal,
    title: "DevOps",
    skills: [
      { name: "Git", level: 95 },
      { name: "Linux", level: 85 },
      { name: "Shell", level: 80 },
      { name: "Monitoring", level: 75 },
    ],
  },
  {
    icon: Mobile,
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "iOS", level: 70 },
      { name: "Android", level: 70 },
    ],
  },
];