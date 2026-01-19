"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileSearch, PiggyBank, Rocket, CheckCircle2 } from "lucide-react";

const keyPoints = [
  { icon: FileSearch, label: "Market & Financial Modeling" },
  { icon: PiggyBank, label: "Lender-Ready Documentation" },
  { icon: Rocket, label: "Execution-Ready Concepts" },
];

const financingInstitutions = [
  "Afrexim Bank",
  "DEG / KfW",
  "BOAD",
  "IFU",
  "Ecobank",
];

export default function BeverageConcept() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      id="concept"
      className="relative min-h-[90vh] bg-white overflow-hidden"
    >
      {/* Split Layout Container */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] min-h-[90vh]">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.div
            className="absolute inset-0 scale-110"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
              alt="Engineers reviewing industrial plans"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />

          {/* Right edge gradient blend */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent hidden lg:block" />

          {/* Section Number Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12"
          >
            <span className="text-[120px] lg:text-[180px] font-bold text-white/20 leading-none select-none">
              01
            </span>
          </motion.div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          className="relative flex items-center px-6 py-12 lg:px-16 lg:py-20"
          style={{ y: contentY }}
        >
          <div className="max-w-xl">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]"
            >
              Beverage
              <span className="block text-primary">Concept</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl md:text-2xl font-semibold text-accent"
            >
              Bankable Feasibility
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-slate-600 leading-relaxed"
            >
              Investment-grade concepts that move directly into execution.
            </motion.p>

            {/* Key Points - Icon + Label Only */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-base font-medium text-slate-700">
                    {point.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Badges - Financing Institutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-slate-200"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-4">
                Trusted by Leading Institutions
              </p>
              <div className="flex flex-wrap gap-2">
                {financingInstitutions.map((institution, i) => (
                  <motion.span
                    key={institution}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                    {institution}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
