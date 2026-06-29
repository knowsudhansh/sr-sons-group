import Link from "next/link";
import {
  BellRing,
  Boxes,
  PackageCheck,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Boxes,
    title: "Product Guidance",
    description:
      "Helpful in-store guidance for appliances, electrical products, and category comparisons.",
    href:
      "https://wa.me/919554678888?text=" +
      encodeURIComponent(
        "Hello,\nI would like to know more about Product Guidance and available products at RCS Electricals Pvt. Ltd.",
      ),
  },
  {
    icon: Truck,
    title: "Delivery & Setup",
    description:
      "Smooth local delivery and showroom handoff for customers buying large products or bundles.",
    href:
      "https://wa.me/919554678888?text=" +
      encodeURIComponent(
        "Hello,\nI would like information regarding Delivery & Setup services.",
      ),
  },
  {
    icon: Wrench,
    title: "Installation Support",
    description:
      "Practical installation help and setup assistance for product categories that need it.",
    href:
      "https://wa.me/919554678888?text=" +
      encodeURIComponent(
        "Hello,\nI would like to know about Installation Support for your products.",
      ),
  },
  {
    icon: ShieldCheck,
    title: "Customer-first Service",
    description:
      "Reliable support after purchase so the relationship continues beyond the showroom visit.",
    href:
      "mailto:rcselectricalspvtltd@gmail.com?subject=Customer%20Service%20Enquiry&body=" +
      encodeURIComponent(
        "Hello,\n\nI would like to know more about your customer support and after-sales services.\n\nThank you.",
      ),
  },
];

export default function RCSServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-24 text-white md:py-36">
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-cyan-600/10 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-600/10 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center md:mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Our Services
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight leading-[0.95] text-white md:text-7xl">
            Support that makes the showroom easier to shop.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            From product guidance to delivery and after-sales support, the
            service experience is designed to feel practical, quick, and
            professional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-6 mb-16 md:mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                target={service.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={service.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)] md:p-9"
              >
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mb-6 inline-block rounded-2xl bg-cyan-500/15 p-3 text-cyan-300 transition-colors group-hover:bg-cyan-500/25 group-hover:text-cyan-200">
                  <Icon size={32} />
                </div>

                <div className="relative">
                  <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-200">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-transparent opacity-50" />

          <div className="relative grid gap-8 text-center md:grid-cols-3 md:gap-10">
            <div>
              <p className="mb-3 text-5xl font-black text-cyan-300 md:text-6xl">
                50+
              </p>
              <p className="text-lg font-medium text-gray-200">
                Product lines on display
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Appliances, electronics, and seasonal categories.
              </p>
            </div>
            <div>
              <p className="mb-3 text-5xl font-black text-cyan-300 md:text-6xl">
                1
              </p>
              <p className="text-lg font-medium text-gray-200">
                Local showroom destination
              </p>
              <p className="mt-2 text-sm text-gray-400">
                A physical store built for browsing and comparison.
              </p>
            </div>
            <div>
              <p className="mb-3 text-5xl font-black text-cyan-300 md:text-6xl">
                24x7
              </p>
              <p className="text-lg font-medium text-gray-200">
                Inquiry readiness
              </p>
              <p className="mt-2 text-sm text-gray-400">
                A team available to answer questions and guide visits.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-gray-400">
          <BellRing size={14} className="text-cyan-300" />
          Showroom support, product guidance, and clear follow-up
          <PackageCheck size={14} className="text-cyan-300" />
        </div>
      </div>
    </section>
  );
}
