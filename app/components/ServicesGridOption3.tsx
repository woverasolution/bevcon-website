import { 
  Lightbulb, 
  Factory, 
  FileText, 
  ShieldCheck, 
  Briefcase, 
  BarChart3, 
  Users 
} from 'lucide-react';

// Option 3: Matches Hero Option 3 (Deep Slate Charcoal + Copper + Montserrat/Open Sans)
const services = [
  {
    title: "Concept",
    description: "Commercial and technical feasibility studies.",
    icon: Lightbulb
  },
  {
    title: "Construction",
    description: "Project development, tender management, and supervision.",
    icon: Factory
  },
  {
    title: "Contracts",
    description: "FIDIC-based contracts optimized for the industry.",
    icon: FileText
  },
  {
    title: "Confidence",
    description: "Technical and commercial operational support.",
    icon: ShieldCheck
  },
  {
    title: "Consulting",
    description: "Independent technical audits and advisory.",
    icon: Briefcase
  },
  {
    title: "Control",
    description: "Project/operational controlling and reporting.",
    icon: BarChart3
  },
  {
    title: "Connect",
    description: "Deployment of experts for short/long-term roles.",
    icon: Users
  }
];

export default function ServicesGridOption3() {
  return (
    <section id="services" className="py-24 bg-[#EAEAEA]">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          
          {/* Sticky Header Column */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-5xl font-[family-name:var(--font-montserrat)] font-black text-[#1C2331] uppercase leading-tight mb-8">
              The <span className="text-[#C08055]">BevCon</span><br />Standard.
            </h2>
            <p className="text-[#1C2331]/80 font-[family-name:var(--font-open-sans)] text-lg leading-relaxed mb-8">
              Seven distinct pillars of excellence. We combine deep industry knowledge with rigorous execution standards to deliver predictable success.
            </p>
            <a href="#contact" className="inline-flex items-center text-[#C08055] font-bold uppercase tracking-widest text-sm hover:text-[#1C2331] transition-colors">
              Start a Project <span className="ml-2">→</span>
            </a>
          </div>

          {/* Grid Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-baseline gap-4 mb-4 border-b border-[#1C2331]/10 pb-4 group-hover:border-[#C08055] transition-colors duration-300">
                  <span className="text-[#C08055] font-bold text-sm">0{index + 1}</span>
                  <h3 className="text-2xl font-[family-name:var(--font-montserrat)] font-bold text-[#1C2331] group-hover:text-[#C08055] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[#1C2331]/70 font-[family-name:var(--font-open-sans)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
