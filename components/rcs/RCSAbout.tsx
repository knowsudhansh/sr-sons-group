import Image from "next/image";

export default function RCSAbout() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#070B14] to-black text-white py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 md:mb-24">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">About Us</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mt-6 leading-[0.95] max-w-4xl mx-auto">
            Industry Leader in
            <br />
            Power Solutions
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Two decades of engineering excellence, trusted by thousands of industries
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 items-start mb-20 md:mb-24">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building Power Solutions That Never Stop
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              RCS Electricals Pvt. Ltd. is India&apos;s trusted name in power generation and industrial infrastructure.
              With over 25 years of expertise, we&apos;ve engineered solutions for the nation&apos;s most critical operations.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              From manufacturing advanced generator systems to providing 24/7 technical support, we ensure zero downtime
              for industries that can&apos;t afford to stop.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our commitment is simple: reliable power, every time. That&apos;s why 1000+ clients trust us with their most critical infrastructure.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
              <Image
                src="/companies/electrical.png"
                alt="RCS Electricals power infrastructure"
                width={1200}
                height={800}
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="border-t border-white/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  Project focus
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Industrial sites, campuses, and critical infrastructure where power reliability matters most.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="group relative rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-5xl font-black text-cyan-400">25+</h4>
                  <p className="font-medium text-gray-400">Years of Excellence</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-5xl font-black text-cyan-400">5000+</h4>
                  <p className="font-medium text-gray-400">Systems Installed</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-5xl font-black text-cyan-400">1000+</h4>
                  <p className="font-medium text-gray-400">Satisfied Clients</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-5xl font-black text-cyan-400">30+</h4>
                  <p className="font-medium text-gray-400">Industries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-400/20 rounded-[28px] p-10 md:p-12 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">Our Vision</h4>
              <p className="text-gray-400 leading-relaxed">
                To be Asia&apos;s most trusted and innovative power solutions partner,
                enabling industries to operate with confidence, efficiency, and sustainability. 
                We envision a future where reliable power is accessible to every growing enterprise.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-400/20 rounded-[28px] p-10 md:p-12 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <h4 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h4>
              <p className="text-gray-400 leading-relaxed">
                Deliver superior power generation and backup solutions with exceptional 
                engineering, unmatched reliability, and outstanding customer support. 
                Every generator we build represents our commitment to zero downtime for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
