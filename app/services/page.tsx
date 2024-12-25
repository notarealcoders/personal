import { ServiceCards } from '@/components/service-cards';

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-xl text-muted-foreground">
          Professional services tailored to your needs.
        </p>
      </div>
      <ServiceCards />
    </div>
  );
}