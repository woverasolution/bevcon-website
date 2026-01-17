"use client";

import { BarChart3, DollarSign, TrendingDown, CheckCircle2, Database } from "lucide-react";
import { motion } from "framer-motion";

const responsibilities = [
  "Operational KPI definition and tracking",
  "Cost structure and OPEX transparency",
  "Performance and loss analysis",
  "Reporting systems and management dashboards",
  "Decision-support and scenario analysis",
  "Integration with digital tools",
];

const benefits = [
  "Clear visibility of operational and financial performance",
  "Targeted OPEX optimisation based on facts, not assumptions",
  "Better prioritisation of improvement measures and investments",
  "Stronger management control over complex beverage operations",
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

export default function BeverageControl() {
  return (
    <section id="control" className="section-padding bg-[#F7F4F0]">
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
            Beverage Control
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Controlling, Reporting, OPEX Optimization
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon brings transparency and structure to beverage operations by linking technical performance with financial outcomes. Beverage Control is not classic accounting or generic controlling — it is operations-driven decision support tailored specifically to beverage plants.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            We help owners and management teams understand where value is created, where it is lost, and which levers truly matter. By combining engineering data, operational KPIs, and cost structures, BevCon enables informed decisions that improve performance, reduce waste, and sustainably optimise operating costs.
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
                { icon: BarChart3, title: "KPI Definition & Tracking", desc: "Development of meaningful KPIs across process, packaging, utilities, maintenance, quality, and energy — focused on operational relevance, not reporting volume." },
                { icon: DollarSign, title: "OPEX Transparency", desc: "Breakdown of operating costs by area, asset group, and cost driver, enabling targeted optimisation instead of blanket cost cutting." },
                { icon: TrendingDown, title: "Performance & Loss Analysis", desc: "Identification of efficiency losses, downtime drivers, yield losses, energy and water inefficiencies, and their financial impact." },
                { icon: Database, title: "Digital Integration", desc: "Alignment with digital solutions such as maintenance systems, laboratory data, and business intelligence platforms to ensure consistent and reliable data flows." },
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
