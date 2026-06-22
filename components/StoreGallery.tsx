"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X, MoveLeft, MoveRight } from "lucide-react";

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  detail: string;
};

type StoreGalleryProps = {
  items: GalleryItem[];
};

export default function StoreGallery({ items }: StoreGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex] ?? null),
    [activeIndex, items],
  );

  const openItem = (index: number) => setActiveIndex(index);
  const closeItem = () => setActiveIndex(null);
  const previousItem = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length,
    );
  const nextItem = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % items.length,
    );

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => openItem(index)}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)] ${
              index === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div className={`relative ${index === 0 ? "h-[460px]" : "h-[240px]"}`}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                  {item.detail}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={closeItem}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08111d] shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                  {activeItem.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{activeItem.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeItem}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                aria-label="Close image preview"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative h-[70vh] min-h-[420px] w-full bg-black">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-3xl text-sm leading-6 text-gray-300">
                {activeItem.detail}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousItem}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MoveLeft size={16} />
                  Prev
                </button>
                <button
                  type="button"
                  onClick={nextItem}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Next
                  <MoveRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
