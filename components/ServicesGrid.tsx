type Props = {
  services: string[];
};

export default function ServicesGrid({
  services,
}: Props) {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Services & Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}