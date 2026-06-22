import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Integrated Industrial Power Setup",
      description:
        "Complete 500 kW generator installation with automated load distribution for a premium manufacturing plant.",
      category: "Manufacturing",
      metrics: "500 kW",
      image: "/companies/generator.png",
    },
    {
      title: "Critical Medical Infrastructure",
      description:
        "Specialized power backup system for a 250-bed multi-specialty hospital with redundant failover planning.",
      category: "Healthcare",
      metrics: "400 kW",
      image: "/companies/electrical.png",
    },
    {
      title: "Enterprise Data Center Resilience",
      description:
        "Distributed 1000+ kW generator network with automatic synchronization and remote monitoring.",
      category: "IT Infrastructure",
      metrics: "1000+ kW",
      image: "/companies/avanti.png",
    },
    {
      title: "Educational Campus Modernization",
      description:
        "Comprehensive power solution for a large university campus with uninterrupted power during peak demand.",
      category: "Education",
      metrics: "800 kW",
      image: "/companies/electrical.png",
    },
    {
      title: "Telecom Network Reliability",
      description:
        "Distributed generator systems across 50+ telecom tower locations for continuous network availability.",
      category: "Telecom",
      metrics: "Multi-site",
      image: "/companies/generator.png",
    },
    {
      title: "Industrial Production Continuity",
      description:
        "Advanced power infrastructure modernization for high-precision manufacturing with zero tolerance for downtime.",
      category: "Manufacturing",
      metrics: "600 kW",
      image: "/companies/electrical.png",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-black py-36 text-white">
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-cyan-600/10 opacity-20 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-20 text-center md:mb-24">
          <p className="text-sm font-medium uppercase tracking-[7px] text-cyan-400">
            Portfolio
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tighter leading-[0.95] md:text-7xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
            Real-world power solutions delivering results across diverse
            industrial sectors and infrastructure.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-cyan-400/20 bg-white/[0.03] shadow-[0_0_28px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 top-0 p-6">
                  <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-200">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <div className="mb-6 rounded-[20px] border border-cyan-400/20 bg-white/5 p-4">
                  <p className="mb-2 text-sm uppercase tracking-wider text-gray-400">
                    Capacity
                  </p>
                  <p className="text-2xl font-black text-cyan-400">
                    {project.metrics}
                  </p>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors group-hover:gap-3 group-hover:text-cyan-300"
                >
                  Discuss Project
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
