import { Code2, Palette, Globe, Smartphone } from 'lucide-react';
import { ServiceCard } from './service-card';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that delight users.',
    icon: Palette,
  },
  {
    title: 'SEO Optimization',
    description: 'Improving visibility and organic traffic through search engine optimization.',
    icon: Globe,
  },
  {
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
];

export function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}