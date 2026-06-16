"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { featuredEvent } from "@/lib/event";
import { useCountdown } from "@/lib/useCountdown";

/**
 * Full-screen takeover that appears as soon as the site loads, promoting the
 * featured event. The visitor must dismiss it with the X (or Escape / the
 * backdrop). Dismissal is remembered for the session so it doesn't nag on
 * every page change.
 */
const DISMISS_KEY = "gcu-event-popup-dismissed";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export function EventPopup() {
  const [visible, setVisible] = useState(false);
  const t = useCountdown(featuredEvent.startsAt);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* sessionStorage may be unavailable */
    }
    if (!dismissed) {
      // Brief delay so the page paints behind the takeover first.
      const id = setTimeout(() => setVisible(true), 450);
      return () => clearTimeout(id);
    }
  }, []);

  // Lock body scroll + wire up Escape while the popup is open.
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function close() {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  if (!visible) return null;

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Featured event: ${featuredEvent.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-mist/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber/15 blur-3xl" />

      <div className="animate-fade-in relative mx-4 my-12 w-full max-w-2xl rounded-3xl border border-black/10 bg-ink p-8 text-center shadow-2xl sm:p-12">
        <button
          type="button"
          onClick={close}
          aria-label="Close event announcement"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-mist-soft transition-colors hover:bg-black/[0.06] hover:text-mist"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
          You&apos;re Invited
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-mist sm:text-5xl">
          {featuredEvent.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base text-mist-soft">
          {featuredEvent.tagline}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mist-soft">
          <span className="inline-flex items-center gap-2">
            <span className="text-amber">●</span>
            {formatDate(featuredEvent.startsAt)}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="text-amber">●</span>
            {formatTime(featuredEvent.startsAt)}
          </span>
        </div>
        <p className="mt-1 text-sm text-mist-soft">{featuredEvent.address}</p>

        {/* Countdown */}
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-3">
          {units.map((u) => (
            <div key={u.label} className="rounded-2xl bg-teal px-2 py-4">
              <div className="text-3xl font-bold tabular-nums text-white sm:text-4xl">
                {t.ready ? String(u.value).padStart(2, "0") : "--"}
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                {u.label}
              </div>
            </div>
          ))}
        </div>

        {t.ready && t.isPast && (
          <p className="mt-4 text-sm font-medium text-amber">
            This event is happening now, come on out!
          </p>
        )}

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-mist-soft">
          {featuredEvent.description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={featuredEvent.ctaHref}
            onClick={close}
            className="w-full rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep sm:w-auto"
          >
            {featuredEvent.ctaLabel}
          </Link>
          <button
            type="button"
            onClick={close}
            className="w-full rounded-full border border-black/10 px-7 py-3 text-sm font-medium text-mist-soft transition-colors hover:bg-black/[0.04] sm:w-auto"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
