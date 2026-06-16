"use client";

import { gala } from "@/lib/event";
import { useCountdown } from "@/lib/useCountdown";

/** Countdown to the gala, styled for the dark nautical hero. */
export function GalaCountdown() {
  const t = useCountdown(gala.startsAtISO);
  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  if (t.ready && t.isPast) {
    return (
      <p className="text-lg font-semibold text-white">
        The gala is here — welcome aboard!
      </p>
    );
  }

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-3">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-2xl border border-white/15 bg-white/5 px-2 py-4 backdrop-blur"
        >
          <div className="text-3xl font-bold tabular-nums text-white sm:text-4xl">
            {t.ready ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
