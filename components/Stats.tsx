export default function Stats() {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "5", label: "Business Units" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}