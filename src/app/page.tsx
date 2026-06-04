import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-black to-brand-gray text-brand-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/10">
        <h1 className="text-2xl font-bold text-brand-blue">Nexora</h1>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-6xl font-bold mb-6 text-gradient bg-gradient-to-r from-brand-blue to-brand-blue-light">
          Welcome to Nexora Workshop
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          A modern platform for managing e-commerce and workshops with powerful tools and seamless
          integration.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/explore">Explore Now</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs">Documentation</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-brand-black/50">
        <h3 className="text-4xl font-bold mb-12 text-center">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'E-commerce Ready',
              description: 'Complete product management, shopping cart, and payment integration.',
            },
            {
              title: 'Workshop Management',
              description: 'Schedule workshops, manage attendees, and track progress.',
            },
            {
              title: 'Analytics Dashboard',
              description: 'Real-time insights into sales, traffic, and user behavior.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass hover:shadow-glow transition-all duration-300"
            >
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10 text-center text-white/50">
        <p>&copy; 2024 Nexora Workshop. All rights reserved.</p>
      </footer>
    </div>
  );
}
