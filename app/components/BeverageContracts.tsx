"use client";

import { Scale, Shield, CheckCircle2, FileText } from "lucide-react";
import { motion } from "framer-motion";

const contractDuties = [
  "Contract Administration",
  "Review and Approval of Contractor Submissions",
  "Instructions",
  "Payments and Claims",
  "Determinations",
  "Testing and Completion",
  "Defects and Close-Out",
  "Dispute Avoidance and Contractual Robustness",
  "Reporting",
];

const benefits = [
  "Correct application of FIDIC roles and responsibilities",
  "Clear separation between Employer-driven and neutral functions",
  "Reduced claims exposure and contractual ambiguity",
  "Engineering-led contract management grounded in beverage plant reality",
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

export default function BeverageContracts() {
  return (
    <section id="contracts" className="section-padding bg-white">
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
            Beverage Contracts
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            FIDIC Contracts Optimised for the Beverage Industry
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600"
          >
            BevCon supports beverage investors and owners in structuring, adapting, and managing FIDIC-based contracts across all major project delivery models. We apply internationally recognised FIDIC standards while tailoring them to the technical, operational, and commercial realities of beverage plants.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600"
          >
            Our expertise goes beyond contract drafting. BevCon actively supports project execution by assuming defined contractual roles and ensuring that contractual procedures, risk allocation, and performance obligations are applied consistently from contract award through completion and final acceptance.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
              >
                <Shield className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900">
                Employer's Representative
              </h3>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">
              FIDIC Silver Book – EPC / Turnkey Projects
            </p>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              In EPC and turnkey beverage projects, BevCon acts as Employer's Representative, safeguarding the Employer's interests within a clearly defined contractual framework.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              We administer the contract on a day-to-day basis, manage Contractor submissions, review payment applications, and oversee testing, completion, and defects correction. Unlike other FIDIC roles, the Employer's Representative has no duty of neutrality and is not required to act independently; our role is to enforce the agreed risk allocation while ensuring contractual discipline and predictability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10"
              >
                <Scale className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900">
                Engineer
              </h3>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3">
              FIDIC Red, Yellow & Green Books
            </p>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              For traditional and design–build project models, BevCon acts as Engineer under the Contract. In this role, we act fairly, neutrally, and independently when making determinations between Employer and Contractor.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              As Engineer, BevCon administers variations, certifies payments, evaluates time and cost claims, and oversees testing and taking-over. Our focus is on balanced decision-making, technical correctness, and dispute avoidance — ensuring that projects progress efficiently while protecting all parties' contractual rights.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]"
            >
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Typical FIDIC Contract Management Duties
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Across both contractual roles, BevCon provides structured, disciplined contract management covering the full project lifecycle:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {contractDuties.map((duty, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{duty}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -3 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              What This Means for Beverage Projects
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              BevCon combines contractual clarity with hands-on beverage engineering experience — turning FIDIC frameworks into practical tools for successful beverage project delivery.
            </p>
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
        </div>
      </div>
    </section>
  );
}
