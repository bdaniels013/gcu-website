/**
 * Torn / ragged section divider.
 *
 * This is the EXACT shape the live gulfcoastunderground.org uses for its hero
 * bottom edge — a Divi "section divider" SVG, read directly out of the live
 * site's CSS background-image (viewBox 0 0 1280 140, preserveAspectRatio
 * none). Using the real path (instead of a hand-drawn zigzag) is what makes
 * the hero → body transition match the live design.
 *
 *   position="top"    → the shape sits at the top of a section and its ragged
 *                       peaks rise UP into the section above (e.g. dark mission
 *                       band tearing up into the hero photo).
 *   position="bottom" → flipped, tearing DOWN into the section below.
 */
type Props = {
  /** Tailwind fill class for the shape, e.g. "fill-charcoal" */
  fill: string;
  position?: "top" | "bottom";
  className?: string;
};

// Verbatim from the live site's Divi bottom-divider background SVG.
const DIVI_TORN =
  "M0 0l64.8 30.95 91.2-2.54 95.46 27.87 120.04.2L443 83.15l90.09-3.12L640 110.12l102.39-29.73 85.55 8.51 88.11-5.75L992 52.22l73.21 4.26L1132 38.79l77-.33L1280 0v140H0V0z";

export function TornDivider({ fill, position = "top", className = "" }: Props) {
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
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        className="block h-[52px] w-full sm:h-[78px] lg:h-[91px]"
      >
        <path d={DIVI_TORN} className={fill} />
      </svg>
    </div>
  );
}
