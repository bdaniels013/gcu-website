"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { featuredEvent, gala } from "@/lib/event";

/**
 * Full-screen takeover promoting the Gala. Shows the gala flyer artwork (the
 * top of the vertical flyer on mobile, the banner version on desktop) with a
 * single "Learn More About the Event" call to action. Dismissal is remembered
 * for the session.
 */
const DISMISS_KEY = "gcu-event-popup-dismissed";

export function EventPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* sessionStorage may be unavailable */
    }
    if (!dismissed) {
      const id = setTimeout(() => setVisible(true), 450);
      return () => clearTimeout(id);
    }
  }, []);

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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Featured event: ${featuredEvent.title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-mist/70 px-3 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="animate-fade-in relative w-full max-w-lg overflow-hidden rounded-2xl bg-ink shadow-2xl sm:max-w-4xl lg:max-w-6xl">
        <button
          type="button"
          onClick={close}
          aria-label="Close event announcement"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
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

        <Link
          href={featuredEvent.ctaHref}
          onClick={close}
          aria-label="Gala details"
        >
          {/* Mobile: square flyer (full artwork, all details included) */}
          <img
            src="/images/popup-flyer-mobile.jpg"
            alt={`${gala.title} — ${gala.theme}. ${gala.dateLabel}, ${gala.timeLabel}, ${gala.venue}.`}
            className="block w-full sm:hidden"
          />
          {/* Desktop: wide banner flyer (full artwork, all details included) */}
          <img
            src="/images/popup-flyer-desktop.jpg"
            alt={`${gala.title} — ${gala.theme}. ${gala.dateLabel}, ${gala.timeLabel}, ${gala.venue}.`}
            className="hidden w-full sm:block"
          />
        </Link>

        <div className="p-5 text-center sm:p-6">
          <Link
            href={featuredEvent.ctaHref}
            onClick={close}
            className="inline-flex w-full items-center justify-center rounded-[3px] bg-orange px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep sm:w-auto"
          >
            {featuredEvent.ctaLabel}
          </Link>
          <button
            type="button"
            onClick={close}
            className="mt-3 block w-full cursor-pointer text-xs font-semibold uppercase tracking-widest text-mist-soft transition-colors hover:text-mist sm:mt-2"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
