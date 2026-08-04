"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/**
 * Full-width YouTube video that starts playing once it scrolls into view.
 * Until then it shows the video thumbnail with a play badge; when ~40% of it
 * enters the viewport the autoplaying player mounts (and disconnects the
 * observer so it only triggers once). Sound on autoplay is still subject to
 * the browser's autoplay policy.
 */
export function GalaVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || play) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [play]);

  return (
    <div ref={ref} className="relative aspect-video w-full bg-black">
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="ml-1 text-black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
