import Image from "next/image";
import Link from "next/link";
import CompanyNavbar from "@/components/company/CompanyNavbar";
import {
  BadgeCheck,
  Laptop,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Snowflake,
  Tv,
  Truck,
  Headphones,
  Store,
} from "lucide-react";

const categories = [
  {
    icon: Tv,
    title: "Entertainment",
    description: "Smart TVs, soundbars, streaming devices, and home cinema setups.",
  },
  {
    icon: Snowflake,
    title: "Cooling",
    description: "Inverter ACs, air coolers, and climate control for every room size.",
  },
  {
    icon: Laptop,
    title: "Computing",
    description: "Laptops, monitors, printers, and work-from-home essentials.",
  },
  {
    icon: Smartphone,
    title: "Mobiles & Accessories",
    description: "Phones, wearables, chargers, and everyday smart accessories.",
  },
];

const brands = ["Samsung", "Sony", "LG", "Whirlpool", "Haier", "Bosch"];

const products = [
  {
    name: '55" 4K QLED Smart TV',
    price: "From Rs. 58,990",
    points: ["Google TV", "Dolby Audio", "HDR10+"],
  },
  {
    name: "1.5 Ton Inverter Split AC",
    price: "From Rs. 42,500",
    points: ["5-Star", "Copper Condenser", "Low Noise"],
  },
  {
    name: "265L Frost Free Refrigerator",
    price: "From Rs. 29,990",
    points: ["Convertible", "Inverter Compressor", "Large Veg Box"],
  },
  {
    name: "6kg Front Load Washer",
    price: "From Rs. 24,990",
    points: ["Steam Wash", "Quick Dry", "Child Lock"],
  },
];

const reasons = [
  {
    icon: Store,
    title: "Multi-brand selection",
    description: "Compare trusted brands in one premium showroom experience.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    description: "Same-day dispatch for in-stock items and scheduled home installation.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty support",
    description: "Assisted registration, service coordination, and after-sales care.",
  },
  {
    icon: Headphones,
    title: "Expert guidance",
    description: "Product recommendations based on room size, budget, and usage.",
  },
];

export default function ElectronicsLayout() {
  return (
    <>
      <CompanyNavbar />
      <main className="min-h-screen bg-[#f6f8fc] text-slate-900">
      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 pt-28"
      >
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles size={14} />
              Modern electronics retail
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Smart electronics for every modern home.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SR & Sons Electronics brings premium consumer technology, home appliances, and expert support together in a bright retail experience built for daily life.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Browse Categories
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-200 bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
              >
                Visit Showroom
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Sony</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Samsung</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">LG</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">Whirlpool</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-blue-100/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/companies/electronics.png"
                alt="SR & Sons Electronics showroom"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover md:h-[520px]"
                priority
              />
              <div className="border-t border-slate-200 bg-white p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Brands</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">50+</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Categories</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">4</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Support</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">24x7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Company Overview</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Premium electronics retail with service you can trust.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SR & Sons Electronics focuses on the products people actually use every day, from living room displays and cooling systems to dependable home appliances and smart accessories.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              The experience is designed to feel clean and easy to scan, with clear guidance, curated options, and practical recommendations instead of clutter.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "25+", label: "Years in trade" },
              { value: "10k+", label: "Families served" },
              { value: "50+", label: "Brand partners" },
              { value: "24x7", label: "Support access" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-blue-700">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Product Categories</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A curated retail floor built around the way people shop.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Featured Brands</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Trusted names on every shelf.</h3>
              </div>
              <Image
                src="/logos/sr-electronics.png"
                alt="SR & Sons Electronics logo"
                width={120}
                height={120}
                className="hidden h-16 w-16 rounded-2xl border border-slate-200 bg-white object-contain p-2 sm:block"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-700"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Featured Products</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Best-seller products with clear specs and premium presentation.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Top pick</p>
                    <h3 className="mt-3 text-xl font-bold text-slate-950">{product.name}</h3>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    New
                  </span>
                </div>

                <p className="mt-5 text-lg font-semibold text-slate-950">{product.price}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {product.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <BadgeCheck size={16} className="text-blue-700" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
                >
                  Ask about this product
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: "50+", label: "Brand partners" },
              { value: "10k+", label: "Delivered units" },
              { value: "4.9/5", label: "Customer rating" },
              { value: "24x7", label: "Support guidance" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Why Choose Us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Retail support that feels as premium as the products.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">Reservation CTA</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Need help choosing the right electronics?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100/80">
                Visit the showroom, request a callback, or send us your requirement list and we&apos;ll help narrow the best options for home or office use.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="mailto:electronics@srsonsgroup.com?subject=SR%20%26%20Sons%20Electronics%20Inquiry"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Request callback
              </Link>
              <Link
                href="#home"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Back to top
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
