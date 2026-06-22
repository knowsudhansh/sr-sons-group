import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const previewProducts = [
  {
    name: "Butterfly 3-Burner Cooktop",
    category: "Kitchen Appliances",
    price: "Rs. 9,990",
    mrp: "Rs. 11,990",
    image: "/uploads/product-01.jpg",
    points: ["Glass top", "Auto ignition", "Retail ready"],
  },
  {
    name: "Air Cooler Showcase Unit",
    category: "Cooling Solutions",
    price: "Rs. 13,490",
    mrp: "Rs. 15,990",
    image: "/uploads/product-02.jpg",
    points: ["High airflow", "Portable", "Low noise"],
  },
  {
    name: "Premium Refrigerator Line",
    category: "Large Appliances",
    price: "Rs. 29,490",
    mrp: "Rs. 32,990",
    image: "/uploads/product-03.jpg",
    points: ["Large storage", "Energy efficient", "Warranty backed"],
  },
];

export default function FeaturedProductsPreview() {
  return (
    <section
      id="featured-products"
      className="border-y border-white/10 bg-[#091420] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Featured Products
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight leading-[0.95] text-white md:text-6xl">
              A preview of what is waiting inside the showroom.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              This preview leads into the full products page, where customers
              can explore images, pricing, specifications, and enquiry actions
              in more detail.
            </p>
          </div>

          <Link
            href="/products#products"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 md:w-auto"
          >
            Explore Full Products Page
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 md:gap-6">
          {previewProducts.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_20px_70px_rgba(0,0,0,0.32)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute left-0 right-0 top-0 p-5">
                  <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <p className="text-lg font-bold text-white">
                      {product.name}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gray-400">
                      MRP {product.mrp}
                    </p>
                  </div>
                  <p className="text-lg font-black text-cyan-300">
                    {product.price}
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  {product.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 size={15} className="shrink-0 text-cyan-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/products#products"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:gap-3 group-hover:text-cyan-200"
                >
                  View Product Range
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
