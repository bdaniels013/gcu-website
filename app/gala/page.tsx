import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { TornDivider } from "@/components/TornDivider";
import { GalaCountdown } from "@/components/GalaCountdown";
import { gala, galaSponsorTiers, galaTickets } from "@/lib/event";

export const metadata: Metadata = {
  title: "GC Underground Gala, Fishers of Men",
  description:
    "Join us for the Second Annual GC Underground Gala, “Fishers of Men.” A night of breaking bread & spreading the Gospel. Thursday, September 17, 2026, 6:00–9:00 PM at the Biloxi Visitors Center.",
};

// Gala inquiries (tickets, tables, sponsorship) route to the contact form.
const reserveHref = "/contact";

export default function GalaPage() {
  return (
    <>
      {/* ───────── Hero (dark nautical) ───────── */}
      <section className="relative isolate overflow-hidden bg-teal-darkest">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-deep/40 via-teal-darkest to-teal-darkest" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-orange/20 blur-3xl" />

        <Container className="relative py-20 text-center sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-seafoam sm:text-sm">
            {gala.ordinal}
          </p>
          <h1 className="mt-5 text-[2.5rem] font-medium uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
            {gala.title}
          </h1>
          <p className="mt-6 text-2xl font-medium italic text-amber sm:text-4xl">
            “{gala.theme}”
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/70 sm:text-base">
            {gala.tagline}
          </p>

          <div className="mt-8 flex flex-col items-center gap-1 text-white/85">
            <p className="text-base font-semibold sm:text-lg">
              {gala.dateLabel} · {gala.timeLabel}
            </p>
            <p className="text-sm text-white/70">
              {gala.venue} · {gala.venueAddress}
            </p>
          </div>

          <div className="mt-10">
            <GalaCountdown />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={reserveHref}
              className="inline-flex items-center justify-center rounded-[3px] bg-orange px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep"
            >
              Reserve Your Spot
            </a>
            <Link
              href="#sponsor"
              className="inline-flex items-center justify-center rounded-[3px] border border-white/40 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
            >
              Become a Sponsor
            </Link>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/55">
            {gala.ticketNote}
          </p>
        </Container>

        <TornDivider fill="fill-ink" position="bottom" />
      </section>

      {/* ───────── Scripture ───────── */}
      <section className="bg-ink">
        <Container className="py-16 text-center sm:py-20">
          <div className="mx-auto max-w-2xl space-y-8">
            {gala.verses.map((v) => (
              <p
                key={v}
                className="text-xl font-medium italic leading-relaxed text-mist sm:text-2xl"
              >
                “{v}”
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── Event details + map ───────── */}
      <section className="border-t border-black/10 bg-ink-soft">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                Event Details
              </p>
              <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
                Join us for an unforgettable evening
              </h2>
              <dl className="mt-8 space-y-5 text-mist-soft">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                    When
                  </dt>
                  <dd className="mt-1 text-base text-mist">
                    {gala.dateLabel}
                    <br />
                    {gala.timeLabel}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                    Where
                  </dt>
                  <dd className="mt-1 text-base text-mist">
                    {gala.venue}
                    <br />
                    {gala.venueAddress}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                    Tickets &amp; Tables
                  </dt>
                  <dd className="mt-1 text-base text-mist">
                    {gala.ticketNote}.{" "}
                    <a
                      href={reserveHref}
                      className="font-semibold text-teal hover:underline"
                    >
                      Reserve your spot
                    </a>{" "}
                    and we&apos;ll follow up with the details.
                  </dd>
                </div>
              </dl>

              {/* Ticket / table options */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {galaTickets.map((tk) => (
                  <div
                    key={tk.name}
                    className="rounded-md border border-black/[0.07] bg-ink p-5 shadow-[0_2px_14px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-base font-medium uppercase tracking-tight text-mist">
                        {tk.name}
                      </h3>
                      <span className="text-lg font-bold text-teal">
                        {tk.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-mist-soft">{tk.note}</p>
                    <ul className="mt-3 space-y-1 text-[13px] text-mist-soft">
                      {tk.includes.map((inc) => (
                        <li key={inc} className="flex gap-2">
                          <span className="text-teal" aria-hidden>
                            ·
                          </span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={reserveHref}
                  className="inline-flex rounded-[3px] bg-orange px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep"
                >
                  Reserve Your Spot
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-md border border-black/10">
              <iframe
                title="Map to the Biloxi Visitors Center"
                src="https://maps.google.com/maps?q=1050%20Beach%20Blvd%20Biloxi%20MS%2039530&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Sponsorship ───────── */}
      <section
        id="sponsor"
        className="scroll-mt-36 border-t border-black/10 bg-ink"
      >
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Partner With Us
            </p>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
              Sponsorship Opportunities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist-soft">
              Partner with us and change eternity. Thank you for considering a
              sponsorship of the GC Underground Gala — every level helps spread
              the Gospel across the Gulf Coast.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galaSponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-md border p-7 ${
                  tier.highlighted
                    ? "border-teal bg-teal text-white shadow-[0_8px_30px_rgba(0,84,94,0.25)]"
                    : "border-black/[0.07] bg-ink-card shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`text-lg font-medium uppercase tracking-wide ${
                        tier.highlighted ? "text-white" : "text-mist"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    {tier.subtitle && (
                      <p
                        className={`mt-0.5 text-xs italic ${
                          tier.highlighted ? "text-white/80" : "text-mist-soft"
                        }`}
                      >
                        {tier.subtitle}
                      </p>
                    )}
                  </div>
                  {tier.availability && (
                    <span
                      className={`flex-none rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        tier.highlighted
                          ? "bg-white/20 text-white"
                          : "bg-orange/15 text-orange-deep"
                      }`}
                    >
                      {tier.availability}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-3 text-3xl font-bold ${
                    tier.highlighted ? "text-white" : "text-teal"
                  }`}
                >
                  {tier.price}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        className={
                          tier.highlighted ? "text-white" : "text-teal"
                        }
                        aria-hidden
                      >
                        ✦
                      </span>
                      <span
                        className={
                          tier.highlighted ? "text-white/90" : "text-mist-soft"
                        }
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={reserveHref}
                  className={`mt-7 inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                    tier.highlighted
                      ? "bg-white text-teal hover:bg-white/90"
                      : "bg-orange text-white hover:bg-orange-deep"
                  }`}
                >
                  Become a Sponsor
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-mist-soft">
            Interested in sponsoring or have questions?{" "}
            <a
              href={reserveHref}
              className="font-semibold text-teal hover:underline"
            >
              Reach out through our contact form
            </a>{" "}
            and we&apos;ll follow up with you.
          </p>
        </Container>
      </section>

      {/* ───────── Closing reserve CTA ───────── */}
      <section className="relative bg-teal-darkest">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-medium uppercase tracking-tight text-white sm:text-4xl">
            Come be part of the harvest.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
            Seats are limited. Reserve your spot at the Second Annual GC
            Underground Gala.
          </p>
          <div className="mt-8">
            <a
              href={reserveHref}
              className="inline-flex rounded-[3px] bg-orange px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep"
            >
              Reserve Your Spot
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
