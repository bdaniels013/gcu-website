/* eslint-disable @next/next/no-img-element */

/**
 * Gulf Coast Underground brand mark — the real "GC · MISSIO DEI" monogram.
 * `variant="light"` renders the white version for dark backgrounds.
 */
export function Logo({
  className = "h-10 w-10",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const src = variant === "light" ? "/images/logo-06.png" : "/images/logo-07.png";
  return (
    <img
      src={src}
      alt="Gulf Coast Underground — Missio Dei"
      className={`${className} object-contain`}
      width={1399}
      height={1415}
    />
  );
}
