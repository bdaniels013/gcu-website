/**
 * Gulf Coast Underground mark — an "underground" arch over a gulf wave,
 * rendered as inline SVG so it scales crisply and needs no asset pipeline.
 */
export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Gulf Coast Underground"
    >
      <circle cx="32" cy="32" r="30" className="fill-ink-card" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
      {/* underground arch */}
      <path
        d="M16 38c0-8.84 7.16-16 16-16s16 7.16 16 16"
        stroke="var(--color-teal)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* gulf wave */}
      <path
        d="M14 44c3.2 0 3.2 3 6.4 3s3.2-3 6.4-3 3.2 3 6.4 3 3.2-3 6.4-3 3.2 3 6.4 3"
        stroke="var(--color-amber)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* center light */}
      <circle cx="32" cy="34" r="3" fill="var(--color-amber)" />
    </svg>
  );
}
