import FloatingOrb from "./FloatingOrb";
import AnimatedCounter from "./ui/AnimatedCounter";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FutureHero() {
  return (
    <section id="home"
      className="
      min-h-screen pt-36 pb-24
      flex
      items-center
      justify-center
      bg-black
      text-white
      relative
      overflow-hidden
    "
    >
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl opacity-30 -z-10" />

      <FloatingOrb />

      <div className="relative z-10 text-center max-w-6xl px-6">

        {/* Tagline */}
        <div className="inline-block mb-8">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">
            RCS Electricals Pvt. Ltd.
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mt-6 leading-[0.95] bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
          Power Generation &
          <br />
          Industrial Solutions
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Delivering mission-critical power systems and infrastructure solutions for industries worldwide.
        </p>
        <p className="mt-4 text-sm md:text-base text-gray-400 uppercase tracking-[0.25em]">
          Built for factories, campuses, and critical facilities that need dependable power every day.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <Link href="#services" className="group px-8 md:px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
            Explore Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link href="#contact" className="px-8 md:px-10 py-4 rounded-2xl border border-cyan-400/40 bg-white/5 text-white font-bold hover:bg-white/10 hover:border-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)] transition-all duration-300 backdrop-blur-sm">
            Contact Sales
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-5xl mx-auto">

          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-[24px] p-7 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <AnimatedCounter value={25} label="Years" />
              <p className="text-xs text-gray-400 mt-1">Experience</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-[24px] p-7 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <AnimatedCounter value={5000} label="Systems" />
              <p className="text-xs text-gray-400 mt-1">Installed</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-[24px] p-7 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <AnimatedCounter value={1000} label="Clients" />
              <p className="text-xs text-gray-400 mt-1">Worldwide</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-cyan-400/20 rounded-[24px] p-7 backdrop-blur-xl hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-4xl font-bold text-cyan-400">99.8%</p>
              <p className="text-xs text-gray-400 mt-1">Uptime</p>
            </div>
          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-cyan-400/60" />
      </div>
    </section>
  );
}
