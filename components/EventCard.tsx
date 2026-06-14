"use client";

import type { GcuEvent } from "@/lib/event";
import { useCountdown } from "@/lib/useCountdown";

function dateParts(iso: string) {
  const d = new Date(iso);
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-US", { day: "numeric" }),
    weekday: d.toLocaleDateString("en-US", { weekday: "long" }),
    time: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
  };
}

export function EventCard({ event }: { event: GcuEvent }) {
  const t = useCountdown(event.date);
  const p = dateParts(event.date);

  const countdown = t.ready
    ? t.isPast
      ? "Happening now"
      : `in ${t.days}d ${String(t.hours).padStart(2, "0")}h ${String(t.minutes).padStart(2, "0")}m`
    : "";

  return (
    <article className="flex h-full gap-5 rounded-3xl border border-white/10 bg-ink-card p-6 transition-colors hover:border-teal/40">
      {/* Date block */}
      <div className="flex h-20 w-16 flex-none flex-col items-center justify-center rounded-2xl bg-ink-soft">
        <span className="text-xs font-bold tracking-widest text-amber">
          {p.month}
        </span>
        <span className="text-2xl font-bold text-mist">{p.day}</span>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
            {event.tag}
          </span>
          {countdown && (
            <span className="text-[11px] font-medium tabular-nums text-mist-soft">
              {countdown}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-mist">{event.title}</h3>
        <p className="mt-1 text-xs text-mist-soft">
          {p.weekday} · {p.time}
          {event.endTime ? ` – ${event.endTime}` : ""}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-soft">
          {event.description}
        </p>
        <p className="mt-3 text-xs text-mist-soft/80">📍 {event.location}</p>
      </div>
    </article>
  );
}
