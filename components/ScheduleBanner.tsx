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

/**
 * Thin "This Week" strip. Rendered inside the sticky header so it stays
 * pinned to the top of every page. Each pill opens a Google Calendar RSVP.
 */
export function ScheduleBanner() {
  return (
    <div className="bg-orange text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-5 py-1.5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
          This Week
        </span>
        <div className="flex items-center gap-2 sm:gap-2.5">
          {schedule.map((item, i) => (
            <a
              key={i}
              href={calendarUrl(item)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold transition-colors hover:bg-white/25"
            >
              <span className="uppercase tracking-wide">
                {item.day.slice(0, 3)}
              </span>
              <span className="text-white/90">{item.time}</span>
              <span className="hidden text-white/70 md:inline">
                {item.title}
              </span>
              <span aria-hidden className="text-white/80">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
