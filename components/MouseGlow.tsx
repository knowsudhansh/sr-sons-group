"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="
      pointer-events-none
      fixed
      z-30
      w-[700px]
      h-[700px]
      rounded-full
      blur-[180px]
      bg-cyan-400/30
    "
      style={{
        left: position.x - 350,
        top: position.y - 350,
      }}
    />
  );
}