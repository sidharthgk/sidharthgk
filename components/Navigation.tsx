import React from 'react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Hamburger menu */}
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center - Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              HOME
            </Link>
            <Link href="/apply" className="text-gray-700 hover:text-gray-900 font-medium">
              APPLY NOW
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              CONTACT US
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 font-medium">
              BLOG
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              ABOUT
            </Link>
          </div>

          {/* Right side - Logo and Search */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="text-xl font-bold text-gray-900">
              LOGO
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}