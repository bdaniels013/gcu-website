/**
 * Torn / ragged section divider — the EXACT Divi "section divider" the live
 * gulfcoastunderground.org uses, read out of its CSS background-image SVG via
 * the Chrome MCP (viewBox 0 0 1280 140, preserveAspectRatio none).
 *
 * The depth/3D look comes from TWO stacked paths inside one fill group:
 *   1. a shallower edge at opacity 0.5 — the soft shadow band
 *   2. the deeper, solid edge on top — the crisp line
 * Together they read as the dark band casting a soft shadow as it tears into
 * the photo above. Both paths are verbatim from the live SVG.
 *
 *   position="top"    → ragged peaks rise UP into the section above
 *                       (e.g. the dark mission band tearing up into the hero).
 *   position="bottom" → flipped, tearing DOWN into the section below.
 */
type Props = {
  /** Tailwind fill class for the shape, e.g. "fill-charcoal" */
  fill: string;
  position?: "top" | "bottom";
  className?: string;
};

// Both paths verbatim from the live site's Divi divider SVG.
const SHADOW_D =
  "M0 0l64.8 30.95 91.2-2.54 95.46 27.87 120.04.2L443 83.15l90.09-3.12L640 110.12l102.39-29.73 85.55 8.51 88.11-5.75L992 52.22l73.21 4.26L1132 38.79l77-.33L1280 0v140H0V0z";
const MAIN_D =
  "M0 0l64.8 38.69 91.2-3.18 95.46 34.84 120.04.24 71.5 33.35 90.09-3.91L640 137.65l102.39-37.17 85.55 10.65 88.11-7.19L992 65.28l73.21 5.31 66.79-22.1 77-.41L1280 0v140H0V0z";

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
        <g className={fill}>
          <path d={SHADOW_D} opacity="0.5" />
          <path d={MAIN_D} />
        </g>
      </svg>
    </div>
  );
}
