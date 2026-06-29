import Link from "next/link";
import StoreGallery, { type GalleryItem } from "@/components/StoreGallery";
import { ArrowRight, MapPin, Clock3 } from "lucide-react";

const showroomImages: GalleryItem[] = [
  {
    src: "/uploads/store-03.jpg",
    title: "Main showroom view",
    category: "Gallery Photos",
    detail:
      "A wide view of the store floor that shows how products are grouped for comparison and easy browsing.",
  },
  {
    src: "/uploads/store-04.jpg",
    title: "Display wall and entry view",
    category: "Store Photos",
    detail:
      "A bright front-of-store view with display walls, mounted units, and customer flow clearly visible.",
  },
  {
    src: "/uploads/store-05.jpg",
    title: "Showroom aisle with appliances",
    category: "Store Photos",
    detail:
      "A long aisle that gives the showroom its premium retail feel and helps visitors scan the product range.",
  },
  {
    src: "/uploads/store-01.jpg",
    title: "Kitchen display zone",
    category: "Store Photos",
    detail:
      "Cooktops and kitchen products displayed neatly for customers looking for everyday appliance options.",
  },
  {
    src: "/uploads/store-02.jpg",
    title: "Cooling solutions corner",
    category: "Gallery Photos",
    detail:
      "A section focused on cooling products and seasonal categories within the showroom.",
  },
];

export default function ShowroomSection() {
  return (
    <section
      id="showroom"
      className="border-b border-white/10 bg-black py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Visit Our Showroom
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight leading-[0.95] text-white md:text-6xl">
              See the store before you choose the product.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              These uploaded photos are used to show the real showroom
              environment, the product wall, and the kind of buying experience
              visitors can expect.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 md:w-auto"
          >
            Get Directions
            <ArrowRight size={16} />
          </Link>
        </div>

        <StoreGallery items={showroomImages} />

        <div className="mt-8 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
              Store Address
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300">
              91-A/C 710, Kamal Niwas, Opp. Radisson Blu, Mohaddipur,
              Gorakhpur - 273008, Uttar Pradesh, India
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                <MapPin size={18} />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                Location
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Easy access near Radisson Blu in Mohaddipur.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                <Clock3 size={18} />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">
                Opening Hours
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                ALL DAY, 10:00 AM to 8:30 PM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
