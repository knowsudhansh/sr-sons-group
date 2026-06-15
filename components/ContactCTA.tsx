import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="
      bg-[#070B14]
      text-white
      py-32
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          bg-white/[0.03]
          border
          border-white/10
          backdrop-blur-xl
          p-16
          text-center
          "
        >

          <p className="uppercase tracking-[5px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-6xl font-bold mt-4">
            Ready To Discuss
            <br />
            Your Power Solutions?
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Partner with RCS Electricals Pvt. Ltd. for
            reliable power generation and industrial
            infrastructure solutions tailored to your needs.
          </p>

          <Link
            href="#contact"
            className="
            mt-10
            inline-flex
            items-center
            justify-center
            px-10
            py-5
            rounded-2xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            font-semibold
            hover:scale-105
            transition-all
            "
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}
