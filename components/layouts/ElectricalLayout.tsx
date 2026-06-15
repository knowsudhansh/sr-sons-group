import Link from "next/link";
import Image from "next/image";
import CompanyNavbar from "@/components/company/CompanyNavbar";
export default function ElectricalLayout() {

    return (
    <>
      <CompanyNavbar />

      <main className="bg-[#070B14] text-white">
     
      {/* Hero Section */}
      <section
  id="home"
  className="min-h-screen flex items-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <p className="uppercase tracking-[6px] text-cyan-400">
            RC Electricals
          </p>
        <Image
  src="/logos/rc-electricals.png"
  alt="RC Electricals"
  width={120}
  height={120}
/>
          <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-tight">
            Engineering
            <br />
            Intelligent Infrastructure
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-3xl">
            Delivering industrial electrical contracting,
            power distribution systems and infrastructure
            solutions for commercial and industrial projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              href="#contact"
              className="
              px-8 py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-semibold
            "
            >
              Get Proposal
            </Link>

            <Link
              href="#projects"
              className="
              px-8 py-4
              rounded-2xl
              border border-white/10
              bg-white/5
            "
            >
              View Projects
            </Link>

          </div>

        </div>

      </section>


      {/* Services */}

      <section
  id="services"
  className="py-28"
>

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold">
                Electrical Contracting
              </h3>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold">
                Industrial Wiring
              </h3>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold">
                Power Distribution
              </h3>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold">
                Maintenance Services
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Projects */}

      <section
  id="projects"
  className="py-28 bg-white/[0.02]"
>

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="h-[300px] rounded-3xl bg-white/5 border border-white/10" />

            <div className="h-[300px] rounded-3xl bg-white/5 border border-white/10" />

            <div className="h-[300px] rounded-3xl bg-white/5 border border-white/10" />

          </div>

        </div>

      </section>

      {/* Why RC */}

      <section
  id="about"
  className="py-28"
>

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-8">
  About RC Electricals
</h2>

<p className="text-center text-gray-400 max-w-4xl mx-auto mb-16 text-lg">
  RC Electricals is a leading electrical contracting company
  specializing in industrial wiring, power distribution,
  infrastructure development, maintenance services and
  turnkey electrical projects across commercial and
  industrial sectors.
</p>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                25+
              </h3>

              <p className="mt-3 text-gray-400">
                Years Experience
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                500+
              </h3>

              <p className="mt-3 text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                100+
              </h3>

              <p className="mt-3 text-gray-400">
                Clients
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
              <h3 className="text-4xl font-bold text-cyan-400">
                24x7
              </h3>

              <p className="mt-3 text-gray-400">
                Support
              </p>
            </div>

          </div>

        </div>

      </section>
        <section
  id="contact"
  className="py-28 bg-white/[0.02]"
>
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold">
      Contact Us
    </h2>

    <p className="mt-6 text-gray-400">
      Need electrical solutions for your project?
    </p>

    <Link
      href="#contact"
      className="
      mt-8
      inline-flex
      items-center
      justify-center
      px-8
      py-4
      rounded-2xl
      bg-cyan-500
      text-black
      font-semibold
      "
    >
      Request Proposal
    </Link>

  </div>
</section>
    </main>
     </>
  );
}
