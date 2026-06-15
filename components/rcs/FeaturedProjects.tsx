import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Integrated Industrial Power Setup",
      description: "Complete 500 kW generator installation with automated load distribution for premium manufacturing plant. Seamless integration with existing infrastructure.",
      category: "Manufacturing",
      metrics: "500 kW"
    },
    {
      title: "Critical Medical Infrastructure",
      description: "Specialized power backup system for 250-bed multi-specialty hospital with redundant failover mechanisms ensuring zero patient care interruption.",
      category: "Healthcare",
      metrics: "400 kW"
    },
    {
      title: "Enterprise Data Center Resilience",
      description: "Distributed 1000+ kW generator network with automatic synchronization and remote monitoring for large-scale data center operations.",
      category: "IT Infrastructure",
      metrics: "1000+ kW"
    },
    {
      title: "Educational Campus Modernization",
      description: "Comprehensive power solution for large university campus serving 50,000+ students and staff with uninterrupted power during peak demand.",
      category: "Education",
      metrics: "800 kW"
    },
    {
      title: "Telecom Network Reliability",
      description: "Distributed generator systems across 50+ telecom tower locations ensuring continuous network availability and service quality.",
      category: "Telecom",
      metrics: "Multi-site"
    },
    {
      title: "Industrial Production Continuity",
      description: "Advanced power infrastructure modernization for high-precision manufacturing with zero tolerance for downtime and power quality.",
      category: "Manufacturing",
      metrics: "600 kW"
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">Portfolio</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mt-6 leading-[0.95] max-w-4xl mx-auto">
            Featured Projects
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Real-world power solutions delivering results across diverse industrial sectors and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white/8 to-white/3 border border-cyan-400/20 rounded-[28px] overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)] min-h-[280px]"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="relative p-7 md:p-8">
                <div className="inline-block mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Metrics Display */}
                <div className="mb-6 p-4 bg-white/5 border border-cyan-400/20 rounded-[20px]">
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Capacity</p>
                  <p className="text-2xl font-black text-cyan-400">{project.metrics}</p>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA */}
                <Link href="#contact" className="flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group-hover:gap-3">
                  Discuss Project
                  <span>→</span>
                </Link>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
