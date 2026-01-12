import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export default function NavbarOption3() {
  return (
    <nav className={`fixed w-full bg-[#1C2331]/95 backdrop-blur-sm z-50 border-b border-[#C08055]/20 ${montserrat.variable} ${openSans.variable}`}>
      <div className="container-width">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-tight text-white font-[family-name:var(--font-montserrat)] uppercase">
                Bev<span className="text-[#C08055]">Con</span>
              </span>
              <span className="hidden sm:block w-px h-8 bg-[#C08055] mx-2"></span>
              <span className="hidden sm:block text-[10px] font-bold text-white/80 uppercase tracking-[0.2em] max-w-[140px] leading-relaxed font-[family-name:var(--font-montserrat)]">
                Next Gen<br/>Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 font-[family-name:var(--font-open-sans)]">
            <Link href="/" className="text-xs font-bold text-white/70 hover:text-[#C08055] transition-colors uppercase tracking-widest">
              Option 1
            </Link>
            <Link href="/option-2" className="text-xs font-bold text-white/70 hover:text-[#C08055] transition-colors uppercase tracking-widest">
              Option 2
            </Link>
            <Link href="/option-3" className="text-xs font-bold text-white hover:text-[#C08055] transition-colors uppercase tracking-widest border-b-2 border-[#C08055] pb-1">
              Option 3
            </Link>
            <Link href="#contact" className="border-2 border-[#C08055] text-[#C08055] hover:bg-[#C08055] hover:text-white px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 font-[family-name:var(--font-montserrat)]">
              Partner with Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-[#C08055] p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

