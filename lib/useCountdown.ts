"use client";

import { useEffect, useState } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  /** false until the component has mounted on the client (avoids hydration mismatch) */
  ready: boolean;
}

function diff(target: number): Omit<TimeLeft, "ready"> {
  const now = Date.now();
  const delta = target - now;
  if (delta <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  const seconds = Math.floor((delta / 1000) % 60);
  const minutes = Math.floor((delta / 1000 / 60) % 60);
  const hours = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const days = Math.floor(delta / (1000 * 60 * 60 * 24));
  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Live countdown to an ISO date string. Returns `ready: false` on the server
 * and first client render so callers can render a stable placeholder.
 */
export function useCountdown(isoDate: string): TimeLeft {
  const target = new Date(isoDate).getTime();
  const [state, setState] = useState<Omit<TimeLeft, "ready">>(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  }));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    setState(diff(target));
    const id = setInterval(() => setState(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return { ...state, ready };
}
