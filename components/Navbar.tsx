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
          href="/"
          className="text-white font-bold text-xl"
        >
          RCS Electricals Pvt. Ltd.
        </Link>

        <nav className="hidden md:flex gap-8 text-white">
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/products#products">Products</Link>
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
          <div className="flex flex-col gap-4">
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
              href="#services"
              className="hover:text-cyan-400 transition"
            >
              Services
            </a>

            <a
              href="#divisions"
              className="hover:text-cyan-400 transition"
            >
              Divisions
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="/products#products"
              className="hover:text-cyan-400 transition"
            >
              Products
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
