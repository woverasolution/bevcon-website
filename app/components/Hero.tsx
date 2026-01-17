"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { label: "Projects Delivered", value: "180+" },
  { label: "Capital Managed", value: "$4.2B" },
  { label: "Countries", value: "12" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      
    },
  },
};

const frameworkItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4F0] pt-28">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image-1.png"
          alt="Industrial infrastructure"
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-transparent" />
      </div>

      <div className="relative container-width grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Image
              src="/logos/PRIMARY%20LOGO.png"
              alt="BevCon"
              width={180}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            Next Generation Beverage Solutions
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
          >
            Concept, Construction & Confidence
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-lg text-slate-600 md:text-xl"
          >
            Beverage engineers and project developers partnering with investors to plan, structure, and deliver beverage projects worldwide.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600"
          >
            From idea to realisation to operation. We turn concepts into robust, bankable projects with disciplined engineering and execution excellence.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-sm border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
            >
              View Portfolio
            </motion.button>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <motion.div key={metric.label} variants={itemVariants}>
                <p className="text-2xl font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-white/40 bg-white/70 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                7-C Framework
              </span>
              <span className="text-sm font-semibold text-primary">
                Beverage Focus
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              Comprehensive beverage project delivery.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Our portfolio spans feasibility, construction, contracts, operations, consulting, control, and expert staffing.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Concept – Commercial & Technical Feasibility",
                "Construction – Project Development & Supervision",
                "Contracts – FIDIC-Based Contract Management",
                "Confidence – Operational Support",
                "Consulting – Independent Audits",
                "Control – OPEX Optimization",
                "Connect – Expert Assignments",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={frameworkItemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-10 -right-10 hidden h-44 w-44 rounded-full border border-primary/40 bg-primary/10 lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
