"use client";

import { schedule, type ScheduleItem } from "@/lib/event";

const DAY_INDEX: Record<string, number> = {
  SU: 0,
  MO: 1,
  TU: 2,
  WE: 3,
  TH: 4,
  FR: 5,
  SA: 6,
};

/** Next upcoming occurrence of a weekday + time, in the visitor's timezone. */
function nextOccurrence(byDay: string, time: string): Date {
  const [h, m] = time.split(":").map(Number);
  const now = new Date();
  const d = new Date(now);
  const diff = (DAY_INDEX[byDay] - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + diff);
  d.setHours(h, m, 0, 0);
  if (d.getTime() < now.getTime()) d.setDate(d.getDate() + 7);
  return d;
}

function fmt(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return (
    `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T` +
    `${p(d.getHours())}${p(d.getMinutes())}00`
  );
}

function calendarUrl(item: ScheduleItem): string {
  const start = nextOccurrence(item.byDay, item.startTime);
  const end = nextOccurrence(item.byDay, item.endTime);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${item.title} — Gulf Coast Underground`,
    dates: `${fmt(start)}/${fmt(end)}`,
    recur: `RRULE:FREQ=WEEKLY;BYDAY=${item.byDay}`,
    location: item.location,
    details:
      "Weekly gathering with Gulf Coast Underground. We'd love to see you there!",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function ScheduleBanner() {
  return (
    <section className="bg-orange text-white">
      <div className="mx-auto flex max-w-[var(--content)] flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-7">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            This Week
          </p>
          <h2 className="mt-1 text-2xl font-medium uppercase tracking-tight sm:text-3xl">
            Join Us at the Underground
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:flex-1 lg:max-w-2xl">
          {schedule.map((item, i) => (
            <a
              key={i}
              href={calendarUrl(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-md bg-white/15 p-4 text-center transition-colors hover:bg-white/25"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                {item.day}
              </span>
              <span className="mt-1 text-lg font-semibold">{item.time}</span>
              <span className="text-[13px] text-white/85">{item.title}</span>
              <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-[3px] bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-orange">
                RSVP
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
