import Image from "next/image";
import Link from "next/link";
import CompanyNavbar from "@/components/company/CompanyNavbar";
import { Zap, Wrench, Lightbulb, BarChart3, ArrowRight } from "lucide-react";

export default function RCElectricalLayout() {
  return (
    <>
      <CompanyNavbar />

      <main className="overflow-x-hidden bg-[#070B14] text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-40 pb-20 sm:pt-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-black opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="text-center md:text-left">
                <div className="inline-block mb-8">
                  <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">
                    RC Electricals
                  </p>
                </div>

                <h1 className="mb-8 max-w-3xl bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-4xl font-black tracking-tighter leading-[0.95] text-transparent sm:text-5xl md:text-6xl lg:text-8xl">
                  Engineering
                  <br />
                  Intelligent
                  <br />
                  Infrastructure
                </h1>

                <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300 mb-12 sm:text-lg md:text-xl">
                  Premier electrical contracting and power distribution solutions serving commercial, industrial, and critical infrastructure projects across India.
                </p>

                <div className="flex flex-col gap-4 md:flex-row">
                  <Link href="#contact" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] md:w-auto md:px-10">
                    Get Proposal
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link href="#projects" className="w-full rounded-xl border-2 border-cyan-400/50 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] md:w-auto md:px-10">
                    View Projects
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(34,211,238,0.12)]">
                  <Image
                    src="/companies/electrical.png"
                    alt="RC Electricals industrial project"
                    width={1200}
                    height={900}
                    className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-xl sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">Scope</p>
                    <p className="mt-2 text-xs text-gray-200 sm:text-sm">Industrial</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-xl sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">Delivery</p>
                    <p className="mt-2 text-xs text-gray-200 sm:text-sm">Turnkey</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3 text-center backdrop-blur-xl sm:p-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">Support</p>
                    <p className="mt-2 text-xs text-gray-200 sm:text-sm">24x7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gradient-to-b from-[#070B14] to-black text-white py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-24">
              <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">About Us</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">
                Two Decades of
                <br />
                Electrical Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h3 className="text-4xl font-bold mb-6 leading-tight">
                  Powering India&apos;s Industrial Growth
                </h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  RC Electricals stands as a pioneer in electrical contracting and power distribution,
                  with 25+ years of proven expertise in engineering intelligent infrastructure solutions.
                </p>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  From large-scale industrial installations to critical infrastructure projects,
                  we deliver turn-key electrical solutions with precision engineering and meticulous project execution.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our track record of 500+ successful projects and 100+ enterprise clients
                  speaks to our commitment to electrical excellence and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-3xl p-10 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-5xl font-black text-cyan-400 mb-3">25+</h4>
                    <p className="text-gray-400 font-medium">Years Expertise</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-3xl p-10 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-5xl font-black text-cyan-400 mb-3">500+</h4>
                    <p className="text-gray-400 font-medium">Projects Delivered</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-3xl p-10 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-5xl font-black text-cyan-400 mb-3">100+</h4>
                    <p className="text-gray-400 font-medium">Enterprise Clients</p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-400/30 rounded-3xl p-10 hover:border-cyan-400/70 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <h4 className="text-5xl font-black text-cyan-400 mb-3">24x7</h4>
                    <p className="text-gray-400 font-medium">Technical Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-black text-white py-40 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-20 -z-10" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-24">
              <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">Core Services</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">
                Complete Electrical Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { icon: Zap, title: "Power Distribution", desc: "Design and installation of advanced distribution systems" },
                { icon: Wrench, title: "Industrial Wiring", desc: "High-capacity industrial electrical wiring solutions" },
                { icon: Lightbulb, title: "Electrical Installation", desc: "Complete project execution and commissioning" },
                { icon: BarChart3, title: "AMC Services", desc: "Preventive maintenance and round-the-clock support" },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-gradient-to-br from-white/8 to-white/3 border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    <div className="relative mb-6 inline-block">
                      <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                        <Icon size={32} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                );
              })}
            </div>

            <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-400/20 rounded-3xl p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-transparent opacity-50" />

              <div className="relative grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">500+</p>
                  <p className="text-gray-400 font-medium text-lg">Projects Executed</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">50+</p>
                  <p className="text-gray-400 font-medium text-lg">Major Industries</p>
                </div>
                <div>
                  <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">99.9%</p>
                  <p className="text-gray-400 font-medium text-lg">Quality Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-[#070B14] text-white py-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center mb-24">
              <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">Portfolio</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Automotive Manufacturing Plant", desc: "Complete electrical infrastructure for 50,000 sq ft facility", scope: "Manufacturing" },
                { title: "IT Park Development", desc: "Power distribution and backup systems for tech hub", scope: "IT Infrastructure" },
                { title: "Hospital Electrical Systems", desc: "Critical power systems for multi-specialty medical facility", scope: "Healthcare" },
                { title: "Data Center Infrastructure", desc: "Advanced electrical and cooling infrastructure", scope: "Enterprise" },
                { title: "Commercial Complex Wiring", desc: "Complete wiring and distribution for 500+ tenant complex", scope: "Commercial" },
                { title: "Industrial Plant Modernization", desc: "Electrical system upgrade and capacity expansion", scope: "Industrial" },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white/8 to-white/3 border border-cyan-400/20 rounded-2xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-8">
                    <span className="inline-block mb-4 px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full uppercase tracking-widest">
                      {project.scope}
                    </span>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6">
                      {project.desc}
                    </p>

                    <Link href="#contact" className="flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors group-hover:gap-3">
                      Discuss Project
                      <span>→</span>
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent w-0 group-hover:w-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black text-white py-40">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 p-16 text-center">
              <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium mb-6">Get Started</p>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Contact our electrical experts to discuss your power distribution and infrastructure needs.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105">
                Request Proposal
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
