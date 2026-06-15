export default function GeneratorLayout() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}

      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[6px] text-yellow-400">
            RCS Electricals Pvt. Ltd.
          </p>

          <h1 className="text-6xl md:text-8xl font-bold mt-6">
            Reliable
            <br />
            Power Solutions
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-400">
            Manufacturer and supplier of industrial
            generators, backup power systems and
            energy solutions.
          </p>

        </div>

      </section>

      {/* Product Categories */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Generator Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              Diesel Generators
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              Industrial Generators
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              Water Powered Solutions
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
