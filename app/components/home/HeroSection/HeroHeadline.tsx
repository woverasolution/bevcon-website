"use client";

import { motion } from "framer-motion";
import { textCascade } from "@/app/lib/animations";
import { useReducedMotion } from "@/app/lib/hooks/useReducedMotion";

export default function HeroHeadline() {
  const prefersReducedMotion = useReducedMotion();

  const headlineLines = ["Beverage projects,", "engineered to perform."];

  return (
    <div className="text-center">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white/85">
          Concept • Construction • Confidence
        </span>
      </motion.div>

      <div className="mt-6 space-y-2">
        {headlineLines.map((line, index) => (
          <motion.h1
            key={line}
            custom={index}
            initial={prefersReducedMotion ? "visible" : "hidden"}
            animate="visible"
            variants={textCascade}
            className="mx-auto max-w-5xl text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
            style={{ textShadow: "0 10px 30px rgba(0, 0, 0, 0.45)" }}
          >
            {line}
          </motion.h1>
        ))}
      </div>

      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="mt-6 mx-auto max-w-3xl text-pretty text-base sm:text-lg md:text-xl text-white/85 leading-relaxed px-4"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.45)" }}
      >
        BevCon partners with investors and operators to plan, structure, and
        deliver beverage facilities worldwide — from feasibility through
        commissioning.
      </motion.p>

      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 text-sm text-white/75"
      >
        {[
          { k: "$4.2B", v: "delivered" },
          { k: "180+", v: "projects" },
          { k: "12", v: "countries" },
        ].map((item) => (
          <div
            key={item.k}
            className="inline-flex items-baseline gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
          >
            <span className="text-white font-bold">{item.k}</span>
            <span className="text-white/70">{item.v}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
