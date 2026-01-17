"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5,  }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur"
    >
      <div className="container-width">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logos/PRIMARY%20LOGO.png"
                alt="BevCon"
                width={150}
                height={36}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <motion.div
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/#concept"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Services
            </Link>
            <Link
              href="/network"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Our Network
            </Link>
            
            <Link
              href="/#contact"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Contact
            </Link>
          </motion.div>

          <button className="md:hidden" aria-label="Open menu">
            <Menu className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
