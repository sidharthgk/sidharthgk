import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function FashionGalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fashion Gallery
          </h1>
          <p className="text-lg text-gray-600">
            Browse our collection of fashion items
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link
              key={item}
              href={`/gallery/fashion/${item}`}
              className="block bg-gray-200 aspect-square rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Fashion Item {item}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}