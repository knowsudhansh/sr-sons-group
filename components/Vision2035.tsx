export default function Vision2035() {
  const roadmap = [
    {
      year: "2025",
      title: "Group Expansion",
      description:
        "Strengthening Electrical, Generator and Electronics businesses.",
    },
    {
      year: "2028",
      title: "Technology Growth",
      description:
        "Expanding power solutions and digital operations.",
    },
    {
      year: "2030",
      title: "National Presence",
      description:
        "Growing across multiple cities and industrial sectors.",
    },
    {
      year: "2035",
      title: "Future Enterprise",
      description:
        "Creating an integrated ecosystem across industries.",
    },
  ];

  return (
   <section id="about" className="bg-[#070B14] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">
            Vision Roadmap
          </p>

          <h2 className="text-6xl font-bold mt-4">
            Vision 2035
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {roadmap.map((item) => (
            <div
              key={item.year}
              className="
                bg-white/[0.03]
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-cyan-400 text-3xl font-bold">
                {item.year}
              </h3>

              <h4 className="text-xl font-semibold mt-4">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}