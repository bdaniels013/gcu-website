import type { Metadata } from "next";
import { ButtonLink, Card, Container, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Partner financially with Gulf Coast Underground to equip everyday disciples and advance the Missio Dei on the Mississippi Gulf Coast.",
};

// Update this to the ministry's live Tithe.ly (or other) giving URL.
const GIVING_URL = "https://tithe.ly/give?c=gulfcoastunderground";

const reasons = [
  {
    title: "Equip everyday disciples",
    body: "Your giving trains and resources people to start Discovery Bible Studies and microchurches across the coast.",
  },
  {
    title: "Multiply the movement",
    body: "We invest in reproducible discipleship — every dollar helps disciples make more disciples.",
  },
  {
    title: "Serve our neighbors",
    body: "From outreach days to ministry support, your generosity meets real needs in our community.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Fuel the mission on the Gulf Coast."
        subtitle="Gulf Coast Underground is sustained by the generosity of people who believe in equipping everyday disciples. Thank you for partnering with us."
      />

      <Container className="py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>Why Give</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">
              Every gift advances the Missio Dei
            </h2>
            <div className="mt-8 space-y-5">
              {reasons.map((r) => (
                <Card key={r.title}>
                  <h3 className="text-lg font-semibold text-mist">{r.title}</h3>
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
            <h2 className="mt-3 text-2xl font-bold text-mist">
              Make a gift today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mist-soft">
              Give a one-time gift or set up recurring support through our secure
              giving partner.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink href={GIVING_URL}>Give Online</ButtonLink>
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
    </>
  );
}
