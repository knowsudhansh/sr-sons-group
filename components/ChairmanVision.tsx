export default function ChairmanVision() {
  return (
    <section className="bg-[#070B14] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div
            className="
            h-[500px]
            rounded-3xl
            bg-white/[0.03]
            border border-white/10
            backdrop-blur-xl
            flex items-center justify-center
          "
          >
            <span className="text-gray-400">
              Chairman Photo
            </span>
          </div>

          {/* Content */}

          <div>

            <p className="uppercase tracking-[5px] text-cyan-400">
              Leadership Vision
            </p>

            <h2 className="text-6xl font-bold mt-4">
              Building Sustainable
              <br />
              Businesses For Tomorrow
            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              At S R & Sons Industry Group, our mission is
              to create long-term value across Electrical,
              Energy, Electronics and Hospitality sectors
              while maintaining excellence, innovation and
              customer trust.
            </p>

            <div className="
              mt-10
              p-6
              rounded-2xl
              bg-white/[0.03]
              border border-white/10
            ">
              <p className="italic text-xl">
                "Our vision is not only to grow businesses,
                but to build an ecosystem that empowers
                industries and communities."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}