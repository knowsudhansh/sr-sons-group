import {
  ShieldCheck,
  Award,
  Building2,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Trusted Brand",
      icon: ShieldCheck,
    },
    {
      title: "25+ Years Experience",
      icon: Award,
    },
    {
      title: "Multiple Industries",
      icon: Building2,
    },
    {
      title: "Customer First",
      icon: Users,
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-900 p-8 rounded-2xl"
              >
                <Icon size={50} />

                <h3 className="text-xl font-bold mt-5">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}