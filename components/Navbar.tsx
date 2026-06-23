"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ScheduleBanner } from "./ScheduleBanner";

interface NavChild {
  label: string;
  href: string;
}
interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const leftItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Are",
    href: "/who-we-are",
    children: [
      { label: "Our Background", href: "/who-we-are#background" },
      { label: "Our Manifesto", href: "/who-we-are#manifesto" },
      { label: "Our Organization", href: "/who-we-are#organization" },
    ],
  },
  {
    label: "Connect",
    href: "/connect",
    children: [
      { label: "Calendar", href: "/calendar" },
      { label: "DBS", href: "/connect#dbs" },
      { label: "IDE's", href: "/connect#ides" },
      { label: "Microchurch", href: "/connect#microchurch" },
      { label: "Connect With Us", href: "/connect#connect-with-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
];

const rightItems: NavItem[] = [
  { label: "Gala", href: "/gala" },
  {
    label: "Partners/Sponsors",
    href: "/partners",
    children: [
      { label: "Strategic Partners", href: "/partners" },
      { label: "Financial Sponsors", href: "/sponsors" },
    ],
  },
  { label: "Support", href: "/support" },
  { label: "Discover Your Part", href: "/discover-your-part" },
];

const allItems = [...leftItems, ...rightItems];

function isActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  return base === "/" ? pathname === "/" : pathname.startsWith(base);
}

function DesktopLink({ item, pathname }: { item: NavItem; pathname: string }) {
  const active = isActive(pathname, item.href);
  const [open, setOpen] = useState(false);
  const linkClass = `inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-teal ${
    active ? "text-teal" : "text-mist-soft"
  }`;

  if (!item.children) {
    return (
      <Link href={item.href} className={linkClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={linkClass}
        onClick={() => setOpen(false)}
      >
        {item.label}
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className={`mt-0.5 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <div
        className={`absolute left-0 top-full z-50 pt-3 transition-opacity duration-150 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="w-[240px] border-t-[3px] border-[#7a7a7a] bg-white py-5 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
          {item.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={() => setOpen(false)}
                className="block whitespace-nowrap px-5 py-1.5 text-[13px] font-normal uppercase tracking-[0.04em] text-black transition-colors hover:text-teal"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 bg-ink/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-black/10 px-5 py-2.5 sm:px-8">
        {/* Left links (desktop) */}
        <ul className="hidden items-center justify-end gap-5 xl:flex">
          {leftItems.map((item) => (
            <li key={item.href}>
              <DesktopLink item={item} pathname={pathname} />
            </li>
          ))}
        </ul>
        <div className="xl:hidden" />

        {/* Center logo */}
        <Link
          href="/"
          className="justify-self-center"
          aria-label="Gulf Coast Underground home"
        >
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
        </Link>

        {/* Right links (desktop) + mobile toggle */}
        <div className="flex items-center">
          <ul className="hidden items-center justify-start gap-5 xl:flex">
            {rightItems.map((item) => (
              <li key={item.href}>
                <DesktopLink item={item} pathname={pathname} />
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-mist xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Thin weekly-schedule strip, pinned with the header on every page */}
      <ScheduleBanner />

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-t border-black/10 bg-ink/98 backdrop-blur xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-0.5 px-5 py-4 sm:px-8">
            {allItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide transition-colors ${
                    isActive(pathname, item.href)
                      ? "text-teal"
                      : "text-mist-soft hover:bg-black/[0.04]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 ml-3 border-l border-black/10 pl-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-mist-soft hover:text-teal"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
