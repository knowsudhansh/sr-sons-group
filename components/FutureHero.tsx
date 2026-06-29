import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const inquiryUrl =
  "https://wa.me/919554678888?text=" +
  encodeURIComponent(
    "Hello,\n\nI would like to enquire about your products and services.\n\nPlease share the details.\n\nThank you.",
  );

const heroStats = [
  { value: "4+", label: "Product categories" },
  { value: "1", label: "Physical showroom" },
  { value: "7", label: "Days support" },
  { value: "24×7", label: "Inquiry window", href: inquiryUrl },
];

export default function FutureHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black px-0 pt-36 pb-24 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-slate-950 opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="text-center lg:text-left">
          <div className="inline-block">
            <p className="text-2xl font-black uppercase tracking-[0.12em] text-cyan-200 md:text-4xl lg:text-5xl">
              RCS Electricals Pvt. Ltd.
            </p>
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-black tracking-tight leading-[0.95] text-white md:text-7xl lg:mx-0 lg:text-8xl">
            Electricals, Products,
            <br />
            and Showroom support.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:mx-0">
            From our Gorakhpur showroom, we help customers discover trusted
            appliances, compare product ranges, and connect with electrical
            support under one business.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.24em] text-gray-400 lg:mx-0">
            Company, store, products, services, and showroom guidance in one
            place.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto md:px-10"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products#products"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto md:px-10"
            >
              View Products
            </Link>
            <Link
              href="#showroom"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 sm:w-auto md:px-10"
            >
              Visit Showroom
            </Link>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 lg:mx-0">
            {heroStats.map((stat) => {
              const card = (
                <>
                  <p className="text-3xl font-black text-cyan-300 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-300">
                    {stat.label}
                  </p>
                </>
              );

                return stat.href ? (
                  <Link
                    key={stat.label}
                    href={stat.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open WhatsApp inquiry window"
                    className="group block h-full rounded-[24px] border border-cyan-400/20 bg-white/[0.08] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.16)]"
                  >
                    {card}
                  </Link>
              ) : (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-cyan-400/20 bg-white/[0.08] p-5 backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  {card}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:row-span-2">
              <Image
                src="/uploads/store-03.jpg"
                alt="RCS Electricals showroom view"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover sm:h-[520px]"
                priority
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.25)]">
              <Image
                src="/uploads/product-03.jpg"
                alt="Featured product display"
                width={900}
                height={700}
                className="h-44 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_90px_rgba(0,0,0,0.25)]">
              <Image
                src="/uploads/store-05.jpg"
                alt="Premium showroom aisle"
                width={900}
                height={700}
                className="h-44 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-black/55 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Showroom first
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Browse the store, compare products, and get support from the same
              team that manages the company.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-cyan-400/60" />
      </div>
    </section>
  );
}
