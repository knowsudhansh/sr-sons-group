import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoreGallery from "@/components/StoreGallery";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  CreditCard,
  Home,
  MapPin,
  MessageCircleMore,
  Phone,
  Route,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Navigation,
} from "lucide-react";

const showcasePhotos = [
  {
    src: "/uploads/store-01.jpg",
    title: "Compact appliance wall",
    category: "Store Photos",
    detail: "A clean, shelf-led display area with cooktops and boxed appliances ready for showroom browsing.",
  },
  {
    src: "/uploads/store-02.jpg",
    title: "Cooling and utility corner",
    category: "Store Photos",
    detail: "Store-side display focused on coolers and utility products with clear aisle visibility.",
  },
  {
    src: "/uploads/store-03.jpg",
    title: "Feature showroom view",
    category: "Gallery Photos",
    detail: "A balanced retail angle that shows appliance rows, product walls, and the front customer path.",
  },
  {
    src: "/uploads/store-04.jpg",
    title: "Display and entry view",
    category: "Gallery Photos",
    detail: "A wider view with AC displays, fridge rows, and the entrance path that customers see first.",
  },
  {
    src: "/uploads/store-05.jpg",
    title: "Main showroom aisle",
    category: "Store Photos",
    detail: "A deep aisle shot that highlights breadth of stock and the premium showroom layout.",
  },
];

const productCards = [
  {
    slug: "cooktop-display",
    name: "Butterfly 3-Burner Cooktop Display",
    description:
      "A reliable kitchen category display built around everyday cooking needs and premium shelf presentation.",
    mrp: "Rs. 11,990",
    price: "Rs. 9,990",
    availability: "In Stock",
    image: "/uploads/product-01.jpg",
    specs: ["3 burners", "Glass top", "Auto ignition"],
  },
  {
    slug: "cooler-display",
    name: "Air Cooler Showcase Unit",
    description:
      "Tall cooling display units for summer-ready retail browsing, easy comparisons, and quick delivery enquiries.",
    mrp: "Rs. 15,990",
    price: "Rs. 13,490",
    availability: "Available",
    image: "/uploads/product-02.jpg",
    specs: ["High airflow", "Portable", "Low noise"],
  },
  {
    slug: "fridge-row",
    name: "Double Door Refrigerator Collection",
    description:
      "A line-up of popular fridge finishes for home buyers who want style, capacity, and dependable cooling.",
    mrp: "Rs. 32,990",
    price: "Rs. 29,490",
    availability: "Limited Stock",
    image: "/uploads/product-03.jpg",
    specs: ["Large storage", "Energy efficient", "5-year compressor warranty"],
  },
  {
    slug: "premium-fridge",
    name: "Signature Floral Finish Refrigerator",
    description:
      "A premium refrigerator finish that stands out on the showroom floor and works well for lifestyle buyers.",
    mrp: "Rs. 34,990",
    price: "Rs. 31,490",
    availability: "Available",
    image: "/uploads/product-04.jpg",
    specs: ["Double door", "Stabilizer free", "Fresh food zone"],
  },
  {
    slug: "cooler-compact",
    name: "Compact Cooler Range",
    description:
      "Practical cooler options for homes, shops, and office corners that need straightforward seasonal cooling.",
    mrp: "Rs. 12,490",
    price: "Rs. 10,990",
    availability: "In Stock",
    image: "/uploads/product-02.jpg",
    specs: ["Portable", "Water efficient", "Easy service"],
  },
  {
    slug: "kitchen-combo",
    name: "Kitchen Appliance Combo",
    description:
      "Bundled appliance presentation for customers comparing cooktops, coolers, and cooking tools in one visit.",
    mrp: "Rs. 19,990",
    price: "Rs. 16,990",
    availability: "Featured",
    image: "/uploads/product-01.jpg",
    specs: ["Bundle offer", "Retail ready", "Mixed appliance set"],
  },
];

const futureCommerce = [
  {
    icon: ShoppingCart,
    title: "Shopping Cart",
    note: "Saved baskets and product comparison are ready for later activation.",
  },
  {
    icon: CreditCard,
    title: "Checkout",
    note: "A future checkout flow can plug in without changing the page layout.",
  },
  {
    icon: Route,
    title: "Order Tracking",
    note: "Delivery and service tracking can be added to this structure later.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    note: "Store-to-door delivery and installation support are planned in the UI.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    note: "Payment gateway placeholders are ready for future ecommerce rollout.",
  },
];

const storeHours = [
  "Monday to Saturday: 10:00 AM - 7:00 PM",
  "Sunday: By appointment",
];

const officeAddress =
  "91-A/C 710, Kamal Niwas, Opp. Radisson Blu, Mohaddipur, Gorakhpur - 273008";
