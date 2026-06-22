import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Financial Sponsors",
  description:
    "The people and companies whose generosity sustains Gulf Coast Underground and the Missio Dei on the Mississippi Gulf Coast.",
};

export default function SponsorsPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Financial Sponsors</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              We are grateful for the people and companies whose generosity
              sustains the work of the Underground and advances the Missio Dei
              across the Gulf Coast.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-black/[0.07] bg-ink-soft p-10 text-center">
            <h2 className="text-xl font-medium uppercase tracking-tight text-mist">
              Become a Sponsor
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-mist-soft">
              Our sponsors will be honored here. Want to stand with the mission?
              Partner with us through a one-time or recurring gift, or sponsor
              the Gala.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/support"
                className="inline-flex rounded-[3px] bg-orange px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep"
              >
                Give / Sponsor
              </Link>
              <Link
                href="/gala#sponsor"
                className="inline-flex rounded-[3px] border-2 border-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-teal transition-colors hover:bg-teal/[0.06]"
              >
                Sponsor the Gala
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
