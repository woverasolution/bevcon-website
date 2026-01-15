import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function NavbarOption4() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container-width">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-[#2D3748]">
                BevCon
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-[#4A5568] hover:text-primary transition-colors">
              Option 1
            </Link>
            <Link href="/option-2" className="text-sm font-medium text-[#4A5568] hover:text-primary transition-colors">
              Option 2
            </Link>
            <Link href="/option-3" className="text-sm font-medium text-[#4A5568] hover:text-primary transition-colors">
              Option 3
            </Link>
            <Link href="/option-4" className="text-sm font-medium text-[#2D3748] border-b-2 border-primary hover:text-primary transition-colors">
              Option 4
            </Link>
            <Link href="/option-5" className="text-sm font-medium text-[#4A5568] hover:text-primary transition-colors">
              Option 5
            </Link>
            <Link href="#contact" className="border border-[#2D3748] text-[#2D3748] hover:bg-[#2D3748] hover:text-white px-6 py-2 text-sm font-medium transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-[#2D3748] hover:text-primary p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
