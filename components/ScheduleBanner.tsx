"use client";

import Link from "next/link";
import { schedule } from "@/lib/event";

/**
 * Scrolling "This Week" Bible-study ticker. Rendered inside the sticky header
 * so it stays pinned to the top of every page; the content marquees sideways
 * (and pauses on hover so the pills stay clickable). Every pill links to the
 * calendar page, where visitors can see the full month and add studies to
 * their own Google Calendar.
 */
export function ScheduleBanner() {
  // One marquee segment: the label followed by every study pill.
  const Segment = (
    <div className="flex items-center gap-2.5 pr-8">
      <span className="shrink-0 text-[11px] font-bold uppercase leading-tight tracking-[0.16em] text-white/90">
        This Week &middot; Join a Bible Study
      </span>
      {schedule.map((item, i) => (
        <Link
          key={i}
          href="/calendar"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white/15 px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors hover:bg-white/25"
        >
          <span className="uppercase tracking-wide">{item.day.slice(0, 3)}</span>
          <span className="text-white/90">{item.time}</span>
          <span aria-hidden className="text-white/60">
            &middot;
          </span>
          <span className="font-medium text-white/90">{item.title}</span>
          <span aria-hidden className="text-white/80">
            →
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-orange py-2 text-white">
      {/* Duplicated segments give the -50% loop a seamless wrap. */}
      <div className="flex w-max animate-marquee items-center">
        {Segment}
        {Segment}
        {Segment}
        {Segment}
        {Segment}
        {Segment}
      </div>
    </div>
  );
}
