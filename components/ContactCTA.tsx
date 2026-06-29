import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const officeAddress = `91-A/C 710,
Kamal Niwas,
Opp. Radisson Blu,
Mohaddipur,
Gorakhpur - 273008,
Uttar Pradesh,
India`;

const phoneNumber = "+91 95546 78888";
const emailAddress = "rcselectricalspvtltd@gmail.com";

const mapSrc = "https://www.google.com/maps?q=26.7287778,83.4316111&z=18&output=embed";

const directionsUrl =
  "https://www.google.com/maps/place/26%C2%B043'43.6%22N+83%C2%B025'53.8%22E/@26.729638,83.431353,389m/data=!3m1!1e3!4m4!3m3!8m2!3d26.7287778!4d83.4316111?entry=tts&g_ep=EgoyMDI2MDYyNC4wIPu8ASoASAFQAw%3D%3D&skid=c606192e-d679-472d-bbae-641524fdab5f";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#070B14] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Premium corporate contact access for visits, support, and enquiries.
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
              Company details, business hours, and directions are organized in
              one premium layout so customers can get in touch quickly and
              comfortably.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Image
                  src="/brand/rcs-logo.png"
                  alt="RCS Electricals logo"
                  width={52}
                  height={52}
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    Company
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                    RCS Electricals Pvt. Ltd.
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                      <MapPin size={16} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      Office Address
                    </p>
                  </div>
                  <p className="mt-4 whitespace-pre-line text-base leading-8 text-gray-200">
                    {officeAddress}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                        <Phone size={16} />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                        Phone Number
                      </p>
                    </div>
                    <p className="mt-4 text-base font-semibold text-white">
                      {phoneNumber}
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                        <Mail size={16} />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                        Email
                      </p>
                    </div>
                    <p className="mt-4 break-all text-base font-semibold text-white">
                      {emailAddress}
                    </p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                      <Clock3 size={16} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      Business Hours
                    </p>
                  </div>
                  <div className="mt-4 space-y-1 text-base leading-7 text-gray-200">
                    <p>Monday - Saturday</p>
                    <p>10:00 AM - 7:00 PM</p>
                    <p>Sunday by Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link
                  href="tel:+919554678888"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Call Now
                  <Phone size={16} />
                </Link>
                <Link
                  href={`mailto:${emailAddress}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Email Us
                  <Mail size={16} />
                </Link>
                <Link
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-4 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                >
                  Get Directions
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="#contact-map"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Visit Showroom
                  <Navigation size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <div
                id="contact-map"
                className="scroll-mt-28 overflow-hidden rounded-[28px] border border-white/10 bg-black/40"
              >
                <div className="border-b border-white/10 px-5 py-4 md:px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    Google Map
                  </p>
                </div>
                <iframe
                  title="Google Map - RCS Electricals Pvt. Ltd."
                  src={mapSrc}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-[380px] w-full md:h-[500px] lg:h-[620px]"
                />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                      Quick Contact Information
                    </p>
                    <p className="mt-3 text-base leading-7 text-gray-300">
                      Office visits, showroom enquiries, and product questions
                      all route through the same corporate contact point.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                      Corporate Office
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                      Showroom Visits
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">
                      Business Enquiries
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
