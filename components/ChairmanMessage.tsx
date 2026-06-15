import Image from "next/image";

export default function ChairmanMessage() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Image
              src="/companies/electrical.png"
              alt="RCS Electricals leadership"
              width={960}
              height={720}
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Chairman&apos;s Message
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              Welcome to RCS Electricals Pvt. Ltd.
              Our commitment is to deliver excellence across
              electrical contracting, power systems, consumer electronics,
              energy solutions, and hospitality services.
            </p>

            <h3 className="mt-8 font-bold text-xl">
              Sudhanshu Vishwakarma
            </h3>

            <p className="text-gray-500">
              Chairman & Founder
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
