import Image from "next/image";
import Link from "next/link";
import CompanyNavbar from "@/components/company/CompanyNavbar";
import {
  ChefHat,
  GlassWater,
  PartyPopper,
  UtensilsCrossed,
} from "lucide-react";

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Main Dining",
    description: "Elegant table service with a calm, premium dining atmosphere.",
  },
  {
    icon: GlassWater,
    title: "Curated Pairings",
    description: "Seasonal beverages, mocktails, and dessert pairings selected by the team.",
  },
  {
    icon: PartyPopper,
    title: "Celebrations",
    description: "Birthday dinners, anniversary nights, and corporate gatherings made easy.",
  },
  {
    icon: ChefHat,
    title: "Chef-led service",
    description: "Thoughtful plating, kitchen consistency, and attention to special requests.",
  },
];

const signatureDishes = [
  {
    name: "Chef's Tasting Platter",
    note: "A refined starter board with seasonal specials and house sauces.",
  },
  {
    name: "Butter Chicken Royale",
    note: "A rich, balanced classic presented with a premium dining finish.",
  },
  {
    name: "Tandoori Grill Selection",
    note: "Smoked, flame-grilled favorites built for sharing and events.",
  },
  {
    name: "Rose Pistachio Kulfi",
    note: "A polished dessert course with a clean, memorable finish.",
  },
];

const galleryCards = [
  {
    title: "Private evening dining",
    image: "/companies/restaurant.jpg",
  },
  {
    title: "Banquet ready spaces",
    image: "/companies/restaurant.jpg",
  },
  {
    title: "Chef presentation",
    image: "/companies/restaurant.jpg",
  },
  {
    title: "Celebration setup",
    image: "/companies/restaurant.jpg",
  },
];

export default function RestaurantLayout() {
  return (
    <>
      <CompanyNavbar />
      <main className="min-h-screen overflow-x-hidden bg-[#14100d] text-white">
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(217,119,6,0.12),_transparent_28%),linear-gradient(180deg,_#1a1410_0%,_#14100d_100%)] pt-40 sm:pt-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
              Luxury hospitality
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Dining that feels quietly luxurious from the first glance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-50/80">
              Shreya BNR blends polished service, warm interiors, and memorable dishes into a premium restaurant experience for everyday dining and special occasions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200 sm:w-auto"
              >
                Explore Dining
              </Link>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Reservation CTA
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-amber-50/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Fine dining</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Private events</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Banquets</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Catering</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-amber-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <Image
                src="/companies/restaurant.jpg"
                alt="Shreya BNR restaurant dining room"
                width={1200}
                height={900}
                className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[520px]"
                priority
              />
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 bg-[#1a1410] p-5 text-center sm:gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/70 sm:text-xs">Rating</p>
                  <p className="mt-2 text-base font-semibold text-white sm:text-lg">4.8/5</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/70 sm:text-xs">Seats</p>
                  <p className="mt-2 text-base font-semibold text-white sm:text-lg">120+</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/70 sm:text-xs">Events</p>
                  <p className="mt-2 text-base font-semibold text-white sm:text-lg">Private</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#181310] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">About Restaurant</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              A restaurant built for polished service and warm hospitality.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-50/75">
              Shreya BNR is designed around the full experience: the greeting at the door, the pace of the table, the plating, and the final note after dessert. Every detail is set up to feel calm and well considered.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-amber-50/75">
              The menu and event service are built to handle everyday dinners, celebrations, and private functions without losing the premium feel.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "20+", label: "Years hospitality" },
              { value: "120+", label: "Dining seats" },
              { value: "4.8/5", label: "Guest rating" },
              { value: "24x7", label: "Reservation support" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-amber-100">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-amber-50/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-[#14100d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Dining Experience</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Every visit is paced to feel composed, not rushed.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <article
                  key={experience.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-200/35 hover:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
                >
                  <div className="inline-flex rounded-2xl bg-amber-200/10 p-3 text-amber-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{experience.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-amber-50/70">{experience.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#181310] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Signature Dishes</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Carefully plated dishes that suit the mood of a premium dinner.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {signatureDishes.map((dish) => (
              <article
                key={dish.name}
                className="rounded-[1.5rem] border border-white/10 bg-[#201915] p-6 shadow-sm"
              >
                <span className="inline-flex rounded-full bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
                  Signature
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{dish.name}</h3>
                <p className="mt-3 text-sm leading-7 text-amber-50/70">{dish.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-[#14100d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Gallery Showcase</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                The room, the table, and the presentation all carry the same standard.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-amber-50/70">
              A visual preview of the atmosphere, seating, and event-ready presentation that Shreya BNR brings to the dining floor.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {galleryCards.map((card, index) => (
              <article
                key={card.title}
                className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-sm ${
                  index === 0 ? "xl:col-span-2 xl:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-[520px]" : "h-[240px]"}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                      Scene {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">{card.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#181310] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { value: "120+", label: "Seats available" },
              { value: "4.8/5", label: "Guest rating" },
              { value: "20+", label: "Years hospitality" },
              { value: "7", label: "Days a week" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-sm"
              >
                <p className="text-4xl font-black tracking-tight text-amber-100">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-amber-50/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-[#2a1b12] via-[#b0894a] to-[#2a1b12] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] bg-black/35 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">Reservation CTA</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
                Reserve a table or plan a private event.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-amber-50/80">
                From intimate dinners to larger celebrations, the team can help you choose the right seating, menu style, and timing.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="mailto:reservations@shreyabnr.com?subject=Reservation%20Inquiry"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-50"
              >
                Reserve a table
              </Link>
              <Link
                href="mailto:events@shreyabnr.com?subject=Private%20Event%20Inquiry"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Plan a private event
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
