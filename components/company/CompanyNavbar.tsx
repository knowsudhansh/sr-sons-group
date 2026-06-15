export default function CompanyNavbar() {
  return (
    <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:top-6 sm:flex sm:justify-center">
      <nav
        className="w-full max-w-[calc(100vw-1.5rem)] overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,255,0.08)] sm:max-w-max"
      >
        <ul className="flex min-w-max gap-5 px-4 py-3 text-sm font-medium text-white sm:gap-10 sm:px-8 sm:py-4">
          <li>
            <a href="#home" className="whitespace-nowrap transition hover:text-cyan-400">
              Overview
            </a>
          </li>
          <li>
            <a href="#about" className="whitespace-nowrap transition hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="whitespace-nowrap transition hover:text-cyan-400">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="whitespace-nowrap transition hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="whitespace-nowrap transition hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
