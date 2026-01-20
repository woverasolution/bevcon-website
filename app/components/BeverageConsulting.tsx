"use client";

import { motion } from "framer-motion";

const auditAreas = [
  { name: "Plant & Technology", description: "Equipment, layout, process design" },
  { name: "Production", description: "Throughput, efficiency, bottlenecks" },
  { name: "Quality", description: "Systems, compliance, consistency" },
  { name: "Utilities", description: "Energy, water, compressed air" },
  { name: "Maintenance", description: "Strategy, reliability, costs" },
  { name: "Performance", description: "KPIs, benchmarks, gaps" },
];

export default function BeverageConsulting() {
  return (
    <section
      id="consulting"
      className="relative py-24 md:py-32 lg:py-40 bg-slate-950 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Beverage
            <span className="block text-[#ffbb3a]">Consulting</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg lg:text-xl text-slate-400 leading-relaxed"
          >
            Independent audits that cut through assumptions. We assess what matters, measure what counts, and deliver insights you can act on.
          </motion.p>
        </div>

        {/* Audit areas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {auditAreas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="bg-slate-950 p-8 lg:p-10 group hover:bg-slate-900 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-bold text-white group-hover:text-[#ffbb3a] transition-colors">
                {area.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-white/10"
        >
          <p className="text-slate-500 max-w-lg">
            Standalone assessments or integrated programmes — tailored to your operational reality.
          </p>
          <p className="text-2xl lg:text-3xl font-semibold text-white whitespace-nowrap">
            Fact-based. <span className="text-slate-500">Always.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
