import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { TornDivider } from "@/components/TornDivider";
import { GalaCountdown } from "@/components/GalaCountdown";
import { gala, galaSponsorTiers } from "@/lib/event";

export const metadata: Metadata = {
  title: "GC Underground Gala, Fishers of Men",
  description:
    "Join us for the Second Annual GC Underground Gala, “Fishers of Men.” A night of breaking bread & spreading the Gospel. Thursday, September 17, 2026, 6:00–9:00 PM at the Biloxi Visitors Center.",
};

const reserveHref = `sms:+1${gala.reserveNumberRaw}?&body=${encodeURIComponent(
  gala.reserveMessage,
)}`;

function ReserveButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={reserveHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-7 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

export default function GalaPage() {
  return (
    <>
      {/* ───────── Hero (dark nautical) ───────── */}
      <section className="relative isolate overflow-hidden bg-teal-darkest">
        {/* layered gradients for an ocean-at-night feel */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-teal-deep/40 via-teal-darkest to-teal-darkest" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-amber/20 blur-3xl" />

        <Container className="relative py-20 text-center sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal sm:text-sm">
            {gala.ordinal}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl">
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
            <ReserveButton className="bg-amber text-ink hover:bg-amber-deep">
              Text {gala.reserveNumber} to Reserve
            </ReserveButton>
            <Link
              href="#sponsor"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
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

      {/* ───────── Event details ───────── */}
      <section className="border-t border-black/10 bg-ink-soft">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
                Event Details
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
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
                    Reserve
                  </dt>
                  <dd className="mt-1 text-base text-mist">
                    {gala.ticketNote}. Text{" "}
                    <a
                      href={reserveHref}
                      className="font-semibold text-teal hover:underline"
                    >
                      {gala.reserveNumber}
                    </a>{" "}
                    to lock in your spot.
                  </dd>
                </div>
              </dl>
              <div className="mt-8">
                <ReserveButton className="bg-teal text-white hover:bg-teal-deep">
                  Text to Reserve
                </ReserveButton>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10">
              <iframe
                title="Map to the Biloxi Visitors Center"
                src="https://maps.google.com/maps?q=1050%20Beach%20Blvd%20Biloxi%20MS%2039530&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full lg:h-80"
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
        className="scroll-mt-24 border-t border-black/10 bg-ink"
      >
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal">
              Partner With Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              Sponsorship Opportunities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist-soft">
              We are always looking for strategic partnerships to advance the
              Missio Dei. Thank you for considering a sponsorship of the GC
              Underground Gala, every level helps spread the Gospel across the
              Gulf Coast.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {galaSponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-3xl border p-7 ${
                  tier.highlighted
                    ? "border-teal bg-teal text-white shadow-[0_8px_30px_rgba(0,84,94,0.25)]"
                    : "border-black/[0.07] bg-ink-card shadow-[0_2px_20px_rgba(16,32,31,0.05)]"
                }`}
              >
                <h3
                  className={`text-xl font-bold uppercase tracking-wide ${
                    tier.highlighted ? "text-white" : "text-mist"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-1 text-3xl font-extrabold ${
                    tier.highlighted ? "text-white" : "text-teal"
                  }`}
                >
                  {tier.price}
                </p>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed">
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
                <Link
                  href="/contact"
                  className={`mt-7 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                    tier.highlighted
                      ? "bg-white text-teal hover:bg-white/90"
                      : "bg-teal text-white hover:bg-teal-deep"
                  }`}
                >
                  Become a Sponsor
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-mist-soft">
            Interested in sponsoring or have questions?{" "}
            <Link
              href="/contact"
              className="font-semibold text-teal hover:underline"
            >
              Reach out to our team
            </Link>{" "}
            or text {gala.reserveNumber} and we&apos;ll follow up with you.
          </p>
        </Container>
      </section>

      {/* ───────── Closing reserve CTA ───────── */}
      <section className="relative bg-teal-darkest">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Come be part of the harvest.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/75">
            Seats are limited. Text {gala.reserveNumber} to reserve your spot at
            the Second Annual GC Underground Gala.
          </p>
          <div className="mt-8">
            <ReserveButton className="bg-amber text-ink hover:bg-amber-deep">
              Text {gala.reserveNumber} to Reserve
            </ReserveButton>
          </div>
        </Container>
      </section>
    </>
  );
}
