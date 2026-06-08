import GradientButton from "./ui/GradientButton";
import FloatingOrb from "./FloatingOrb";
import AnimatedCounter from "./ui/AnimatedCounter";
export default function FutureHero() {
  return (
    <section id="home"
      className="
      min-h-[90vh] pt-32
      flex
      items-center
      justify-center
      bg-black
      text-white
      relative
      overflow-hidden
    "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-cyan-900 opacity-80" />

      <FloatingOrb />

      <div className="relative z-10 text-center max-w-6xl px-6">

        <p className="uppercase tracking-[6px] text-cyan-400">
          S R & Sons Industry Group
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-tight">
          Building
          <br />
          Tomorrow's Industries
        </h1>

        <p className="mt-8 text-xl text-gray-300">
          Electrical • Power • Electronics • Energy • Hospitality
        </p>

        <div className="mt-10 flex justify-center">
          <GradientButton text="Explore Group" />
        </div>

        {/* Floating Metrics */}

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-5xl mx-auto">

  <div className="
bg-white/[0.04]
border border-white/10
rounded-3xl
p-6
backdrop-blur-xl
hover:scale-105
transition-all
duration-300
shadow-[0_0_30px_rgba(34,211,238,0.08)]
">
    <AnimatedCounter
      value={25}
      label="Years Experience"
    />
  </div>

  <div className="
bg-white/[0.04]
border border-white/10
rounded-3xl
p-6
backdrop-blur-xl
hover:scale-105
transition-all
duration-300
shadow-[0_0_30px_rgba(34,211,238,0.08)]
">
    <AnimatedCounter
      value={500}
      label="Projects"
    />
  </div>

  <div className="
bg-white/[0.04]
border border-white/10
rounded-3xl
p-6
backdrop-blur-xl
hover:scale-105
transition-all
duration-300
shadow-[0_0_30px_rgba(34,211,238,0.08)]
">
    <AnimatedCounter
      value={1000}
      label="Clients"
    />
  </div>

  <div className="
bg-white/[0.04]
border border-white/10
rounded-3xl
p-6
backdrop-blur-xl
hover:scale-105
transition-all
duration-300
shadow-[0_0_30px_rgba(34,211,238,0.08)]
">
    <AnimatedCounter
      value={5}
      label="Business Units"
    />
  </div>

</div>

      </div>
    </section>
  );
}