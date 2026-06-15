import { Zap, Truck, Settings, Wrench } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Generator Manufacturing",
    description: "Advanced diesel, industrial, and multi-fuel generator systems built to ISO standards with precision engineering."
  },
  {
    icon: Truck,
    title: "Supply & Logistics",
    description: "Nationwide logistics network ensuring on-time delivery and seamless installation across India."
  },
  {
    icon: Settings,
    title: "Installation & Setup",
    description: "Expert installation, configuration, and system integration by certified technical professionals."
  },
  {
    icon: Wrench,
    title: "24/7 Support & AMC",
    description: "Round-the-clock technical support, preventive maintenance, and comprehensive service agreements."
  }
];

export default function RCSServices() {
  return (
    <section id="services" className="bg-black text-white py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 md:mb-24">
          <p className="uppercase tracking-[7px] text-cyan-400 text-sm font-medium">Our Expertise</p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mt-6 leading-[0.95] max-w-4xl mx-auto">
            Comprehensive Power Solutions
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From manufacturing to 24/7 support, we handle every aspect of your power infrastructure
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-16 md:mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative min-h-[220px] bg-gradient-to-br from-white/8 to-white/3 border border-cyan-400/20 rounded-[28px] p-8 md:p-9 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.16)] overflow-hidden"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px]" />
                
                {/* Icon Container */}
                <div className="relative mb-6 inline-block">
                  <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                    <Icon size={32} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-transparent w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Stats Showcase */}
        <div className="relative bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-400/20 rounded-[28px] p-10 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-transparent opacity-50" />
          
          <div className="relative grid gap-8 md:grid-cols-3 md:gap-10 text-center">
            <div>
              <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">500+</p>
              <p className="text-gray-400 font-medium text-lg">Generator Units Manufactured</p>
              <p className="text-gray-500 text-sm mt-2">Industry-leading production capacity</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">30+</p>
              <p className="text-gray-400 font-medium text-lg">Industries & Sectors Served</p>
              <p className="text-gray-500 text-sm mt-2">Healthcare, IT, Manufacturing, Telecom, and more</p>
            </div>
            <div>
              <p className="text-5xl md:text-6xl font-black text-cyan-400 mb-3">99.8%</p>
              <p className="text-gray-400 font-medium text-lg">System Uptime Record</p>
              <p className="text-gray-500 text-sm mt-2">Backed by 24/7 technical support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
