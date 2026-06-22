import Image from "next/image";

export default function RCSAbout() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-gradient-to-b from-[#070B14] to-black py-24 text-white md:py-36"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center md:mb-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            About Us
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight leading-[0.95] text-white md:text-7xl">
            A showroom-led business built for products and service.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
            RCS Electricals Pvt. Ltd. brings together a physical showroom,
            trusted product categories, and responsive electrical support from
            one local team in Gorakhpur.
          </p>
        </div>

        <div className="mb-16 grid items-start gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 md:mb-20">
          <div>
            <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Helping customers compare, choose, and visit with confidence.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              The business is organised around clear retail guidance, neat
              product displays, and practical service support. Visitors can
              explore appliances in the showroom, understand the options, and
              move from browsing to enquiry without friction.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              That same approach carries across the website: company identity,
              showroom imagery, featured products, services, and contact
              details all point to one real business.
            </p>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_rgba(0,0,0,0.22)]">
              <Image
                src="/uploads/store-04.jpg"
                alt="RCS Electricals showroom interior"
                width={1200}
                height={800}
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="border-t border-white/10 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                  Showroom experience
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Bright aisles, product walls, and in-store guidance for
                  everyday buying decisions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="group relative rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-4xl font-black text-cyan-300">1</h4>
                  <p className="font-medium text-gray-300">Physical showroom</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-4xl font-black text-cyan-300">4+</h4>
                  <p className="font-medium text-gray-300">Product categories</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-4xl font-black text-cyan-300">Trusted</h4>
                  <p className="font-medium text-gray-300">Local brand support</p>
                </div>
              </div>

              <div className="group relative rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <h4 className="mb-3 text-4xl font-black text-cyan-300">Fast</h4>
                  <p className="font-medium text-gray-300">Inquiry response</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] md:p-10">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <h4 className="mb-4 text-2xl font-bold text-cyan-300">
                Our Vision
              </h4>
              <p className="leading-relaxed text-gray-300">
                To be the most dependable local destination for electrical
                products, showroom shopping, and practical support that helps
                families and businesses choose with confidence.
              </p>
            </div>
          </div>

          <div className="group relative rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-8 transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] md:p-10">
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <h4 className="mb-4 text-2xl font-bold text-cyan-300">
                Our Mission
              </h4>
              <p className="leading-relaxed text-gray-300">
                Deliver honest guidance, premium product presentation, and
                consistent after-sales support so the showroom experience feels
                trustworthy from the first visit to the final purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
