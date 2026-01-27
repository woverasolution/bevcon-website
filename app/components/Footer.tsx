"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "auto"
      });
    }
  };
  return (
    <footer
      id="contact"
      className="bg-slate-900 py-12 sm:py-14 md:py-16 text-slate-300 border-t border-slate-800"
    >
      <div className="container-width">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Image
              src="/logos/DARK%20BG%20LOGO.svg"
              alt="BevCon"
              width={160}
              height={40}
              className="h-7 sm:h-8 md:h-9 w-auto"
            />
            <p className="text-xs sm:text-sm leading-relaxed max-w-xs text-slate-300">
              Partnering with investors to deliver next-generation beverage projects worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><Link href="/network" className="hover:text-white transition-colors">Our Network</Link></li>
              <li><a href="#services" onClick={(e) => handleHashClick(e, "#services")} className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" onClick={(e) => handleHashClick(e, "#contact")} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="mailto:bier@bevcon.net" className="hover:text-white transition-colors">bier@bevcon.net</a></li>
              <li className="pt-1">
                <div className="space-y-1">
                  <div><a href="tel:+494012345678" className="hover:text-white transition-colors">Office +49 40 1234 5678</a></div>
                  <div><a href="tel:+4915253596946" className="hover:text-white transition-colors">Mobile +49 152 5359 6946</a></div>
                </div>
              </li>
              <li className="pt-1">
                <div className="leading-relaxed">
                  Kleine Johannisstraße 10<br />
                  20457 Hamburg · Germany
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-8 border-t border-slate-800 text-center text-[10px] sm:text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} BevCon. All rights reserved.
            <span className="mx-2">|</span>
            <Link href="/imprint" className="hover:text-slate-300 transition-colors">Imprint</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

