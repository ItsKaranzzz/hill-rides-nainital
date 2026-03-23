'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Hill Rides Nainital
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/fleet" className="text-gray-300 hover:text-primary transition-colors">
              Fleet
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link href="/fleet" className="text-gray-300 hover:text-primary transition-colors py-2">
                Fleet
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-primary transition-colors py-2">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-primary transition-colors py-2">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
