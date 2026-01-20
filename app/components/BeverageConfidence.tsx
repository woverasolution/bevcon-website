"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  { value: "Faster", label: "Ramp-up to stable production" },
  { value: "Improved", label: "Reliability & product quality" },
  { value: "Lower", label: "Downtime & operating costs" },
  { value: "Stronger", label: "In-house capabilities" },
];

export default function BeverageConfidence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={sectionRef}
      id="confidence"
      className="relative overflow-hidden bg-slate-900"
    >
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Image Panel */}
        <div className="relative h-[50vh] lg:h-auto lg:min-h-screen">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
              alt="Modern beverage production line"
              fill
              className="object-cover scale-110"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/30" />

          {/* Accent stripe */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ffbb3a] lg:hidden" />
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1 bg-[#ffbb3a]" />
        </div>

        {/* Right Content Panel */}
        <div className="relative z-10 flex items-center bg-slate-900 py-16 lg:py-0">
          <div className="px-6 sm:px-8 lg:px-16 xl:px-24 max-w-2xl mx-auto lg:mx-0 lg:mr-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Beverage
                <span className="block text-[#ffbb3a]">Confidence</span>
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-slate-300 leading-relaxed">
                Operations support that builds lasting capability. We help producers stabilise production and develop sustainable in-house expertise.
              </p>
            </motion.div>

            {/* Key message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 lg:mt-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Implementation-driven support
              </p>
              <p className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
                From commissioning to{" "}
                <span className="text-[#ffbb3a]">peak performance</span>
              </p>
            </motion.div>

            {/* Outcomes Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 lg:mt-12 pt-8 border-t border-slate-700"
            >
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {outcomes.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-lg lg:text-xl font-bold text-[#ffbb3a]">{item.value}</p>
                    <p className="text-sm text-slate-400 mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom statement */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 lg:mt-12 text-slate-500 text-sm leading-relaxed"
            >
              We transfer knowledge, not dependency — equipping your teams to maintain performance long after our engagement ends.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
