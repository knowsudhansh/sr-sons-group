export default function CompanyNavbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">

      <nav
        className="
        backdrop-blur-2xl
        bg-black/40
        border
        border-white/10
        rounded-2xl
        px-8
        py-4
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        "
      >
        <ul className="flex gap-10 text-white font-medium">

  <li>
    <a href="#home" className="hover:text-cyan-400 transition">
      Overview
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-cyan-400 transition">
      About
    </a>
  </li>

  <li>
    <a href="#services" className="hover:text-cyan-400 transition">
      Services
    </a>
  </li>

  <li>
    <a href="#projects" className="hover:text-cyan-400 transition">
      Projects
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>
  </li>

</ul>
      </nav>

    </div>
  );
}