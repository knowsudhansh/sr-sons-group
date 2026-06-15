import {
  ShieldCheck,
  Award,
  Zap,
  Users,
} from "lucide-react";

export default function RCSWhyChoose() {
  const reasons = [
    {
      icon: Award,
      title: "25+ Years Legacy",
      description: "Quarter-century of proven excellence and industrial expertise"
    },
    {
      icon: ShieldCheck,
      title: "Reliability Guaranteed",
      description: "99.8% uptime record with comprehensive backup support systems"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art manufacturing and latest power generation innovations"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 technical team and lifetime after-sales service commitment"
    }
  ];

  return (
    <section className="bg-[#070B14] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">Why Choose Us</p>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Why RCS Electricals Pvt. Ltd.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all"
              >
                <Icon size={48} className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12">
          <div className="text-center">
            <p className="text-cyan-400 uppercase tracking-[5px] font-semibold mb-4">Our Commitment</p>
            <h3 className="text-4xl font-bold mb-6">Quality You Can Trust</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Every product is manufactured under strict quality control standards. 
              We stand behind our generators with comprehensive warranties, 
              emergency response protocols, and lifetime technical support to ensure 
              your operations never stop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
