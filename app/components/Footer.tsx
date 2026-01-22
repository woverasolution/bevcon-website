import Image from "next/image";

export default function Footer() {
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
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="mailto:info@bevcon.net" className="hover:text-white transition-colors">info@bevcon.net</a></li>
              <li>Global Operations</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 md:mt-16 pt-6 sm:pt-8 border-t border-slate-800 text-center text-[10px] sm:text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} BevCon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

