"use client";

import { useState } from "react";
import { FileText, TrendingUp, Building2, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const responsibilities = [
  "Market and business context definition",
  "Marketing strategy development",
  "Technical concept development",
  "Capacity and scalability planning",
  "Site and infrastructure assessment",
  "CAPEX and OPEX estimation",
  "Sustainability and resource efficiency",
  "Implementation and contracting strategy",
];

const benefits = [
  "Investment-grade feasibility studies accepted by lenders",
  "Consistent alignment between market, technical, and financial assumptions",
  "Reduced financing risk and smoother credit approval processes",
  "A concept ready to move directly into project execution",
];

const financingInstitutions = [
  "Afrexim Bank",
  "DEG / KfW",
  "BOAD",
  "IFU",
  "Ecobank",
  "Coris Bank",
  "Euler Hermes (Germany)",
  "SACE (Italy)",
  "Atradius (Netherlands)",
];

const highlights = [
  "Bankable feasibility built for lender scrutiny",
  "Aligned market, technical, and financial assumptions",
  "Concepts ready to move directly into execution",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

export default function BeverageConcept() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="concept"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#eae7e2_0%,transparent_55%)] opacity-70" />
        <div className="absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container-width relative">
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
            Beverage Concept
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Commercial and Technical Feasibility Study
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon turns beverage ideas into bankable concepts by combining market insight, financial modelling, and practical engineering at the earliest project stage.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            Feasibility is structured for real investment decisions, financing approval, and direct transition into EPC structuring and execution.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100/70 p-8 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
                >
                  <TrendingUp className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Market Study & Marketing Strategy
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Market studies translate demand realism and pricing logic into a coherent go-to-market plan that connects directly to capacity planning.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
                >
                  <Building2 className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Financial Modelling & Bankability
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Lender-grade models connect technical assumptions to commercial outcomes with scenario and sensitivity analysis built in.
              </p>
              
              <motion.div
                className="mt-6 pt-6 border-t border-slate-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-4">
                  Approved by Major Financing Institutions
                </p>
                <div className="flex flex-wrap gap-2">
                  {financingInstitutions.map((institution, i) => (
                    <motion.span
                      key={institution}
                      custom={i}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      {institution}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
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
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Executive Highlights
                </h3>
              </div>
              <ul className="space-y-3">
                {highlights.map((item, index) => (
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
              className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white to-primary/5 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Impact Snapshot
              </h3>
              <ul className="space-y-3">
                {benefits.slice(0, 2).map((benefit, index) => (
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
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                {isExpanded ? "Read Less" : "Read More"}
                <span className="text-base leading-none">{isExpanded ? "−" : "+"}</span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-10 overflow-hidden"
            >
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Detailed Scope & Responsibilities
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {responsibilities.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    What This Means for Beverage Projects
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
