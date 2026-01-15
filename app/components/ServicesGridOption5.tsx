import Image from "next/image";
import {
  Shield,
  ClipboardCheck,
  Landmark,
  HardHat,
  TrendingUp,
  Factory,
} from "lucide-react";

const services = [
  {
    title: "Technical Engineering",
    description:
      "Independent technical audits, design governance, and constructability assurance.",
    icon: Factory,
  },
  {
    title: "Contracts & Claims",
    description:
      "FIDIC-based administration, claims strategy, and dispute avoidance.",
    icon: ClipboardCheck,
  },
  {
    title: "Finance & Cost Control",
    description:
      "Commercial strategy, investment diligence, and lifecycle cost certainty.",
    icon: Landmark,
  },
];

const expertise = [
  {
    title: "Strategic Engineering Audits",
    detail: "Design validation, value engineering, and readiness reviews.",
    icon: Shield,
  },
  {
    title: "Contract & Claims Management",
    detail: "Employer’s representative services and claims mitigation.",
    icon: ClipboardCheck,
  },
  {
    title: "Commercial & Finance",
    detail: "Capex governance, funding support, and cost-to-complete control.",
    icon: TrendingUp,
  },
  {
    title: "Project Execution Support",
    detail: "On-site delivery oversight and commissioning alignment.",
    icon: HardHat,
  },
];

export default function ServicesGridOption5() {
  return (
    <>
      <section id="services" className="section-padding bg-white">
        <div className="container-width">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Core Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Independent expertise that protects capital and performance.
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600">
              From board-level strategy to on-site execution, we deliver
              disciplined oversight that keeps projects compliant, bankable, and
              resilient.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="mt-6 h-px w-16 bg-primary/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section-padding bg-[#F7F4F0]">
        <div className="container-width grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Independent Expertise
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Integrated oversight across the full project lifecycle.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Our specialists embed alongside owners and financiers to build
              defensible project controls, governance frameworks, and executive
              reporting that withstands scrutiny.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Assurance Outcomes
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p>✓ Transparent cost-to-complete reporting</p>
                <p>✓ Contract risk quantified and mitigated</p>
                <p>✓ Stakeholder alignment across delivery</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                  <item.icon className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-width grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl bg-slate-900 p-10 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
            <Image
              src="/logos/DARK%20BG%20LOGO.svg"
              alt="BevCon"
              width={140}
              height={34}
              className="h-8 w-auto"
            />
            <p className="text-5xl text-primary">“</p>
            <blockquote className="mt-4 text-2xl font-light leading-relaxed">
              BevCon structured our beverage expansion with clarity, keeping the
              program on schedule, within budget, and investor-ready.
            </blockquote>
            <div className="mt-8 border-t border-white/15 pt-4 text-sm text-white/80">
              Michael H., <span className="italic">Project Manager</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Ready To Connect
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                Lead with confidence on your next industrial build.
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Our team provides board-ready reporting and execution assurance
                from feasibility to commissioning.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <p>+00 1234 5678</p>
              <p>contact@bevcon.com</p>
              <p>123 West St., Suite 456, Your-City 12345</p>
              <button className="btn-primary w-full">Schedule a Briefing</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
