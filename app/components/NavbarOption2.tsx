import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

export default function NavbarOption2() {
  return (
    <nav className={`fixed w-full bg-[#0A2647]/95 backdrop-blur-sm z-50 border-b border-[#2C74B3]/30 ${playfair.variable} ${lato.variable}`}>
      <div className="container-width">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white font-[family-name:var(--font-playfair)]">
                BevCon
              </span>
              <span className="hidden sm:block w-px h-6 bg-[#2C74B3] mx-2"></span>
              <span className="hidden sm:block text-xs font-medium text-gray-300 uppercase tracking-widest max-w-[140px] leading-tight font-[family-name:var(--font-lato)]">
                Integrated Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-lato)]">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Option 1
            </Link>
            <Link href="/option-2" className="text-sm font-medium text-white hover:text-[#2C74B3] transition-colors">
              Option 2
            </Link>
            <Link href="/option-3" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Option 3
            </Link>
            <Link href="/option-4" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Option 4
            </Link>
            <Link href="#contact" className="px-6 py-2 bg-[#2C74B3] text-white text-sm font-bold rounded-sm hover:bg-[#205295] transition-colors uppercase tracking-wide">
              Partner with Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#2C74B3] p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

