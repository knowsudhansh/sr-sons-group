import {
  Zap,
  Factory,
  Tv,
  BatteryCharging,
  UtensilsCrossed,
} from "lucide-react";

const industries = [
  {
    icon: Zap,
    title: "Electrical Contracting",
    company: "RC Electricals",
  },
  {
    icon: Factory,
    title: "Generator Solutions",
    company: "RCS Electricals Pvt. Ltd.",
  },
  {
    icon: Tv,
    title: "Consumer Electronics",
    company: "SR & Sons Electronics",
  },
  {
    icon: BatteryCharging,
    title: "Power Backup Systems",
    company: "Avanti System",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Hospitality",
    company: "Shreya BNR",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px]">
            Industries
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Diverse Businesses.
            <br />
            One Vision.
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:bg-cyan-500/10
                transition-all
                "
              >
                <Icon
                  size={48}
                  className="text-cyan-400"
                />

                <h3 className="mt-6 font-semibold">
                  {industry.title}
                </h3>

                <p className="mt-2 text-gray-400 text-sm">
                  {industry.company}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