const fullAddress = `${officeAddress}, Uttar Pradesh, India`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070B14] text-white">
      <Navbar />

      <section id="home" className="relative overflow-hidden border-b border-white/10 pt-36 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-slate-950 opacity-90" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Showroom Products
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Continue your showroom visit with the full product range.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              RCS Electricals Pvt. Ltd. presents a polished retail-style
              product experience with uploaded showroom photos, real product
              images, and direct enquiry actions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Browse Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Visit Our Store
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 sm:row-span-2">
                <Image
                  src="/uploads/store-03.jpg"
                  alt="Showroom view with appliances and aisle display"
                  width={1200}
                  height={900}
                  className="h-[360px] w-full object-cover sm:h-[520px]"
                  priority
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <Image
                  src="/uploads/product-03.jpg"
                  alt="Product display refrigerator row"
                  width={900}
                  height={700}
                  className="h-44 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
                <Image
                  src="/uploads/store-05.jpg"
                  alt="Showroom aisle and store photos"
                  width={900}
                  height={700}
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 bg-[#091420] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              About Store
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              A showroom that feels premium, bright, and easy to shop.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              The showroom is designed for quick comparison, clean product
              visibility, and confident buying. Customers can walk the floor,
              compare brands, and ask the team for live pricing support.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
              Store photos, product photos, and gallery views are now grouped in
              the right places so the site reads like a real retail destination.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "50+", label: "Brands and product lines" },
              { value: "24x7", label: "Enquiry support" },
              { value: "In-store", label: "Demo and pickup" },
              { value: "Delivery", label: "Future-ready" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-black text-cyan-300 md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-medium text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
            <div className="sm:col-span-2 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <Image
                src="/uploads/store-01.jpg"
                alt="Showroom wall and product display"
                width={1200}
                height={800}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-[#070B14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Store Gallery Section
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Interior and gallery photos with lightbox preview.
            </h2>
          </div>

          <div className="mt-12">
            <StoreGallery items={showcasePhotos} />
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-white/10 bg-[#091420] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Product Showcase Section
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Featured products with pricing, specifications, and availability.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {productCards.map((product) => (
              <article
                key={product.slug}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
              >
                <div className="relative h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-5">
                    <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                      {product.availability}
                    </span>
                    <span className="inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white">
                      Product
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Product Showcase
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {product.description}
                  </p>

                  <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-black/30 p-4">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-gray-400">
                          Original Price (MRP)
                        </p>
                        <p className="mt-2 text-lg font-semibold text-gray-400 line-through">
                          {product.mrp}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                          Discount Price
                        </p>
                        <p className="mt-2 text-2xl font-black text-cyan-300">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                      Product Specifications
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-cyan-300" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href="#contact"
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 sm:w-auto"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hello, I am interested in ${product.name}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                    >
                      WhatsApp Inquiry
                      <MessageCircleMore size={16} />
                    </Link>
                    <Link
                      href="tel:+91XXXXXXXXXX"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 sm:w-auto"
                    >
                      Call Now
                      <Phone size={16} />
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-transparent px-4 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/5 sm:w-auto"
                    >
                      Visit Store
                      <Home size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#070B14] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Future Commerce
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready for cart, checkout, payments, tracking, and delivery.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {futureCommerce.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Coming Soon
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="border-b border-white/10 bg-[#091420] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.02fr_0.98fr] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Visit Our Store
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Come see the products, compare options, and talk to the team.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                Store visitors can review the product range, ask for live
                pricing, and collect support from the office and showroom team.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Address
                  </p>
                  <p className="mt-3 text-sm leading-7 text-gray-300">
                    {officeAddress}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                    Opening Hours
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-300">
                    {storeHours.map((hour) => (
                      <li key={hour} className="flex items-center gap-2">
                        <Clock3 size={16} className="text-cyan-300" />
                        {hour}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="tel:+91XXXXXXXXXX"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
                >
                  Call Store
                </Link>
                <Link
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
                >
                  Open in Google Maps
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <Image
                    src="/uploads/store-04.jpg"
                    alt="Store entrance and display view"
                    width={900}
                    height={700}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                  <Image
                    src="/uploads/store-05.jpg"
                    alt="Store aisle with products"
                    width={900}
                    height={700}
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
                <iframe
                  title="Google Map - RCS Electricals Pvt. Ltd."
                  src={mapSrc}
                  className="h-[340px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Location Information
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Opp. Radisson Blu, Mohaddipur, Gorakhpur - 273008, Uttar
                  Pradesh, India
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                    <Building2 size={16} className="text-cyan-300" />
                    Office & showroom
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                    <MapPin size={16} className="text-cyan-300" />
                    Gorakhpur
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                    <Navigation size={16} className="text-cyan-300" />
                    Easy to locate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
