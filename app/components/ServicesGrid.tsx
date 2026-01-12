import { 
  Lightbulb, 
  Factory, 
  FileText, 
  ShieldCheck, 
  Briefcase, 
  BarChart3, 
  Users 
} from 'lucide-react';

const services = [
  {
    suffix: "cept",
    title: "Concept",
    fullTitle: "Beverage Concept",
    description: "Commercial and technical feasibility studies for greenfield and brownfield projects.",
    icon: Lightbulb
  },
  {
    suffix: "struction",
    title: "Construction",
    fullTitle: "Beverage Construction",
    description: "Project development, tender management, supervision, testing, and final acceptance.",
    icon: Factory
  },
  {
    suffix: "tracts",
    title: "Contracts",
    fullTitle: "Beverage Contracts",
    description: "FIDIC-based contracts optimized for the beverage industry (Silver, Yellow, Red, Gold, Green & White Books).",
    icon: FileText
  },
  {
    suffix: "fidence",
    title: "Confidence",
    fullTitle: "Beverage Confidence",
    description: "Technical and commercial operational support for stable production.",
    icon: ShieldCheck
  },
  {
    suffix: "sulting",
    title: "Consulting",
    fullTitle: "Beverage Consulting",
    description: "Independent technical audits and expert advisory services.",
    icon: Briefcase
  },
  {
    suffix: "trol",
    title: "Control",
    fullTitle: "Beverage Control",
    description: "Project and operational controlling, reporting, and OPEX optimization.",
    icon: BarChart3
  },
  {
    suffix: "nect",
    title: "Connect",
    fullTitle: "Beverage Connect",
    description: "Deployment of experienced experts for short- and long-term assignments.",
    icon: Users
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 dark:bg-zinc-800/20 skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="container-width relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our DNA</span>
          <h2 className="heading-lg mb-6 text-slate-900 dark:text-white">
            The <span className="text-slate-900 dark:text-white">Bev</span><span className="text-primary">Con</span> Formula
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our identity is built on a foundation of seven core disciplines. 
            We combine deep <span className="font-semibold text-slate-900 dark:text-white">Beverage</span> industry expertise with 
            unwavering <span className="font-semibold text-primary">Con</span>fidence in execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-white dark:bg-zinc-800 rounded-sm border-l-4 border-transparent hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 ${index === services.length - 1 ? 'lg:col-start-2' : ''}`}
            >
              {/* Background Icon Removed */}

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded bg-zinc-50 dark:bg-zinc-700 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-1 text-slate-900 dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                  <span className="text-slate-400 dark:text-slate-500 text-lg font-medium block mb-1">Beverage</span>
                  <span className="text-primary">Con</span>{service.suffix}
                </h3>
                
                <div className="h-px w-12 bg-gray-200 dark:bg-zinc-700 my-4 group-hover:w-full group-hover:bg-primary/20 transition-all duration-500"></div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
