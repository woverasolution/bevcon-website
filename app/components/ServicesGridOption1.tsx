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
    title: "Beverage Concept",
    description: "Commercial and technical feasibility studies for greenfield and brownfield projects.",
    icon: Lightbulb
  },
  {
    title: "Beverage Construction",
    description: "Project development, tender management, supervision, testing, and final acceptance.",
    icon: Factory
  },
  {
    title: "Beverage Contracts",
    description: "FIDIC-based contracts optimized for the beverage industry (Silver, Yellow, Red, Gold, Green & White Books).",
    icon: FileText
  },
  {
    title: "Beverage Confidence",
    description: "Technical and commercial operational support for stable production.",
    icon: ShieldCheck
  },
  {
    title: "Beverage Consulting",
    description: "Independent technical audits and expert advisory services.",
    icon: Briefcase
  },
  {
    title: "Beverage Control",
    description: "Project and operational controlling, reporting, and OPEX optimization.",
    icon: BarChart3
  },
  {
    title: "Beverage Connect",
    description: "Deployment of experienced experts for short- and long-term assignments.",
    icon: Users
  }
];

export default function ServicesGridOption1() {
  return (
    <section id="services" className="section-padding bg-zinc-50 dark:bg-zinc-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">BevCon Portfolio</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-100 rounded-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white dark:bg-zinc-800 dark:border-zinc-700"
            >
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
