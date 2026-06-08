"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div
        className="
        max-w-7xl
        mx-auto
        backdrop-blur-xl
        bg-white/[0.05]
        border
        border-white/10
        rounded-2xl
        px-6
        py-4
        flex
        items-center
        justify-between
      "
      >
        <Link
          href="#home"
          className="text-white font-bold text-xl"
        >
          SR & Sons Industry
        </Link>

        <nav
//   className="
//   fixed
//   top-5
//   left-1/2
//   -translate-x-1/2
//   z-50
//   w-[90%]
//   max-w-7xl
//   "
 className="hidden md:flex gap-8 text-white">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#companies">Companies</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div
          className="
          md:hidden
          mt-3
          backdrop-blur-xl
          bg-white/[0.05]
          border
          border-white/10
          rounded-2xl
          p-6
          text-white
        "
        >
          <div className="flex gap-8">

  <a
    href="#home"
    className="hover:text-cyan-400 transition"
  >
    Home
  </a>

  <a
    href="#about"
    className="hover:text-cyan-400 transition"
  >
    About
  </a>

  <a
    href="#companies"
    className="hover:text-cyan-400 transition"
  >
    Companies
  </a>

  <a
    href="#contact"
    className="hover:text-cyan-400 transition"
  >
    Contact
  </a>

</div>
        </div>
      )}
    </header>
  );
}