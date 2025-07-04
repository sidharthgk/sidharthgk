import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { SocialSidebar } from '@/components/SocialSidebar';
import { Footer } from '@/components/Footer';

export default async function FashionDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Back Button - positioned below navigation */}
      <div className="bg-white px-8 py-4 border-b border-gray-200">
        <Link href="/gallery/fashion" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <span aria-hidden="true">←</span> Back
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-160px)]">
        {/* Left Content - Coral/Salmon Background */}
        <div className="w-full md:w-1/2 bg-coral p-8 flex flex-col justify-center relative">
          {/* Vertical decorative line */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 hidden md:block"></div>
          
          <div className="max-w-lg mx-auto text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-center">
              Lorem Ipsum is simply dummy text text
            </h1>
            <div className="text-left space-y-6 text-sm leading-relaxed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled
              </p>
            </div>
          </div>
          
          {/* Bottom decorative lines */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-px h-16 bg-white/20"></div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-auto">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xl">Fashion Image Gallery {slug}</span>
          </div>
        </div>
      </div>

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Footer */}
      <Footer />
    </div>
  );
}