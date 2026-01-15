import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";

const metrics = [
  { label: "Projects Delivered", value: "180+" },
  { label: "Capital Managed", value: "$4.2B" },
  { label: "Countries", value: "12" },
];

export default function HeroOption5() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4F0] pt-28">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image-1.png"
          alt="Industrial infrastructure"
          fill
          className="object-cover object-center opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/70 to-transparent" />
      </div>

      <div className="relative container-width grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Image
            src="/logos/PRIMARY%20LOGO.png"
            alt="BevCon"
            width={180}
            height={44}
            className="h-10 w-auto"
            priority
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Next Generation Beverage Solutions
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
            Structure. Confidence. Results.
          </h1>
          <p className="mt-5 text-lg text-slate-600 md:text-xl">
            Specialized engineering and project development partner for global
            beverage investors, breweries, and non-beer producers.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600">
            We plan, structure, and deliver complex facilities with the 7-C
            framework: Concept, Construction, Contracts, Confidence, Consulting,
            Control, and Connect.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="btn-primary flex items-center gap-2">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-sm border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900">
              View Credentials
            </button>
          </div>
          <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-2xl font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/40 bg-white/70 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                7-C Framework
              </span>
              <span className="text-sm font-semibold text-primary">
                Beverage Focus
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              A governance model built for next-generation beverage programs.
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We deliver bankable projects with disciplined oversight across
              feasibility, construction, and operational readiness.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Concept & Construction assurance",
                "FIDIC-aligned contracts & claims",
                "Operational confidence & control",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 hidden h-44 w-44 rounded-full border border-primary/40 bg-primary/10 lg:block" />
        </div>
      </div>
    </section>
  );
}
