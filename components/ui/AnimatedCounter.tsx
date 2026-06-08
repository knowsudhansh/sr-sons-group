"use client";

import CountUp from "react-countup";

type Props = {
  value: number;
  label: string;
};

export default function AnimatedCounter({
  value,
  label,
}: Props) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white">
        <CountUp
          start={0}
          end={value}
          duration={3}
        />
        +
      </h2>

      <p className="mt-2 text-gray-400">
        {label}
      </p>
    </div>
  );
}