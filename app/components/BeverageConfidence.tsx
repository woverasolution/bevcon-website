"use client";

import { TrendingUp, Wrench, BarChart3, CheckCircle2, Users } from "lucide-react";
import { motion } from "framer-motion";

const responsibilities = [
  "Start-up and ramp-up support",
  "Operational optimisation",
  "Maintenance and asset performance support",
  "Troubleshooting and root cause analysis",
  "Performance benchmarking",
  "Cost transparency and operational economics",
  "Training and capability building",
];

const benefits = [
  "Faster transition from commissioning to stable production",
  "Improved reliability, efficiency, and product quality",
  "Lower operating costs and reduced unplanned downtime",
  "Stronger in-house capabilities and operational confidence",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

export default function BeverageConfidence() {
  return (
    <section id="confidence" className="section-padding bg-[#F7F4F0]">
      <div className="container-width">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-primary"
          >
            Beverage Confidence
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Technical and Commercial Operations Support
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon supports beverage producers after commissioning and throughout the operational lifecycle of their plants. We help owners and operators stabilise production, improve performance, and build sustainable internal capabilities — ensuring that engineered assets deliver their intended business value.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            Unlike audit-based consulting, which focuses on assessment and recommendations at a point in time, Beverage Confidence is implementation-driven. We stay involved, work alongside operational teams, and support the transition from project mode to stable, efficient day-to-day operations.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: TrendingUp, title: "Start-up & Ramp-up", desc: "Production stabilisation, performance verification, bottleneck identification, and optimisation during early operation." },
                { icon: BarChart3, title: "Operational Optimisation", desc: "Improvement of yields, line efficiency, throughput, energy and water consumption, and overall equipment effectiveness." },
                { icon: Wrench, title: "Maintenance Support", desc: "Maintenance strategy optimisation, spare parts structures, reliability improvement, and maintenance KPIs." },
                { icon: Users, title: "Capability Building", desc: "Technical training, operational coaching, and structured knowledge transfer to plant teams and management." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 mb-4"
                  >
                    <card.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Typical BevCon Responsibilities
              </h3>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-primary/30 bg-primary/5 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                What This Means for Beverage Projects
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
