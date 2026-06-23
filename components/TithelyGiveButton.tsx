"use client";

import Script from "next/script";

/**
 * Tithe.ly "Give" button. The give.js script turns any element carrying the
 * `tithely-give-button` class + `data-form` attribute into a secure giving
 * modal, so we keep those exact hooks and just restyle the button to match the
 * site. `data-form` is the ministry's live Tithe.ly giving form ID.
 */
const TITHELY_FORM_ID = "651d1b27-5d42-11ee-90fc-1260ab546d11";

export function TithelyGiveButton({ className = "" }: { className?: string }) {
  return (
    <>
      <button
        type="button"
        data-form={TITHELY_FORM_ID}
        className={`tithely-give-button inline-flex cursor-pointer items-center justify-center rounded-[3px] bg-orange px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-orange-deep ${className}`}
      >
        Give Now
      </button>
      <Script
        src="https://static.tithely.com/give/give.js"
        strategy="afterInteractive"
      />
    </>
  );
}
