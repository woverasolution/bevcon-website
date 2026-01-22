"use client";

import { motion } from "framer-motion";
import { Briefcase, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Senior leadership to drive schedule, budget, and stakeholder alignment."
  },
  {
    icon: Wrench,
    title: "Commissioning Support",
    description: "Technical experts to ensure seamless startup and handover."
  },
  {
    icon: TrendingUp,
    title: "Operations Expertise",
    description: "Interim management to optimize performance and train staff."
  }
];

const benefits = [
  "Immediate Availability",
  "Industry Veterans",
  "Flexible Duration",
  "Risk Mitigation"
];

// Subtle animated network nodes
function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodeCount = 10;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    
    const rect = canvas.getBoundingClientRect();
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 3
      });
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > rect.width) node.vx *= -1;
        if (node.y < 0 || node.y > rect.height) node.vy *= -1;
      });

      // Draw connections
      ctx.strokeStyle = "rgba(69, 86, 96, 0.06)";
      ctx.lineWidth = 1;
      
      nodes.forEach((nodeA, i) => {
        nodes.forEach((nodeB, j) => {
          if (i >= j) return;
          const dist = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.globalAlpha = 1 - dist / 140;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(69, 86, 96, 0.15)";
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

export default function BeverageConnect() {
  return (
    <section id="connect" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Network Background */}
      <div className="absolute inset-0">
        <NetworkVisualization />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Beverage
            <span className="block text-[#ffbb3a]">Connect</span>
          </h2>
          
          <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
            We bridge the gap between permanent staff and external consultants by deploying 
            senior industry professionals for critical project phases.
          </p>
        </motion.div>

        {/* Services - No Cards */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-[#ffbb3a]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-12" />

        {/* Benefits & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          {/* Benefits */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-[#ffbb3a]" />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/network">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors shrink-0"
            >
              Explore Our Network
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
