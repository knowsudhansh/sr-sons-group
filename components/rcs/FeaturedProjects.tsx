import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Kitchen display wall refresh",
      description:
        "A neat product wall built around cooktops, boxed appliances, and easier browsing for showroom visitors.",
      category: "Showroom Setup",
      metrics: "Display wall",
      image: "/uploads/store-01.jpg",
    },
    {
      title: "Cooling solutions corner",
      description:
        "A seasonal section designed for coolers and utility products with clear visibility and simple comparison.",
      category: "Store Layout",
      metrics: "Category bay",
      image: "/uploads/store-02.jpg",
    },
    {
      title: "Premium appliance aisle",
      description:
        "A bright aisle layout that helps customers move through refrigerators, cooling units, and mixed appliance stock.",
      category: "Retail Flow",
      metrics: "Aisle design",
      image: "/uploads/store-03.jpg",
    },
    {
      title: "Front-of-store merchandising",
      description:
        "A welcoming entry display that sets the tone for the showroom and gives the product range immediate visibility.",
      category: "Entrance",
      metrics: "First impression",
      image: "/uploads/store-04.jpg",
    },
    {
      title: "Refrigerator feature bay",
      description:
        "A premium product area for larger appliances with clear presentation and a polished retail feel.",
      category: "Large Appliances",
      metrics: "Feature zone",
      image: "/uploads/store-05.jpg",
    },
    {
      title: "Product showcase angle",
      description:
        "A balanced in-store view that helps customers see the showroom as a real, working retail destination.",
      category: "Gallery View",
      metrics: "Store snapshot",
      image: "/uploads/store-03.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24 text-white md:py-36"
    >
      <div className="absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-600/10 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-300">
            Featured Projects
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight leading-[0.95] text-white md:text-7xl">
            Real showroom work that makes the business feel lived in.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            These are the kinds of layouts, display walls, and product zones
            that give customers a clear sense of the store before they visit.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-cyan-400/15 bg-white/[0.03] shadow-[0_0_28px_rgba(34,211,238,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 top-0 p-6">
                  <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <div className="mb-6 rounded-[20px] border border-cyan-400/20 bg-white/5 p-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gray-400">
                    Project focus
                  </p>
                  <p className="text-2xl font-black text-cyan-300">
                    {project.metrics}
                  </p>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-200">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors group-hover:gap-3 group-hover:text-cyan-200"
                >
                  Discuss Store Setup
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
