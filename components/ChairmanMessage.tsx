export default function ChairmanMessage() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Chairman"
              className="rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Chairman's Message
            </h2>

            <p className="text-gray-700 text-lg leading-8">
              Welcome to S R & Sons Industry Group.
              Our commitment is to deliver excellence across
              Electrical, Generator, Electronics, Power
              Solutions and Hospitality sectors.
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