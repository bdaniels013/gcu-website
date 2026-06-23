import { schedule, gala, type ScheduleItem } from "./event";

/** iCal BYDAY code → JS getDay() index (0 = Sunday). */
export const DAY_INDEX: Record<string, number> = {
  SU: 0,
  MO: 1,
  TU: 2,
  WE: 3,
  TH: 4,
  FR: 5,
  SA: 6,
};

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function fmtDateTime(d: Date): string {
  return (
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T` +
    `${pad(d.getHours())}${pad(d.getMinutes())}00`
  );
}

/**
 * Google Calendar "add event" URL for a weekly study, anchored to a specific
 * occurrence date. Adds the whole recurring series (weekly on that weekday).
 */
export function googleCalendarUrl(item: ScheduleItem, date: Date): string {
  const [sh, sm] = item.startTime.split(":").map(Number);
  const [eh, em] = item.endTime.split(":").map(Number);
  const start = new Date(date);
  start.setHours(sh, sm, 0, 0);
  const end = new Date(date);
  end.setHours(eh, em, 0, 0);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${item.title} — Gulf Coast Underground`,
    dates: `${fmtDateTime(start)}/${fmtDateTime(end)}`,
    recur: `RRULE:FREQ=WEEKLY;BYDAY=${item.byDay}`,
    location: item.location,
    details:
      "Weekly gathering with Gulf Coast Underground. We'd love to see you there!",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/** Weekly studies that land on a given weekday index (0 = Sunday). */
export function studiesOnWeekday(weekday: number): ScheduleItem[] {
  return schedule.filter((s) => DAY_INDEX[s.byDay] === weekday);
}

/** Short time label for tight calendar cells, e.g. "12:00 PM" → "12p". */
export function shortTime(time: string): string {
  const [hm, period] = time.split(" ");
  const [h, m] = hm.split(":");
  const suffix = period?.toLowerCase().startsWith("p") ? "p" : "a";
  return m === "00" ? `${h}${suffix}` : `${h}:${m}${suffix}`;
}

/** The gala, as a single dated calendar entry. */
export const galaDate = new Date(gala.startsAtISO);
