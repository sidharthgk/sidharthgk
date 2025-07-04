import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Fashion Gallery
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our fashion collection
          </p>
          <Link 
            href="/gallery/fashion/1" 
            className="inline-block bg-coral text-white px-6 py-3 rounded-lg hover:bg-coral/90 transition-colors"
          >
            View Fashion Detail
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}