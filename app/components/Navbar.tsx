"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Derived state: Navbar is "scrolled" (solid) if not on home page OR if user scrolled down
  const scrolled = !isHome || hasScrolled;

  // Handle scroll state logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 50);

    const delta = latest - lastScrollYRef.current;

    if (mobileMenuOpen || latest <= 40) {
      setNavHidden(false);
      lastScrollYRef.current = latest;
      return;
    }

    if (delta > 6) {
      setNavHidden(true);
    } else if (delta < -6) {
      setNavHidden(false);
    }

    lastScrollYRef.current = latest;
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        const isDesktop = window.innerWidth >= 768;
        const offset = isDesktop ? 96 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Our Network", href: "/network" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={isHome ? { y: -100 } : false}
        animate={{ y: navHidden ? -120 : 0, opacity: navHidden ? 0.96 : 1 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 border-b border-slate-200/70 backdrop-blur-sm md:bg-transparent md:border-b-0 md:backdrop-blur-none py-0"
            : "bg-transparent py-0"
        )}
      >
        <div className="relative">
          {/* Desktop full-width container appears on scroll */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{
              opacity: scrolled ? 1 : 0,
              y: scrolled ? 0 : -12,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 top-0 hidden md:block"
          >
            <div className="h-[84px] border-b border-slate-200/80 bg-white/88 backdrop-blur-xl shadow-[0_10px_30px_-22px_rgba(15,23,42,0.45)]" />
          </motion.div>

          <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6">
            <div className="relative flex items-center justify-between min-h-[64px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/" className="group flex flex-col items-start gap-0.5" onClick={(e) => handleLinkClick(e, "/")}>
                <div className="relative">
                  <Image
                    src="/logos/PRIMARY%20LOGO.png"
                    alt="BevCon"
                    width={160}
                    height={40}
                    className={cn(
                      "w-auto transition-all duration-300",
                      scrolled ? "h-6 sm:h-7" : "h-7 sm:h-9"
                    )}
                    priority
                  />
                </div>
                <span className={cn(
                  "text-[8px] sm:text-[9px] font-bold tracking-[0.25em] transition-all duration-300 ml-1 uppercase hidden xs:block sm:block",
                  "text-slate-500"
                )}>
                  Built for Reality
                </span>
              </Link>
            </motion.div>

              <motion.div
                className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: scrolled ? 0.985 : 1,
                }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div
                  className={cn(
                    "rounded-full border px-7 lg:px-9 py-2.5 backdrop-blur-md transition-all duration-500",
                    scrolled
                      ? "border-slate-200/95 bg-white/96 shadow-[0_14px_30px_-18px_rgba(15,23,42,0.28)]"
                      : "border-white/70 bg-white/86 shadow-[0_12px_26px_-20px_rgba(15,23,42,0.35)]"
                  )}
                >
                  <nav className="flex items-center gap-5 lg:gap-6">
                    {navLinks.map((link, index) => (
                      <div key={link.name} className="flex items-center">
                        <Link
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="relative text-[13px] font-bold uppercase tracking-wider transition-colors py-1.5 text-slate-800 hover:text-primary group"
                        >
                          {link.name}
                          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                        {index < navLinks.length - 1 && (
                          <div className="h-4 w-[1px] mx-4 lg:mx-5 bg-slate-300" />
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </motion.div>

              {/* Spacer to balance desktop layout while centered nav floats independently */}
              <div className="hidden md:block w-[160px]" aria-hidden />

            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors relative z-50" 
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-slate-900" />
            </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl md:hidden border-l border-slate-200"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-end p-6 border-b border-slate-100">
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 p-6 overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (0.05 * index) }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="block py-3 text-lg font-bold uppercase tracking-wider text-slate-600 hover:text-primary transition-colors border-b border-slate-50 last:border-0"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Footer / Contact Info in Drawer */}
                <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100">
                   <p className="text-xs text-slate-400 font-medium uppercase tracking-widest mb-2">Built for Reality</p>
                   <p className="text-sm text-slate-500">Global Beverage Engineering</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
