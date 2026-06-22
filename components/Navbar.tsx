"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "/products#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

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
          href="/"
          className="text-white font-bold text-xl"
        >
          RCS Electricals Pvt. Ltd.
        </Link>

        <nav className="hidden md:flex gap-8 text-white">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
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
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
