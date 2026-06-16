/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TornDivider } from "./TornDivider";

const links = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Connect", href: "/connect" },
  { label: "Events", href: "/events" },
  { label: "Support", href: "/support" },
  { label: "Discover Your Part", href: "/discover-your-part" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-teal-deep text-white">
      {/* Torn edge tearing up into the section above */}
      <TornDivider fill="fill-teal-deep" position="top" />

      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
        <img
          src="/images/logo-06.png"
          alt="Gulf Coast Underground, Missio Dei"
          className="mx-auto w-full max-w-xs"
        />

        <address className="mt-8 space-y-1 text-sm not-italic text-white/80">
          <p>GC Underground · Missio Dei</p>
          <p>1109 Cowan Road, Unit B9 · Gulfport, MS 39507</p>
          <p>
            <a
              href="mailto:gcundergroundmission@gmail.com"
              className="underline-offset-4 hover:underline"
            >
              gcundergroundmission@gmail.com
            </a>
          </p>
        </address>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-widest text-white/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-5 py-5 text-center text-xs text-white/60 sm:px-8">
          © {new Date().getFullYear()} Gulf Coast Underground · Advancing the
          Missio Dei on the Mississippi Gulf Coast.
        </div>
      </div>
    </footer>
  );
}
