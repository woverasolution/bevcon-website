"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Activity, TrendingUp, Zap } from "lucide-react";

const metrics = [
  { label: "OEE", value: "87.4", unit: "%", trend: "+2.1%", trendUp: true },
  { label: "OPEX/hl", value: "4.23", unit: "€", trend: "-0.8%", trendUp: true },
  { label: "Yield", value: "98.2", unit: "%", trend: "+0.4%", trendUp: true },
];

const costBreakdown = [
  { label: "Process", value: 85, color: "#ffbb3a" },
  { label: "Packaging", value: 72, color: "#60a5fa" },
  { label: "Utilities", value: 58, color: "#a78bfa" },
  { label: "Maintenance", value: 45, color: "#34d399" },
];

const capabilities = [
  {
    icon: Activity,
    title: "Real-time KPIs",
    description: "Live operational metrics across all production areas",
  },
  {
    icon: TrendingUp,
    title: "Cost Transparency",
    description: "Granular breakdown by area, driver, and time period",
  },
  {
    icon: Zap,
    title: "Performance Analysis",
    description: "Data-driven insights for continuous improvement",
  },
];

export default function BeverageControl() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      id="control"
      className="relative py-24 md:py-32 lg:py-40 bg-[#F8F6F3] overflow-hidden"
    >
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#455660_1px,transparent_0)] bg-[size:32px_32px]" />
      </div>

      {/* Accent stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffbb3a] to-transparent" />

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Beverage
              <span className="block text-[#ffbb3a]">Control</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
              See where value is created and lost. Transform technical
              performance into financial outcomes with operational intelligence
              that drives decisions.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left - Dashboard */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            style={{ y: dashboardY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow effect behind dashboard */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#ffbb3a]/20 via-transparent to-blue-500/10 rounded-[2rem] blur-2xl" />

              {/* Dashboard Container */}
              <div className="relative bg-slate-900 rounded-2xl lg:rounded-3xl p-5 md:p-8 shadow-2xl overflow-hidden border border-slate-800">
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Dashboard Header */}
                <div className="relative flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-red-400"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-yellow-400"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 font-mono">
                      bevcon-control.app
                    </span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="relative grid grid-cols-3 gap-3 md:gap-4 mb-6">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-slate-700/50 group cursor-default"
                    >
                      <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-medium">
                        {metric.label}
                      </p>
                      <div className="flex items-baseline gap-1 mt-2">
                        <motion.span
                          className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                        >
                          {metric.value}
                        </motion.span>
                        <span className="text-sm text-slate-400">
                          {metric.unit}
                        </span>
                      </div>
                      <motion.p
                        className={`text-xs mt-1 font-medium ${
                          metric.trendUp ? "text-green-400" : "text-red-400"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      >
                        {metric.trend}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>

                {/* Cost Breakdown Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-slate-800/40 rounded-xl p-4 md:p-5 mb-4 border border-slate-700/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs md:text-sm text-slate-400 font-medium">
                      Cost Breakdown by Area
                    </p>
                    <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                      YTD
                    </span>
                  </div>
                  <div className="space-y-3">
                    {costBreakdown.map((bar, i) => (
                      <motion.div
                        key={bar.label}
                        className="group cursor-default"
                        onMouseEnter={() => setHoveredBar(i)}
                        onMouseLeave={() => setHoveredBar(null)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400 w-20 md:w-24 group-hover:text-white transition-colors">
                            {bar.label}
                          </span>
                          <div className="flex-1 h-7 bg-slate-700/40 rounded-lg overflow-hidden relative">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.value}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: 0.6 + i * 0.15,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-lg relative overflow-hidden"
                              style={{ backgroundColor: bar.color }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={
                                  hoveredBar === i ? { x: "100%" } : { x: "-100%" }
                                }
                                transition={{ duration: 0.6 }}
                              />
                            </motion.div>
                            {/* Value label */}
                            <motion.span
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white/80"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                            >
                              {bar.value}%
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Performance Trend Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-slate-800/40 rounded-xl p-4 md:p-5 border border-slate-700/30"
                >
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs md:text-sm text-slate-400 font-medium">
                      Performance Trend
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-[#ffbb3a]" />
                        Actual
                      </span>
                      <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        Target
                      </span>
                    </div>
                  </div>
                  <svg
                    className="w-full h-20 md:h-24"
                    viewBox="0 0 300 70"
                    preserveAspectRatio="none"
                  >
                    {/* Grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 20 + 10}
                        x2="300"
                        y2={i * 20 + 10}
                        stroke="#334155"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                      />
                    ))}
                    {/* Target line (dashed blue) */}
                    <motion.path
                      d="M0,50 Q30,48 60,45 T120,42 T180,40 T240,38 T300,35"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      strokeDasharray="6 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                    {/* Actual line (solid amber) with glow */}
                    <motion.path
                      d="M0,55 Q30,48 60,42 T120,35 T180,30 T240,32 T300,22"
                      fill="none"
                      stroke="#ffbb3a"
                      strokeWidth="3"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                    {/* Data points */}
                    {[
                      { x: 0, y: 55 },
                      { x: 60, y: 42 },
                      { x: 120, y: 35 },
                      { x: 180, y: 30 },
                      { x: 240, y: 32 },
                      { x: 300, y: 22 },
                    ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#ffbb3a"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                      />
                    ))}
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-8"
            >
              Operational Intelligence
            </motion.p>

            {/* Capability Cards */}
            <div className="space-y-4">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#ffbb3a]/30 transition-all cursor-default"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-slate-900 group-hover:bg-[#ffbb3a] flex items-center justify-center transition-colors">
                    <item.icon className="w-5 h-5 text-[#ffbb3a] group-hover:text-slate-900 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#455660] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-200"
            >
              <p className="text-2xl lg:text-3xl font-semibold text-slate-900 leading-snug">
                From data to{" "}
                <span className="text-[#ffbb3a]">decisions</span>
              </p>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Beverage Control translates complex operational data into
                actionable insights — giving you the clarity to optimise costs,
                improve yields, and drive continuous improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accent stripe at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ffbb3a] to-transparent" />
    </section>
  );
}
