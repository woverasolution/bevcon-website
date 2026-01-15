import { Settings, FileText, DollarSign } from 'lucide-react';

const services = [
  {
    title: "Technical Engineering",
    description: "Technical audits, FIDIC-based solutions, design management, and value engineering.",
    icon: Settings,
    items: [
      "Technical audits",
      "FIDIC-based solutions",
      "design management",
      "and value engineering"
    ]
  },
  {
    title: "Contracts & Claims",
    description: "Contract administration, FIDIC based claim management, employer's representative, mediation & negotiation.",
    icon: FileText,
    items: [
      "Contract administration",
      "FIDIC based claim management",
      "employer's representative",
      "mediation & negotiation"
    ]
  },
  {
    title: "Finance & Cost Control",
    description: "Risk management, cost analysis, commercial strategy, and project finance.",
    icon: DollarSign,
    items: [
      "Risk management",
      "cost analysis",
      "commercial strategy",
      "and project finance"
    ]
  }
];

const expertise = [
  {
    number: "1",
    title: "Strategic Engineering",
    subtitle: "Audit, design, planning"
  },
  {
    number: "2",
    title: "Contract & Claims Management",
    subtitle: "FIDIC-based management"
  },
  {
    number: "3",
    title: "Commercial & Finance",
    subtitle: "Cost analysis, feasibility"
  },
  {
    number: "4",
    title: "Project Execution Support",
    subtitle: "Mediation, partner coordination"
  }
];

export default function ServicesGridOption4() {
  return (
    <>
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center px-6">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2D3748] mb-4">
                  {service.title}
                </h3>

                {/* Description as bullet points */}
                <div className="text-[#4A5568] text-sm leading-relaxed space-y-1">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start justify-center gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Expertise Section */}
      <section className="py-16 bg-[#F7F5F3]">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-[#2D3748] mb-12">
            Independent Expertise In:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <span className="text-5xl font-bold text-[#E5E5E5]">
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-[#2D3748] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A5568]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Connect Section */}
      <section className="py-16 bg-[#4A5568]">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                READY TO CONNECT?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="bg-white text-[#4A5568] hover:bg-gray-100 px-8 py-3 text-sm font-medium transition-all duration-300">
                Get In Touch
              </button>

              <div className="text-white space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm">+ 00 1234 5678</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">123 West St., Suite 456,</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm">contact@bevcon.com</span>
                  <span className="text-sm">Your-City 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#4A5568]">
        <div className="container-width">
          <div className="bg-[#3D4653] p-12 max-w-3xl ml-auto relative">
            {/* Quote Icon */}
            <div className="text-primary text-6xl font-serif mb-6">&ldquo;</div>

            {/* Quote Text */}
            <blockquote className="text-white text-2xl font-light leading-relaxed mb-8">
              BevCon ensured our project was on time, within budget, and fully compliant.
            </blockquote>

            {/* Author */}
            <div className="border-t border-white/20 pt-4">
              <p className="text-white font-medium">
                Michael H., <span className="text-white/70 font-light italic">Project Manager</span>
              </p>
            </div>

            {/* Arrow */}
            <div className="absolute bottom-8 right-8">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
