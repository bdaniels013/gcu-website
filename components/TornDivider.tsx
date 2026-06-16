/**
 * Torn-paper / textured edge divider — mimics the ragged edges on the
 * original gulfcoastunderground.org between the hero, the dark mission
 * band, and the footer (instead of a flat straight line).
 *
 * The SVG is a solid shape whose TOP edge is irregular; place it at the
 * top of a section (it overlaps upward into the section above) so the
 * section's color "tears" up into the previous one.
 *
 *   position="top"    → teeth bite upward into the section above
 *   position="bottom" → teeth bite downward into the section below
 */
type Props = {
  /** Tailwind fill class for the torn shape, e.g. "fill-charcoal" */
  fill: string;
  position?: "top" | "bottom";
  className?: string;
};

// An intentionally irregular edge (mix of small + large teeth) so it reads
// as torn paper rather than a regular zig-zag.
const EDGE =
  "0,22 26,7 52,25 84,10 110,29 142,13 174,30 206,6 236,21 274,11 308,28 " +
  "340,9 372,26 404,7 438,23 470,12 504,29 536,8 568,24 602,11 636,27 668,7 " +
  "702,22 736,13 768,30 800,9 832,25 866,6 900,23 934,12 968,28 1000,8 " +
  "1034,24 1066,11 1100,27 1134,9 1166,21 1200,13 1234,29 1266,7 1300,24 " +
  "1334,10 1368,26 1402,8 1440,20";

export function TornDivider({ fill, position = "top", className = "" }: Props) {
  const path = `M0,40 L${EDGE.replace(/ /g, " L")} L1440,40 Z`;
  const posClass =
    position === "top"
      ? "top-0 -translate-y-[99%]"
      : "bottom-0 translate-y-[99%] rotate-180";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-10 leading-[0] ${posClass} ${className}`}
    >
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="block h-5 w-full sm:h-7"
      >
        <path d={path} className={fill} />
      </svg>
    </div>
  );
}
