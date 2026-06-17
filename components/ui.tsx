import Link from "next/link";
import type { ReactNode } from "react";

/* Design-system primitives — values measured from the live site:
   content column 1080px, section titles large + UPPERCASE Raleway 500,
   buttons uppercase Raleway with a 3px radius. */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--content)] px-5 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
      {children}
    </p>
  );
}

/** Large, light, uppercase section title — the live site's signature. */
export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(2rem,5vw,3.5rem)] font-medium uppercase leading-[1.05] tracking-tight text-mist ${className}`}
    >
      {children}
    </h2>
  );
}

/** Centered uppercase heading flanked by horizontal rules — the live site's
 *  signature section header ("OUR BACKGROUND", "OUR MANIFESTO", etc.). */
export function LinedHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-5 sm:gap-8 ${className}`}>
      <span className="h-px flex-1 bg-black/15" />
      <h2 className="text-center text-[clamp(1.6rem,4vw,2.75rem)] font-medium uppercase leading-tight tracking-tight text-mist">
        {children}
      </h2>
      <span className="h-px flex-1 bg-black/15" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-ink-soft">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal/5 blur-3xl" />
      <Container className="relative py-20 sm:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,5vw,4rem)] font-medium uppercase leading-[1.05] tracking-tight text-mist">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-soft sm:text-lg">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-[3px] px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-teal text-white hover:bg-teal-deep",
    secondary: "bg-amber text-white hover:bg-amber-deep",
    ghost: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
  };
  const external = href.startsWith("http");
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-black/[0.07] bg-ink-card p-7 shadow-[0_2px_18px_rgba(0,0,0,0.04)] transition-all hover:border-teal/30 hover:shadow-[0_6px_26px_rgba(0,0,0,0.07)] ${className}`}
    >
      {children}
    </div>
  );
}
