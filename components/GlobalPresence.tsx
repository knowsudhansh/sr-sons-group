export default function GlobalPresence() {
  const locations = [
    "Delhi",
    "Lucknow",
    "Gorakhpur",
    "Varanasi",
    "Mumbai",
    "Bangalore",
  ];

  return (
    <section className="bg-[#070B14] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">
            Presence
          </p>

          <h2 className="text-6xl font-bold mt-4">
            Growing Across India
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Delivering solutions across Electrical,
            Electronics, Power Backup, Energy and Hospitality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="
            bg-white/[0.03]
            border border-white/10
            rounded-3xl
            p-10
            backdrop-blur-xl
          ">
            <h3 className="text-3xl font-bold">
              Active Locations
            </h3>

            <div className="flex flex-wrap gap-3 mt-8">
              {locations.map((city) => (
                <div
                  key={city}
                  className="
                  px-4 py-2
                  rounded-full
                  bg-white/5
                  border border-white/10
                "
                >
                  {city}
                </div>
              ))}
            </div>
          </div>

          <div className="
            bg-white/[0.03]
            border border-white/10
            rounded-3xl
            p-10
            backdrop-blur-xl
          ">
            <h3 className="text-3xl font-bold">
              Enterprise Reach
            </h3>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  500+
                </h4>
                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  1000+
                </h4>
                <p className="text-gray-400">
                  Clients
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  25+
                </h4>
                <p className="text-gray-400">
                  Years
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-bold text-cyan-400">
                  5
                </h4>
                <p className="text-gray-400">
                  Business Units
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}