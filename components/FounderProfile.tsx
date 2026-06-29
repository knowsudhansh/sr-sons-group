import Image from "next/image";
import { ShieldCheck, Users, Handshake, Sparkles } from "lucide-react";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "100+", label: "Trusted Brands" },
  { value: "30+", label: "Years of Market Presence" },
];

export default function FounderProfile() {
  return (
    <section className="border-b border-white/10 bg-[#091420] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Founder Profile
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Leadership with local trust and long-term service values.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <Image
              src="/founder/kamal-narayan-srivastava.jpg"
              alt="Kamal Narayan Srivastava, Founder and Managing Director"
              width={1200}
              height={1200}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="space-y-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Kamal Narayan Srivastava
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Founder &amp; Managing Director
              </h3>
            </div>

            <p className="text-base leading-8 text-gray-300 md:text-lg">
              Kamal Narayan Srivastava brings around 30 years of experience
              across consumer electronics, electrical solutions, retail
              business, customer service, and business leadership. His approach
              has been shaped by practical market understanding, consistent
              customer interaction, and a steady focus on dependable service.
            </p>

            <p className="text-base leading-8 text-gray-300 md:text-lg">
              He has built the business on customer trust, quality products,
              long-term relationships, honest business practices, local market
              leadership, and a commitment to service that remains personal and
              grounded in the needs of the region.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-cyan-400/15 bg-black/25 p-5 transition hover:border-cyan-300/35 hover:bg-black/35"
                >
                  <p className="text-3xl font-black text-cyan-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gray-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Handshake, text: "Long-term relationships" },
                { icon: ShieldCheck, text: "Honest business practices" },
                { icon: Users, text: "Customer trust first" },
                { icon: Sparkles, text: "Quality products and service" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="inline-flex rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                      <Icon size={16} />
                    </span>
                    <span className="text-sm font-medium text-gray-200">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
