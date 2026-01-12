import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 dark:bg-black/95 dark:border-gray-800">
      <div className="container-width">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
                BevCon
              </span>
              <span className="hidden sm:block w-px h-6 bg-gray-300 mx-2"></span>
              <span className="hidden sm:block text-xs font-medium text-gray-500 uppercase tracking-widest max-w-[140px] leading-tight">
                Concept, Construction & Confidence.
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-300">
              Option 1
            </Link>
            <Link href="/option-2" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-300">
              Option 2
            </Link>
            <Link href="/option-3" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-300">
              Option 3
            </Link>
            <Link href="#contact" className="btn-primary">
              Partner with Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-primary p-2 dark:text-gray-300">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
