"use client";

import Script from "next/script";
import { useRef } from "react";

/**
 * Tithe.ly "Give" button. give.js exposes `window.tithelyGive.open({ form })`
 * to launch the secure giving modal, but its own auto-binding only fires on
 * DOMContentLoaded — which has already passed by the time the script loads in
 * a Next.js app, so the built-in binding never attaches. We therefore call
 * `open()` ourselves on click (navigation-proof), and if a visitor clicks
 * before give.js has finished loading we remember the intent and open as soon
 * as it does. `data-form` is the ministry's live Tithe.ly giving form ID.
 */
const TITHELY_FORM_ID = "651d1b27-5d42-11ee-90fc-1260ab546d11";

declare global {
  interface Window {
    tithelyGive?: {
      open: (opts: { form: string; [key: string]: unknown }) => void;
    };
  }
}

export function TithelyGiveButton({ className = "" }: { className?: string }) {
  const pending = useRef(false);

  function give() {
    if (typeof window !== "undefined" && window.tithelyGive) {
      window.tithelyGive.open({ form: TITHELY_FORM_ID });
    } else {
      // Script not ready yet — open as soon as it loads (see onReady below).
      pending.current = true;
    }
  }

  function onReady() {
    if (pending.current) {
      pending.current = false;
      window.tithelyGive?.open({ form: TITHELY_FORM_ID });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={give}
        className={`inline-flex cursor-pointer items-center justify-center rounded-[3px] bg-orange px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-orange-deep ${className}`}
      >
        Give Now
      </button>
      <Script
        src="https://static.tithely.com/give/give.js"
        strategy="afterInteractive"
        onReady={onReady}
      />
    </>
  );
}
