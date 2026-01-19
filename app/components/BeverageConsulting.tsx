"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Factory, Package, Shield, Zap, Wrench, BarChart3 } from "lucide-react";

const auditCategories = [
  { icon: Factory, label: "Plant & Technology", color: "bg-blue-500" },
  { icon: Package, label: "Production", color: "bg-green-500" },
  { icon: Shield, label: "Quality", color: "bg-purple-500" },
  { icon: Zap, label: "Utilities", color: "bg-yellow-500" },
  { icon: Wrench, label: "Maintenance", color: "bg-orange-500" },
  { icon: BarChart3, label: "Performance", color: "bg-red-500" },
];

export default function BeverageConsulting() {
  return (
    <section
      id="consulting"
      className="relative py-20 md:py-32 bg-gradient-to-b from-[#F7F4F0] to-white overflow-hidden"
    >
      {/* Section Number */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-8 right-8 lg:top-16 lg:right-16 z-0"
      >
        <span className="text-[100px] lg:text-[150px] font-bold text-slate-900/5 leading-none select-none">
          05
        </span>
      </motion.div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Beverage
            <span className="block text-primary">Consulting</span>
          </h2>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-accent">
            Independent Audits
          </p>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Fact-based. Performance-driven. Actionable insights.
          </p>
        </motion.div>

        {/* Radial Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Quality inspection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
          </motion.div>

          {/* Connecting Lines - SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 400 400"
          >
            {auditCategories.map((_, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const x2 = 200 + 140 * Math.cos(angle);
              const y2 = 200 + 140 * Math.sin(angle);
              return (
                <motion.line
                  key={index}
                  x1="200"
                  y1="200"
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-slate-200"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Audit Category Badges */}
          {auditCategories.map((category, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const radius = 180; // Distance from center
            const x = 50 + (radius / 200) * 50 * Math.cos(angle);
            const y = 50 + (radius / 200) * 50 * Math.sin(angle);

            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                className="absolute z-20"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-100">
                    <category.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-slate-700 whitespace-nowrap bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    {category.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Spacer for radial layout height */}
          <div className="h-[400px] md:h-[500px]" />
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">
              Comprehensive Coverage
            </p>
            <p className="text-white text-xl font-semibold">
              Every aspect of beverage plant operations
            </p>
            <p className="text-slate-400 mt-3 text-sm">
              Standalone assessments or integrated programmes tailored to your needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
