"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export interface AccordionItemData {
  title: string;
  body: ReactNode;
  /** optional small muted footnote (e.g. scripture references) */
  refs?: string;
}

export function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItemData[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-ink">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black/[0.02] sm:px-6"
            >
              <span className="text-base font-semibold text-mist sm:text-lg">
                {item.title}
              </span>
              <span
                className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-teal/30 text-teal transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 pt-0 sm:px-6">
                <div className="space-y-3 text-[15px] leading-relaxed text-mist-soft">
                  {item.body}
                </div>
                {item.refs && (
                  <p className="mt-4 text-xs leading-relaxed text-mist-soft/60">
                    {item.refs}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
