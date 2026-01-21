"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  // Derived state: Navbar is "scrolled" (solid) if not on home page OR if user scrolled down
  const scrolled = !isHome || hasScrolled;

  // Handle scroll state logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 50);
  });

  // Check initial scroll position
  useEffect(() => {
    setHasScrolled(window.scrollY > 50);
    setMobileMenuOpen(false);
  }, [pathname]); // Reset menu on route change

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Navbar height
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
    { name: "Services", href: "/#services" },
    { name: "Our Network", href: "/network" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-3 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border-b border-slate-200/50" 
            : "bg-transparent py-6"
        )}
      >
        {/* Top Accent Line */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-[3px] bg-accent transition-transform duration-500 origin-left",
          scrolled ? "scale-x-100" : "scale-x-0"
        )} />

        <div className="max-w-[95%] xl:max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
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
                      scrolled ? "h-7" : "h-9"
                    )}
                    priority
                  />
                </div>
                <span className={cn(
                  "text-[9px] font-bold tracking-[0.25em] transition-all duration-300 ml-1 uppercase",
                  scrolled ? "text-slate-500 opacity-80" : "text-slate-600"
                )}>
                  Built for Reality
                </span>
              </Link>
            </motion.div>

            <motion.div
              className="hidden items-center gap-6 md:flex"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <nav className="flex items-center gap-6">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        "relative text-[13px] font-bold uppercase tracking-wider transition-colors py-2 group",
                        scrolled ? "text-slate-600 hover:text-primary" : "text-slate-700 hover:text-primary"
                      )}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                    {/* Vertical Divider - only between items, not after last */}
                    {index < navLinks.length - 1 && (
                      <div className={cn(
                        "h-4 w-[1px] mx-6 transition-colors duration-300",
                        scrolled ? "bg-slate-300" : "bg-slate-400/50"
                      )} />
                    )}
                  </div>
                ))}
              </nav>
              
              <Link
                href="/#contact"
                onClick={(e) => handleLinkClick(e, "/#contact")}
                className={cn(
                  "group relative flex items-center gap-2 overflow-hidden px-6 py-2.5 rounded-sm font-bold text-[11px] uppercase tracking-widest transition-all duration-300",
                  scrolled 
                    ? "bg-primary text-white hover:bg-primary-hover shadow-md" 
                    : "bg-white text-primary border border-slate-200 hover:border-primary shadow-sm"
                )}
              >
                <span className="relative z-10">Discuss Your Project</span>
                <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                {!scrolled && (
                  <div className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0" />
                )}
              </Link>
            </motion.div>

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
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                  >
                    <Link
                      href="/#contact"
                      onClick={(e) => handleLinkClick(e, "/#contact")}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
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
