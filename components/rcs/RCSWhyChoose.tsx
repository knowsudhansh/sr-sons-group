import { ShieldCheck, Award, Store, Users } from "lucide-react";

export default function RCSWhyChoose() {
  const reasons = [
    {
      icon: Award,
      title: "Trusted local presence",
      description:
        "A real showroom, a real office, and a business identity customers can visit in person.",
    },
    {
      icon: Store,
      title: "Showroom-led experience",
      description:
        "Products are presented in a clean retail environment that makes choosing easier.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable support",
      description:
        "Purchase guidance, delivery follow-up, and after-sales care stay connected to the same team.",
    },
    {
      icon: Users,
      title: "Customer-first service",
      description:
        "We keep the process simple, practical, and responsive from first enquiry to final visit.",
    },
  ];

  return (
    <section className="bg-[#070B14] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Why customers trust RCS Electricals Pvt. Ltd.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition-all hover:border-cyan-300/30 hover:bg-cyan-500/5"
              >
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 md:p-12">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Our Commitment
            </p>
            <h3 className="text-3xl font-bold text-white md:text-4xl">
              One business, one showroom, one standard of care.
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
              The website, the store, and the service experience are now
              presented as one connected story so visitors understand the
              company before they click deeper.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
