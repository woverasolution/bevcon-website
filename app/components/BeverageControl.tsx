"use client";

import { motion } from "framer-motion";
import { BarChart3, DollarSign, TrendingUp } from "lucide-react";

const kpiCards = [
  { icon: BarChart3, label: "KPI Tracking", value: "Real-time" },
  { icon: DollarSign, label: "Cost Transparency", value: "By area & driver" },
  { icon: TrendingUp, label: "Performance Analysis", value: "Data-driven" },
];

export default function BeverageControl() {
  return (
    <section id="control" className="py-20 md:py-32 bg-[#F7F4F0] overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Dashboard Container */}
            <div className="relative bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
              {/* Section Number */}
              <span className="absolute top-4 right-4 text-[60px] font-bold text-white/5 leading-none select-none">
                06
              </span>

              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500 font-mono">bevcon-control.app</span>
              </div>

              {/* Metric Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "OEE", value: "87.4%", trend: "+2.1%" },
                  { label: "OPEX/hl", value: "€4.23", trend: "-0.8%" },
                  { label: "Yield", value: "98.2%", trend: "+0.4%" },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-4"
                  >
                    <p className="text-xs text-slate-400">{metric.label}</p>
                    <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                    <p className="text-xs text-green-400 mt-1">{metric.trend}</p>
                  </motion.div>
                ))}
              </div>

              {/* Animated Bar Chart */}
              <div className="bg-slate-800/50 rounded-xl p-4 mb-4">
                <p className="text-xs text-slate-400 mb-4">Cost Breakdown by Area</p>
                <div className="space-y-3">
                  {[
                    { label: "Process", width: 85, color: "bg-accent" },
                    { label: "Packaging", width: 72, color: "bg-blue-400" },
                    { label: "Utilities", width: 58, color: "bg-purple-400" },
                    { label: "Maintenance", width: 45, color: "bg-green-400" },
                  ].map((bar, i) => (
                    <div key={bar.label} className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-20">{bar.label}</span>
                      <div className="flex-1 h-6 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.width}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                          className={`h-full ${bar.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line Chart Placeholder */}
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs text-slate-400 mb-3">Performance Trend</p>
                <svg className="w-full h-16" viewBox="0 0 300 60">
                  <motion.path
                    d="M0,45 Q30,40 60,35 T120,30 T180,25 T240,28 T300,20"
                    fill="none"
                    stroke="#ffbb3a"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                  <motion.path
                    d="M0,50 Q30,48 60,45 T120,42 T180,40 T240,38 T300,35"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    strokeOpacity="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Beverage
                <span className="block text-primary">Control</span>
              </h2>
              <p className="mt-3 text-xl md:text-2xl font-semibold text-accent">
                Operational Intelligence
              </p>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                See where value is created and lost. Make data-driven decisions.
              </p>
            </motion.div>

            {/* KPI Cards */}
            <div className="mt-10 space-y-4">
              {kpiCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900">
                      {card.label}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
            >
              <p className="text-sm font-medium text-slate-700">
                Transform technical performance into financial outcomes
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
