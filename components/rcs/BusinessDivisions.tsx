"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const divisions = [
  {
    slug: "rc-electricals",
    name: "RC Electricals",
    title: "Electrical Infrastructure",
    description: "Industrial electrical contracting, power distribution systems, and infrastructure solutions for commercial and industrial projects.",
    accent: "cyan",
    stats: ["500+ Projects", "25 Years", "100+ Clients"],
    capabilities: ["Electrical Contracting", "Power Distribution", "Infrastructure Development"]
  },
  {
    slug: "sr-sons-electronics",
    name: "SR & Sons Electronics",
    title: "Consumer Electronics",
    description: "Premium consumer electronics and home appliances including air conditioners, refrigerators, coolers, and more.",
    accent: "blue",
    stats: ["1000+ Products", "10k+ Customers", "50+ Brands"],
    capabilities: ["AC Units", "Refrigeration", "Consumer Appliances"]
  },
  {
    slug: "avanti-system",
    name: "Avanti System",
    title: "Energy Solutions",
    description: "Advanced UPS systems, battery solutions, and power backup technology for enterprises and critical infrastructure.",
    accent: "teal",
    stats: ["500+ Installations", "20+ Years", "24x7 Support"],
    capabilities: ["UPS Systems", "Battery Solutions", "Power Backup"]
  },
  {
    slug: "shreya-bnr",
    name: "Shreya BNR",
    title: "Luxury Hospitality",
    description: "Premium restaurant and hospitality services delivering exceptional dining experiences and corporate event solutions.",
    accent: "gold",
    stats: ["50k+ Guests", "5 Star Service", "Premium Venue"],
    capabilities: ["Fine Dining", "Catering", "Event Management"]
  }
];

export default function BusinessDivisions() {
  const [active, setActive] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const transitionTimer = useRef<number | null>(null);
  const activeDiv = divisions[active];

  const handleSelect = (idx: number) => {
    setActive(idx);
    setIsContentVisible(false);

    if (transitionTimer.current !== null) {
      window.clearTimeout(transitionTimer.current);
    }

    transitionTimer.current = window.setTimeout(() => {
      setIsContentVisible(true);
      transitionTimer.current = null;
    }, 40);
  };

  const accentColors = {
    cyan: "border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5",
    blue: "border-blue-400/40 bg-gradient-to-br from-blue-500/10 to-blue-500/5",
    teal: "border-teal-400/40 bg-gradient-to-br from-teal-500/10 to-teal-500/5",
    gold: "border-yellow-400/40 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5"
  };

  const textColors = {
    cyan: "text-cyan-400",
    blue: "text-blue-400",
    teal: "text-teal-400",
    gold: "text-yellow-400"
  };

  const buttonColors = {
    cyan: "bg-cyan-500 hover:bg-cyan-600 text-black",
    blue: "bg-blue-500 hover:bg-blue-600 text-white",
    teal: "bg-teal-500 hover:bg-teal-600 text-black",
    gold: "bg-yellow-500 hover:bg-yellow-600 text-black"
  };

  return (
    <section id="divisions" className="bg-gradient-to-b from-black to-[#070B14] text-white py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">Our Ecosystem</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mt-6 leading-[0.95] max-w-4xl mx-auto">
            Business Divisions
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            RCS Electricals Pvt. Ltd. operates through specialized divisions, each serving unique market segments
            with industry-leading expertise and customer commitment.
          </p>
        </div>

        {/* Division Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
          {divisions.map((div, idx) => (
            <button
              key={div.name}
              aria-pressed={active === idx}
              onClick={() => handleSelect(idx)}
              className={`group min-w-[11rem] whitespace-nowrap px-5 md:px-6 py-3 rounded-full font-semibold transition-[transform,box-shadow,border-color,background-color,color,opacity] duration-300 ease-out will-change-transform ${
                active === idx
                  ? `${accentColors[div.accent as keyof typeof accentColors]} border bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_0_34px_rgba(34,211,238,0.24)] scale-[1.04] -translate-y-0.5 ring-1 ring-white/25`
                  : "bg-white/5 border border-white/15 text-white/65 opacity-75 hover:opacity-100 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.06)] hover:scale-[1.02] hover:-translate-y-0.5"
              }`}
            >
              <span className={active === idx ? textColors[div.accent as keyof typeof textColors] : "text-white/80"}>
                {div.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Division Card */}
        <div className={`border-2 rounded-[32px] backdrop-blur-xl p-10 md:p-14 transition-all duration-500 ease-out overflow-hidden relative shadow-[0_20px_70px_rgba(0,0,0,0.24)] ${accentColors[activeDiv.accent as keyof typeof accentColors]}`}>
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 hover:opacity-50 transition-opacity duration-500" />
          
          <div className={`relative transition-all duration-500 ease-out ${isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* Content Side */}
              <div>
                <div className="mb-8">
                  <p className={`uppercase tracking-[6px] font-bold text-xs mb-3 ${textColors[activeDiv.accent as keyof typeof textColors]}`}>
                    {activeDiv.name}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-black leading-[0.95] mb-6">
                    {activeDiv.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {activeDiv.description}
                </p>

                {/* Capabilities */}
                <div className="mb-10">
                  <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">Key Capabilities</p>
                  <div className="flex flex-wrap gap-3">
                    {activeDiv.capabilities.map((cap, idx) => (
                      <span key={idx} className={`px-4 py-2 rounded-full text-sm font-medium border ${textColors[activeDiv.accent as keyof typeof textColors]} bg-white/5 border-current/30`}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/companies/${activeDiv.slug}`}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 ${buttonColors[activeDiv.accent as keyof typeof buttonColors]}`}
                >
                  Explore Division
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* Stats Side */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(10.5rem,1fr))] gap-4">
                {activeDiv.stats.map((stat, idx) => {
                  return (
                    <div
                      key={idx}
                      className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-current/40 rounded-[24px] p-5 md:p-6 transition-all duration-300 ease-out text-center min-h-[112px] flex items-center justify-center min-w-0"
                    >
                      <p
                        className={`max-w-full break-words text-balance text-base md:text-lg font-black leading-tight tracking-tight ${textColors[activeDiv.accent as keyof typeof textColors]}`}
                      >
                        {stat}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
