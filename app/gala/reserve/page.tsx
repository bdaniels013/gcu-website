import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { GalaForm } from "@/components/GalaForm";
import { gala } from "@/lib/event";

export const metadata: Metadata = {
  title: "Reserve · GC Underground Gala",
  description:
    "Reserve tickets, a table, or a sponsorship for the Second Annual GC Underground Gala, “Fishers of Men.”",
};

export default function GalaReservePage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              {gala.ordinal} &middot; &ldquo;{gala.theme}&rdquo;
            </p>
            <h1 className="mt-3 text-3xl font-medium uppercase leading-tight tracking-tight text-mist sm:text-4xl">
              Reserve Your Place at the Gala
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-mist-soft">
              {gala.dateLabel} &middot; {gala.timeLabel} &middot; {gala.venue}.
              Tell us how you&apos;d like to join us and we&apos;ll follow up
              with the details.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-black/[0.07] bg-ink-soft p-6 shadow-[0_2px_24px_rgba(16,32,31,0.06)] sm:p-8">
            <Suspense fallback={<div className="min-h-[440px]" />}>
              <GalaForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
