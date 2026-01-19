"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingDown, Gauge, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Ramp-up",
    description: "From commissioning to stable production",
  },
  {
    icon: Gauge,
    title: "Improved Reliability",
    description: "Better efficiency and product quality",
  },
  {
    icon: TrendingDown,
    title: "Lower Costs",
    description: "Reduced downtime and operating expenses",
  },
  {
    icon: Shield,
    title: "Stronger Capabilities",
    description: "In-house operational confidence",
  },
];

export default function BeverageConfidence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      id="confidence"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
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
          04
        </span>
      </motion.div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10">
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                  alt="Modern bottling production line"
                  fill
                  className="object-cover scale-110"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5"
              >
                <p className="text-sm font-medium text-slate-700">Implementation-driven support</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">From Commissioning to Peak Performance</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Beverage
                <span className="block text-primary">Confidence</span>
              </h2>
              <p className="mt-3 text-xl md:text-2xl font-semibold text-accent">
                Operations Support
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Helping producers stabilise production and build sustainable capabilities.
              </p>
            </motion.div>

            {/* Stacked Benefit Cards */}
            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30, rotateX: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    x: 10,
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 shadow-sm cursor-default"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
