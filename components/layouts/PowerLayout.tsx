import Image from "next/image";
import Link from "next/link";
import CompanyNavbar from "@/components/company/CompanyNavbar";
import {
  BarChart3,
  BatteryCharging,
  Building2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: BatteryCharging,
    title: "UPS Systems",
    description: "Online UPS units sized for offices, server rooms, and critical operations.",
  },
  {
    icon: Zap,
    title: "Battery Banks",
    description: "High-capacity battery backup packages for long runtime and stable output.",
  },
  {
    icon: ShieldCheck,
    title: "Power Protection",
    description: "Voltage conditioning, surge protection, and safe power distribution support.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & AMC",
    description: "Preventive maintenance, remote status checks, and structured service plans.",
  },
];

const industries = [
  "Data Centers",
  "Healthcare",
  "Manufacturing",
  "Retail Chains",
  "Telecom",
  "Education",
];

const highlights = [
  {
    title: "Industrial UPS Rack",
    badge: "High load",
    copy: "Compact installation for production floors and control rooms.",
  },
  {
    title: "Battery Backup Cabinet",
    badge: "Long runtime",
    copy: "Configured battery banks for extended outage protection.",
  },
  {
    title: "Inverter Power Suite",
    badge: "Office ready",
    copy: "Practical backup packages for offices, clinics, and retail outlets.",
  },
  {
    title: "Service Contract",
    badge: "24x7 support",
    copy: "AMC coverage for health checks, replacements, and emergency visits.",
  },
];

export default function PowerLayout() {
  return (
    <>
      <CompanyNavbar />
      <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_28%),linear-gradient(180deg,_#091423_0%,_#07111f_100%)] pt-40 sm:pt-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.03fr_0.97fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Energy technology
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable backup power for demanding environments.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Avanti System delivers UPS, battery, and power backup solutions built for resilience, clean uptime, and practical service support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Explore Solutions
              </Link>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Talk to an Engineer
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">UPS</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Battery</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Inverter</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">AMC</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(8,15,28,0.45)]">
              <Image
                src="/companies/avanti.png"
                alt="Avanti System energy solutions"
                width={1200}
                height={900}
                className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
                priority
              />

              <div className="border-t border-white/10 bg-[#08101d] p-5">
                <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs">Installations</p>
                    <p className="mt-2 text-base font-semibold text-white sm:text-lg">400+</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs">Runtime</p>
                    <p className="mt-2 text-base font-semibold text-white sm:text-lg">Long</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80 sm:text-xs">Support</p>
                    <p className="mt-2 text-base font-semibold text-white sm:text-lg">24x7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#08101d] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Company Overview</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Power protection systems designed to keep operations moving.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Avanti System focuses on dependable backup power. The approach is practical, industrial, and service-led, with solutions that fit offices, facilities, and production sites without overcomplicating the setup.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              From compact inverter setups to larger UPS rooms, the company combines planning, installation, and maintenance into one clear support path.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Years in energy systems" },
              { value: "400+", label: "Backup installs" },
              { value: "99.9%", label: "Uptime goal" },
              { value: "24x7", label: "Support desk" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-cyan-300">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-[#07111f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Solutions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Structured solutions for UPS, battery, and backup power needs.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_16px_40px_rgba(8,15,28,0.35)]"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-200">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{solution.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#08101d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white"
              >
                <Building2 size={18} className="text-cyan-200" />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-[#07111f] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Product Highlights</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Practical systems that fit real sites and real loads.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_16px_40px_rgba(8,15,28,0.35)]"
              >
                <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {item.badge}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#08101d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: "400+", label: "Backup systems" },
              { value: "99.9%", label: "Power continuity focus" },
              { value: "24x7", label: "Service monitoring" },
              { value: "20+", label: "Years expertise" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-cyan-200">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] bg-white/85 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Need a backup power plan that feels solid from day one?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Speak with the Avanti System team about UPS sizing, battery runtime planning, and service coverage for your site.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="mailto:power@avantisystem.com?subject=Avanti%20System%20Inquiry"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Request consultation
              </Link>
              <Link
                href="#home"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Back to top
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
