import { ProjectGrid } from '@/components/project-grid';

export default function ProjectsPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl text-muted-foreground">
          A showcase of my recent work and side projects.
        </p>
      </div>
      <ProjectGrid />
    </div>
  );
}