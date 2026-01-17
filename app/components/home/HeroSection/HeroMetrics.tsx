"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { DollarSign, Briefcase, Globe, TrendingUp } from "lucide-react";
import { fadeInUp } from "@/app/lib/animations";
import { useReducedMotion } from "@/app/lib/hooks/useReducedMotion";

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  delay: number;
  color: string;
}

function Metric({ icon, value, suffix, prefix, label, description, delay, color }: MetricProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate="visible"
      variants={fadeInUp}
      transition={{ delay }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        whileHover={{ scale: 1.05 }}
      />
      
      {/* Main metric card */}
      <motion.div
        className="relative flex flex-col items-center gap-3 glass-dark rounded-2xl p-6 md:p-8 min-w-[160px] md:min-w-[200px] border border-white/10 hover:border-accent/30 transition-all duration-300"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        {/* Icon with animated background */}
        <motion.div
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${color} shadow-lg`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white">{icon}</div>
        </motion.div>

        {/* Value with enhanced styling */}
        <div className="text-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none">
            {prefersReducedMotion ? (
              <>
                <span className="text-accent">{prefix}</span>
                {value}
                <span className="text-accent">{suffix}</span>
              </>
            ) : (
              <>
                <span className="text-accent">{prefix}</span>
                <CountUp
                  start={0}
                  end={value}
                  duration={2.5}
                  delay={delay}
                  separator=","
                  decimals={prefix === "$" ? 1 : 0}
                />
                <span className="text-accent">{suffix}</span>
              </>
            )}
          </div>
        </div>

        {/* Label and description */}
        <div className="text-center">
          <div className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
            {label}
          </div>
          <div className="text-xs md:text-sm text-white/70 mt-1">
            {description}
          </div>
        </div>

        {/* Trending indicator */}
        <motion.div
          className="flex items-center gap-1 text-accent text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 2, duration: 0.5 }}
        >
          <TrendingUp className="w-3 h-3" />
          <span>Excellence</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Enhanced hero metrics component with stunning visual effects and detailed statistics
 */
export default function HeroMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 1 }}
      className="relative"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="w-96 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </motion.div>

      {/* Metrics grid */}
      <div className="relative flex flex-wrap justify-center items-center gap-6 md:gap-8 px-4">
        <Metric
          icon={<DollarSign className="w-6 h-6 md:w-8 md:h-8" />}
          value={4.2}
          prefix="$"
          suffix="B"
          label="Capital Managed"
          description="In successful projects"
          delay={2.0}
          color="from-green-500 to-emerald-600"
        />
        <Metric
          icon={<Briefcase className="w-6 h-6 md:w-8 md:h-8" />}
          value={180}
          suffix="+"
          label="Projects Delivered"
          description="Across beverage sectors"
          delay={2.2}
          color="from-blue-500 to-cyan-600"
        />
        <Metric
          icon={<Globe className="w-6 h-6 md:w-8 md:h-8" />}
          value={12}
          label="Countries"
          description="Global presence"
          delay={2.4}
          color="from-purple-500 to-pink-600"
        />
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
      </motion.div>
    </motion.div>
  );
}
