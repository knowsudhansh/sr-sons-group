import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const officeAddress =
  "91-A/C 710, Kamal Niwas, Opp. Radisson Blu, Mohaddipur, Gorakhpur - 273008, Uttar Pradesh, India";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`;

const contactCards = [
  {
    icon: Building2,
    label: "Corporate Office",
    value: "RCS Electricals Pvt. Ltd.",
    detail: "Main office for projects, products, and company coordination.",
    wide: true,
  },
  {
    icon: MapPin,
    label: "Address",
    value: "91-A/C 710, Kamal Niwas",
    detail: "Opp. Radisson Blu, Mohaddipur, Gorakhpur - 273008",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 XXXX-XXXXXX",
    detail: "Speak with the sales and service team.",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rcselectricals.com",
    detail: "Send product, project, or service enquiries.",
  },
  {
    icon: Clock3,
    label: "Opening Hours",
    value: "Mon-Sat",
    detail: "10:00 AM to 7:00 PM",
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#070B14] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Visit the RCS Electricals team in Gorakhpur.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              Corporate office access, project consultations, product enquiries,
              and service support are all handled from one place.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className={`rounded-[1.5rem] border border-white/10 bg-black/30 p-5 ${
                      card.wide ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      {card.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">{card.value}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{card.detail}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="tel:+91XXXXXXXXXX"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-8 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-400 sm:w-auto"
              >
                Call Office
              </Link>
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Browse Products
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/uploads/store-04.jpg"
                  alt="Showroom interior with appliance displays"
                  width={900}
                  height={700}
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/uploads/store-05.jpg"
                  alt="Premium showroom aisle with product rows"
                  width={900}
                  height={700}
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
              <iframe
                title="Google Map - RCS Electricals Pvt. Ltd."
                src={mapSrc}
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">
                  Google Map Section
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {officeAddress}
                </p>
              </div>
              <Link
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Open in Maps
                <Navigation size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
