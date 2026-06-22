import Image from "next/image";
import FloatingOrb from "./FloatingOrb";
import AnimatedCounter from "./ui/AnimatedCounter";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FutureHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-0 pt-36 pb-24 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-600/20 opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/20 opacity-30 blur-3xl -z-10" />

      <FloatingOrb />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="text-center lg:text-left">
          <div className="inline-block mb-8">
            <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">
              RCS Electricals Pvt. Ltd.
            </p>
          </div>

          <h1 className="mx-auto max-w-3xl text-5xl font-black tracking-tighter leading-[0.95] bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent md:text-7xl lg:mx-0 lg:text-8xl">
            Power Generation &
            <br />
            Industrial Solutions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:mx-0">
            Delivering mission-critical power systems and infrastructure
            solutions for industries, enterprise campuses, and commercial
            facilities.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.25em] text-gray-400 lg:mx-0">
            Built for factories, campuses, and critical facilities that need
            dependable power every day.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] sm:w-auto md:px-10"
            >
              Explore Services
              <span>→</span>
            </Link>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-cyan-400/40 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-300 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] sm:w-auto md:px-10"
            >
              View Products
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 lg:mx-0">
            <div className="group relative rounded-[24px] border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
              <div className="relative">
                <AnimatedCounter value={25} label="Years" />
                <p className="mt-1 text-xs text-gray-400">Experience</p>
              </div>
            </div>

            <div className="group relative rounded-[24px] border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
              <div className="relative">
                <AnimatedCounter value={5000} label="Systems" />
                <p className="mt-1 text-xs text-gray-400">Installed</p>
              </div>
            </div>

            <div className="group relative rounded-[24px] border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
              <div className="relative">
                <AnimatedCounter value={1000} label="Clients" />
                <p className="mt-1 text-xs text-gray-400">Worldwide</p>
              </div>
            </div>

            <div className="group relative rounded-[24px] border border-cyan-400/20 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
              <div className="relative">
                <p className="text-4xl font-bold text-cyan-400">99.8%</p>
                <p className="mt-1 text-xs text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <Image
              src="/companies/generator.png"
              alt="RCS Electricals generator and power infrastructure"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover sm:h-[380px] md:h-[460px]"
              priority
            />
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 bg-black/60 p-5 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                  Scope
                </p>
                <p className="mt-2 text-xs text-gray-200 sm:text-sm">Industrial</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                  Delivery
                </p>
                <p className="mt-2 text-xs text-gray-200 sm:text-sm">Turnkey</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                  Support
                </p>
                <p className="mt-2 text-xs text-gray-200 sm:text-sm">24x7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-cyan-400/60" />
      </div>
    </section>
  );
}
