import type { Metadata } from "next";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  LinedHeading,
} from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { TithelyGiveButton } from "@/components/TithelyGiveButton";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Partner financially with Gulf Coast Underground to equip everyday disciples and advance the Missio Dei on the Mississippi Gulf Coast.",
};

const reasons = [
  {
    title: "Equip everyday disciples",
    body: "Your giving trains and resources people to start Discovery Bible Studies and microchurches across the coast.",
  },
  {
    title: "Multiply the movement",
    body: "We invest in reproducible discipleship, every dollar helps disciples make more disciples.",
  },
  {
    title: "Serve our neighbors",
    body: "From outreach days to ministry support, your generosity meets real needs in our community.",
  },
];

export default function SupportPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Support</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              Gulf Coast Underground is sustained by the generosity of people
              who believe in equipping everyday disciples. Thank you for
              partnering with us.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow>Why Give</Eyebrow>
              <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist">
                Every gift advances the Missio Dei
              </h2>
              <div className="mt-8 space-y-5">
                {reasons.map((r) => (
                  <Card key={r.title}>
                    <h3 className="text-lg font-semibold text-mist">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-soft">
                      {r.body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-ink-soft p-8 text-center lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber">
                Give Securely
              </p>
              <h2 className="mt-3 text-2xl font-medium uppercase text-mist">
                Make a gift today
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist-soft">
                Give a one-time gift or set up recurring support through our
                secure giving partner.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <TithelyGiveButton className="w-full" />
                <ButtonLink href="/contact" variant="ghost">
                  Other ways to give
                </ButtonLink>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-mist-soft">
                Prefer to mail a gift? Contact us at{" "}
                <a
                  href="mailto:gcundergroundmission@gmail.com"
                  className="text-teal hover:underline"
                >
                  gcundergroundmission@gmail.com
                </a>{" "}
                and we&apos;ll help.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
