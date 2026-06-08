"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const companies = [
  {
    slug: "rc-electricals",
    name: "RC Electricals",
    title: "Engineering Intelligent Infrastructure",
    description:
      "Industrial electrical contracting and infrastructure solutions across commercial and industrial projects.",

    stats: [
      "500+ Projects",
      "25 Years",
      "100+ Clients",
    ],
    image: "/companies/electrical.png",
    accent: "cyan",
  },

  {
    slug: "rcs-electricals",
    name: "RCS Electricals",
    title: "Powering Industrial Growth",
    description:
      "Generator and power backup solutions for industries and enterprises.",

    stats: [
      "300+ Installations",
      "20 Years",
      "50+ Industries",
    ],
    image: "/companies/generator.png",
    accent: "violet",
  },

  { 
    slug: "sr-sons-electronics",
    name: "SR Electronics",
    title: "Modern Electronics Experience",
    description:
      "Consumer electronics and appliance solutions for homes and businesses.",

    stats: [
      "1000+ Products",
      "50+ Brands",
      "10k+ Customers",
    ],
    image: "/companies/electronics.png",
    accent: "blue",
  },

  {
    name: "Avanti System",
    title: "Future Energy Solutions",
    description:
      "UPS, battery and power backup systems for enterprises and industries.",

    stats: [
      "500+ Installations",
      "20+ Years",
      "24x7 Support",
    ],
    image: "/companies/avanti.png",
    accent: "teal",
  },

  {
        slug: "shreya-bnr",
    name: "Shreya BNR",
    title: "Luxury Dining Experience",
    description:
      "Premium restaurant and hospitality services delivering memorable experiences.",

    stats: [
      "50k+ Guests",
      "5 Star Service",
      "Premium Dining",
    ],
    image: "/companies/restaurant.jpg",
    accent: "gold",
  },
];

export default function CompanyShowcase() {
  const [active, setActive] = useState(0);

  return (
   <section id="companies" className="bg-[#070B14] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

  <p className="uppercase tracking-[5px] text-cyan-400">
    Business Ecosystem
  </p>

  <h2 className="text-6xl font-bold mt-4">
    One Group.
    <br />
    Multiple Industries.
  </h2>

</div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {companies.map((company, index) => (
            <button
              key={company.name}
              onClick={() => setActive(index)}
              className={`
                px-6 py-3 rounded-full
                transition-all
                ${
                  active === index
  ? `
      bg-white/10
      border
      border-cyan-400/30
      shadow-[0_0_25px_rgba(34,211,238,0.15)]
      text-white
    `
  : `
      bg-white/[0.03]
      border
      border-white/10
      text-gray-400
      hover:text-white
    `
                }
              `}
            >
              {company.name}
            </button>
          ))}

        </div>

       <div
  className="
  bg-white/[0.03]
  border
  border-white/10
  rounded-3xl
  backdrop-blur-xl
  p-12
  shadow-[0_0_40px_rgba(255,255,255,0.05)]
  "
>

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    <div>

      <h3 className="text-5xl font-bold">
        {companies[active].title}
      </h3>

      <p className="mt-6 text-gray-400 text-lg leading-8">
        {companies[active].description}
      </p>

      <div className="flex flex-wrap gap-4 mt-8">

        {companies[active].stats.map((item) => (
          <div
            key={item}
            className="
            px-4
            py-2
            rounded-full
            bg-white/5
            border
            border-white/10
            "
          >
            {item}
          </div>
        ))}

      </div>

     <Link
  href={`/companies/${companies[active].slug}`}
  className="
  inline-block
  mt-10
  px-8
  py-4
  rounded-2xl
  bg-cyan-500/10
  border
  border-cyan-400/20
  hover:bg-cyan-500/20
  transition-all
"
>
  Explore Company →
</Link>

    </div>

    <div
  className="
  relative
  h-[350px]
  rounded-3xl
  overflow-hidden
  border
  border-white/10
  "
>
  <Image
    src={companies[active].image}
    alt={companies[active].name}
    fill
    className="
      object-cover
      transition-all
      duration-700
      hover:scale-105
    "
  />

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-t
    from-black/60
    to-transparent
    "
  />

  <div className="absolute bottom-6 left-6">
    <h4 className="text-2xl font-bold">
      {companies[active].name}
    </h4>
  </div>
</div>

  </div>

</div>

      </div>
    </section>
  );
}
