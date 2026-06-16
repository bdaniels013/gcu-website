"use client";

import type { GcuEvent } from "@/lib/event";
import { useCountdown } from "@/lib/useCountdown";

function formatFull(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function FeaturedEventCard({ event }: { event: GcuEvent }) {
  const t = useCountdown(event.date);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hrs", value: t.hours },
    { label: "Min", value: t.minutes },
    { label: "Sec", value: t.seconds },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-teal/30 bg-ink-soft p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-amber/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber">
            {event.tag}
          </span>
          <h3 className="mt-4 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
            {event.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-mist-soft">
            {event.description}
          </p>
          <dl className="mt-6 space-y-1.5 text-sm text-mist-soft">
            <div className="flex gap-2">
              <dt className="font-semibold text-teal">When</dt>
              <dd>
                {formatFull(event.date)}
                {event.endTime ? ` – ${event.endTime}` : ""}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-teal">Where</dt>
              <dd>
                {event.location} · {event.address}
              </dd>
            </div>
          </dl>
          <a
            href="/gala"
            className="mt-7 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            View Gala Details
          </a>
        </div>

        {/* Countdown */}
        <div className="rounded-2xl bg-teal p-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/70">
            {t.ready && t.isPast ? "Happening now" : "Counting down"}
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {units.map((u) => (
              <div key={u.label} className="text-center">
                <div className="rounded-xl bg-white/10 py-3 text-2xl font-bold tabular-nums text-white">
                  {t.ready ? String(u.value).padStart(2, "0") : "--"}
                </div>
                <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  {u.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
