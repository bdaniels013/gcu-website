"use client";

import { useEffect, useState } from "react";
import { gala, schedule } from "@/lib/event";
import {
  googleCalendarUrl,
  studiesOnWeekday,
  shortTime,
  galaDate,
  galaIcsUrl,
  icsUrl,
  nextOccurrence,
} from "@/lib/calendar";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * Navigable monthly calendar. Recurring Men's Bible Studies appear on every
 * Wed/Fri/Sat (click to add the series to Google Calendar); the gala shows on
 * its date and links to the gala page. Renders only after mount so the
 * "current month" never causes a hydration mismatch on the static export.
 * `showAddPanel` toggles the "add a weekly study" buttons below the grid
 * (kept on the full /calendar page, hidden in the compact homepage embed).
 */
export function CalendarView({
  showAddPanel = true,
}: {
  showAddPanel?: boolean;
} = {}) {
  const [now, setNow] = useState<Date | null>(null);
  const [offset, setOffset] = useState(0); // months from the current month

  useEffect(() => setNow(new Date()), []);

  if (!now) {
    // Placeholder keeps the page height stable while JS boots.
    return <div className="min-h-[520px]" aria-hidden />;
  }

  const base = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const year = base.getFullYear();
  const month = base.getMonth();
  const startWeekday = base.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div className="mx-auto max-w-4xl">
      {/* Month navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setOffset((o) => o - 1)}
          aria-label="Previous month"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-mist transition-colors hover:border-teal hover:text-teal"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M15 6l-6 6 6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="text-xl font-medium uppercase tracking-wide text-mist sm:text-2xl">
            {MONTHS[month]} {year}
          </h2>
          {offset !== 0 && (
            <button
              type="button"
              onClick={() => setOffset(0)}
              className="mt-1 cursor-pointer text-[11px] font-bold uppercase tracking-widest text-teal hover:text-teal-deep"
            >
              Back to this month
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOffset((o) => o + 1)}
          aria-label="Next month"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-mist transition-colors hover:border-teal hover:text-teal"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Weekday header */}
      <div className="mt-6 grid grid-cols-7 gap-px">
        {WEEKDAYS.map((w) => (
          <div
            key={w}
            className="pb-2 text-center text-[11px] font-bold uppercase tracking-wider text-mist-soft"
          >
            <span className="sm:hidden">{w[0]}</span>
            <span className="hidden sm:inline">{w}</span>
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10">
        {cells.map((d, i) => {
          if (d === null) {
            return (
              <div
                key={i}
                className="min-h-[78px] bg-ink-soft/40 sm:min-h-[104px]"
              />
            );
          }
          const date = new Date(year, month, d);
          const studies = studiesOnWeekday(date.getDay());
          const isGala = sameDay(date, galaDate);
          const isToday = sameDay(date, now);

          return (
            <div
              key={i}
              className={`min-h-[78px] bg-ink p-1 sm:min-h-[104px] sm:p-1.5 ${
                isToday ? "ring-2 ring-inset ring-teal" : ""
              }`}
            >
              <div
                className={`text-right text-[11px] font-semibold sm:text-xs ${
                  isToday ? "text-teal" : "text-mist-soft"
                }`}
              >
                {d}
              </div>
              <div className="mt-0.5 space-y-0.5">
                {studies.map((s, j) => (
                  <a
                    key={j}
                    href={icsUrl(s)}
                    title={`${s.time} — ${s.title} (tap to add to your calendar)`}
                    className="block rounded bg-orange/15 px-1 py-0.5 text-[9px] font-bold leading-tight text-orange-deep transition-colors hover:bg-orange/30 sm:text-[10px]"
                  >
                    <span className="sm:hidden">{shortTime(s.time)}</span>
                    <span className="hidden truncate sm:block">
                      {shortTime(s.time)} Bible Study
                    </span>
                  </a>
                ))}
                {isGala && (
                  <a
                    href={galaIcsUrl}
                    title={`${gala.title} — ${gala.theme} (tap to add to your calendar)`}
                    className="block truncate rounded bg-teal px-1 py-0.5 text-[9px] font-bold leading-tight text-white transition-colors hover:bg-teal-deep sm:text-[10px]"
                  >
                    <span className="sm:hidden">Gala</span>
                    <span className="hidden sm:inline">The Gala</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-mist-soft">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-orange/40" />
          Men&apos;s Bible Study — tap to add to your calendar
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-teal" />
          The Gala
        </span>
      </div>

      {/* Add-to-calendar panel: phone/Apple via .ics, or Google */}
      {showAddPanel && (
        <div className="mt-10 rounded-xl border border-black/[0.07] bg-ink-soft p-6 sm:p-8">
          <h3 className="text-center text-lg font-medium uppercase tracking-wide text-mist">
            Add a weekly study to your calendar
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-relaxed text-mist-soft">
            Come to one study a week, or join us for all three. You&apos;re
            welcome at any and all of them, so add as many as you&apos;d like.
            On a phone, &ldquo;Apple / Phone&rdquo; opens your built-in calendar
            app.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {schedule.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-black/[0.06] bg-ink p-4 text-center"
              >
                <p className="text-sm font-semibold text-mist">{s.day}</p>
                <p className="mt-0.5 text-xs text-mist-soft">
                  {s.time} &middot; {s.title}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href={icsUrl(s)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-[3px] bg-orange px-3 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-deep"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M3 10h18M8 2v4M16 2v4" strokeLinecap="round" />
                    </svg>
                    Apple / Phone
                  </a>
                  <a
                    href={googleCalendarUrl(s, nextOccurrence(s.byDay, now))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[3px] border-2 border-teal px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-teal transition-colors hover:bg-teal hover:text-white"
                  >
                    Google
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
