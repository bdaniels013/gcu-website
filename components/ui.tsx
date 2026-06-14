import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>
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
    <section className="relative overflow-hidden border-b border-white/10 bg-ink-soft">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      <Container className="relative py-20 sm:py-24">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-mist sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-soft">
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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]";
  const styles: Record<string, string> = {
    primary: "bg-amber text-ink",
    secondary: "bg-teal text-ink",
    ghost: "border border-white/15 text-mist hover:bg-white/5 hover:scale-100",
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
      className={`rounded-3xl border border-white/10 bg-ink-card p-7 transition-colors hover:border-teal/40 ${className}`}
    >
      {children}
    </div>
  );
}
