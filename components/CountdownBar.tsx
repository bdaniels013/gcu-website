"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { featuredEvent } from "@/lib/event";
import { useCountdown } from "@/lib/useCountdown";

/**
 * Sticky, marquee-style countdown pinned to the bottom of every page.
 * The text scrolls continuously (pauses on hover) and the bar can be
 * collapsed by the visitor.
 */
const HIDE_KEY = "gcu-countdown-hidden";

export function CountdownBar() {
  const t = useCountdown(featuredEvent.startsAt);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      setHidden(sessionStorage.getItem(HIDE_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  function hide() {
    setHidden(true);
    try {
      sessionStorage.setItem(HIDE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (hidden) return null;

  const countText = t.ready
    ? t.isPast
      ? "Happening now, come join us!"
      : `${t.days}d ${String(t.hours).padStart(2, "0")}h ${String(t.minutes).padStart(2, "0")}m ${String(t.seconds).padStart(2, "0")}s`
    : "Loading…";

  // One marquee "segment", duplicated so the loop is seamless.
  const Segment = (
    <span className="mx-8 inline-flex items-center gap-3 text-sm font-medium">
      <span className="text-white">★</span>
      <span className="font-semibold uppercase tracking-wider text-white">
        {featuredEvent.title}
      </span>
      <span className="text-white/80">{featuredEvent.tagline}</span>
      <span className="rounded-full bg-white/20 px-3 py-0.5 font-bold tabular-nums text-white">
        {countText}
      </span>
    </span>
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-deep/50 bg-orange text-white shadow-[0_-6px_24px_rgba(0,0,0,0.25)]">
      <div className="flex items-center">
        {/* Scrolling marquee */}
        <Link
          href={featuredEvent.ctaHref}
          className="group relative min-w-0 flex-1 overflow-hidden py-2.5"
          aria-label={`${featuredEvent.title}, view event details`}
        >
          <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {Segment}
            {Segment}
            {Segment}
            {Segment}
            {/* duplicate set for seamless -50% loop */}
            {Segment}
            {Segment}
            {Segment}
            {Segment}
          </div>
        </Link>

        <button
          type="button"
          onClick={hide}
          aria-label="Hide countdown bar"
          className="flex h-10 w-10 flex-none items-center justify-center text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
