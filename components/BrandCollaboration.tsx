import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, CircuitBoard, Sparkles } from "lucide-react";

export default function BrandCollaboration() {
  return (
    <section className="border-t border-white/10 bg-[#070B14] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Strategic Brand Partnership
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
            Our brand collaboration with Quantum Living Solutions.
          </h2>
        </div>

        <div className="grid gap-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex items-center justify-center rounded-[24px] border border-white/10 bg-white px-8 py-10">
            <Image
              src="/brand/quantum-living-solutions.png"
              alt="Quantum Living Solutions logo"
              width={1200}
              height={1200}
              className="h-auto w-full max-w-[420px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Smart Home
              </span>
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Automation
              </span>
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Lifestyle Solutions
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
              RCS Electricals proudly collaborates with Quantum Living Solutions
              to deliver premium smart home, automation, and modern electrical
              lifestyle solutions for customers who want a more connected and
              comfortable way of living.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-black/25 p-5">
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                  <BadgeCheck size={18} />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Official Website
                </p>
                <p className="mt-2 break-all text-sm text-white/90">
                  quantumlivingsolutions.com
                </p>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-black/25 p-5">
                <div className="inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-300">
                  <CircuitBoard size={18} />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Collaboration Focus
                </p>
                <p className="mt-2 text-sm text-white/90">
                  Smart living, automation, and modern product experiences.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://quantumlivingsolutions.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Visit Partner Website
                <ArrowUpRight size={16} />
              </Link>

              <div className="inline-flex items-center gap-2 text-sm text-gray-300">
                <Sparkles size={16} className="text-cyan-300" />
                Premium collaboration for connected living solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
