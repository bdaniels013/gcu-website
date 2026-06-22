import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Strategic Partners",
  description:
    "The ministry partners we work alongside to advance the Missio Dei and multiply disciples across the Mississippi Gulf Coast.",
};

const partners = [
  {
    name: "Disciples Made, Inc.",
    body: "Our partner for Intentional Discipleship Environments (IDE's). Through Disciples Made we offer Followers Made, Missionaries Made, Leaders Made, and the Microchurch Learning Community — web-based discipleship tracks that help people learn to sit at the feet of Jesus and live on mission.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Strategic Partners</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              As a mission hub, we work alongside like-minded organizations to
              equip everyday disciples and multiply the work of the Gospel
              across the Gulf Coast.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-black/[0.07] bg-ink-soft p-8 shadow-[0_2px_18px_rgba(0,0,0,0.04)]"
              >
                <h2 className="text-xl font-medium uppercase tracking-tight text-mist">
                  {p.name}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-teal/20 bg-ink p-8 text-center">
            <h2 className="text-lg font-medium uppercase tracking-tight text-mist">
              Partner with us
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-mist-soft">
              Interested in a strategic partnership to advance the Missio Dei?
              We&apos;d love to connect.
            </p>
            <div className="mt-6">
              <Link
                href="/connect#connect-with-us"
                className="inline-flex rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
